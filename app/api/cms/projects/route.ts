import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { verifyCmsAuth, unauthorizedResponse } from "@/lib/cms-auth";

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { sortOrder: "asc" },
    include: {
      highlights: { orderBy: { sortOrder: "asc" } },
      scope: {
        orderBy: { sortOrder: "asc" },
        include: { details: { orderBy: { sortOrder: "asc" } } },
      },
      services: true,
      blogContent: { orderBy: { sortOrder: "asc" } },
    },
  });
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();
  const project = await prisma.project.create({
    data: {
      slug: body.slug,
      title: body.title,
      titleAr: body.titleAr ?? "",
      sector: body.sector,
      sectorAr: body.sectorAr ?? "",
      location: body.location,
      locationAr: body.locationAr ?? "",
      description: body.description,
      descriptionAr: body.descriptionAr ?? "",
      longDescription: body.longDescription,
      longDescriptionAr: body.longDescriptionAr ?? "",
      image: body.image ?? "",
      heroImage: body.heroImage ?? "",
      client: body.client ?? "",
      clientAr: body.clientAr ?? "",
      year: body.year ?? "",
      duration: body.duration ?? "",
      durationAr: body.durationAr ?? "",
      status: body.status ?? "Active",
      statusAr: body.statusAr ?? "",
      sortOrder: body.sortOrder ?? 0,
      highlights: {
        create: (body.highlights ?? []).map(
          (h: { text: string; textAr?: string }, i: number) => ({
            text: typeof h === "string" ? h : h.text,
            textAr: typeof h === "string" ? "" : h.textAr ?? "",
            sortOrder: i,
          })
        ),
      },
      scope: {
        create: (body.scope ?? []).map(
          (
            s: {
              title: string;
              titleAr?: string;
              details: { text: string; textAr?: string }[];
            },
            i: number
          ) => ({
            title: s.title,
            titleAr: s.titleAr ?? "",
            sortOrder: i,
            details: {
              create: (s.details ?? []).map(
                (d: { text: string; textAr?: string }, j: number) => ({
                  text: typeof d === "string" ? d : d.text,
                  textAr: typeof d === "string" ? "" : d.textAr ?? "",
                  sortOrder: j,
                })
              ),
            },
          })
        ),
      },
      services: {
        create: (body.services ?? []).map(
          (svc: { name: string; nameAr?: string }) => ({
            name: typeof svc === "string" ? svc : svc.name,
            nameAr: typeof svc === "string" ? "" : svc.nameAr ?? "",
          })
        ),
      },
      blogContent: {
        create: (body.blogContent ?? []).map(
          (
            b: {
              heading: string;
              headingAr?: string;
              body: string;
              bodyAr?: string;
            },
            i: number
          ) => ({
            heading: b.heading,
            headingAr: b.headingAr ?? "",
            body: b.body,
            bodyAr: b.bodyAr ?? "",
            sortOrder: i,
          })
        ),
      },
    },
    include: {
      highlights: true,
      scope: { include: { details: true } },
      services: true,
      blogContent: true,
    },
  });

  revalidatePath("/", "layout");
  return NextResponse.json(project, { status: 201 });
}

export async function PUT(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();
  const { id, highlights, scope, services, blogContent, ...data } = body;

  // Delete existing related records
  await prisma.projectHighlight.deleteMany({ where: { projectId: id } });
  await prisma.projectService.deleteMany({ where: { projectId: id } });
  await prisma.projectBlogContent.deleteMany({ where: { projectId: id } });
  const scopes = await prisma.projectScope.findMany({
    where: { projectId: id },
  });
  for (const s of scopes) {
    await prisma.projectScopeDetail.deleteMany({ where: { scopeId: s.id } });
  }
  await prisma.projectScope.deleteMany({ where: { projectId: id } });

  const project = await prisma.project.update({
    where: { id },
    data: {
      ...data,
      highlights: {
        create: (highlights ?? []).map(
          (h: { text: string; textAr?: string }, i: number) => ({
            text: typeof h === "string" ? h : h.text,
            textAr: typeof h === "string" ? "" : h.textAr ?? "",
            sortOrder: i,
          })
        ),
      },
      scope: {
        create: (scope ?? []).map(
          (
            s: {
              title: string;
              titleAr?: string;
              details: { text: string; textAr?: string }[];
            },
            i: number
          ) => ({
            title: s.title,
            titleAr: s.titleAr ?? "",
            sortOrder: i,
            details: {
              create: (s.details ?? []).map(
                (d: { text: string; textAr?: string }, j: number) => ({
                  text: typeof d === "string" ? d : d.text,
                  textAr: typeof d === "string" ? "" : d.textAr ?? "",
                  sortOrder: j,
                })
              ),
            },
          })
        ),
      },
      services: {
        create: (services ?? []).map(
          (svc: { name: string; nameAr?: string }) => ({
            name: typeof svc === "string" ? svc : svc.name,
            nameAr: typeof svc === "string" ? "" : svc.nameAr ?? "",
          })
        ),
      },
      blogContent: {
        create: (blogContent ?? []).map(
          (
            b: {
              heading: string;
              headingAr?: string;
              body: string;
              bodyAr?: string;
            },
            i: number
          ) => ({
            heading: b.heading,
            headingAr: b.headingAr ?? "",
            body: b.body,
            bodyAr: b.bodyAr ?? "",
            sortOrder: i,
          })
        ),
      },
    },
    include: {
      highlights: true,
      scope: { include: { details: true } },
      services: true,
      blogContent: true,
    },
  });

  revalidatePath("/", "layout");
  return NextResponse.json(project);
}

export async function DELETE(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") ?? "0");

  await prisma.project.delete({ where: { id } });
  revalidatePath("/", "layout");
  return NextResponse.json({ success: true });
}
