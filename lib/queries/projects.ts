import { prisma } from "@/lib/db";
import { projects as defaultProjects, type Project } from "@/lib/data/projects";

/** Pick Arabic value if non-empty, otherwise English fallback */
function ar(arVal: string, enVal: string): string {
  return arVal && arVal.trim() ? arVal : enVal;
}

export async function getProjectsForNav(locale = "en"): Promise<
  { slug: string; title: string; sector: string; image: string }[]
> {
  try {
    const dbProjects = await prisma.project.findMany({
      orderBy: { sortOrder: "asc" },
      select: { slug: true, title: true, titleAr: true, sector: true, sectorAr: true, image: true },
    });
    if (dbProjects.length === 0) {
      return defaultProjects.map((p) => ({
        slug: p.slug,
        title: p.title,
        sector: p.sector,
        image: p.image,
      }));
    }
    const isAr = locale === "ar";
    return dbProjects.map((p) => ({
      slug: p.slug,
      title: isAr ? ar(p.titleAr, p.title) : p.title,
      sector: isAr ? ar(p.sectorAr, p.sector) : p.sector,
      image: p.image,
    }));
  } catch {
    return defaultProjects.map((p) => ({
      slug: p.slug,
      title: p.title,
      sector: p.sector,
      image: p.image,
    }));
  }
}

export async function getProjects(locale = "en"): Promise<Project[]> {
  try {
    const dbProjects = await prisma.project.findMany({
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

    if (dbProjects.length === 0) return defaultProjects;

    const isAr = locale === "ar";

    return dbProjects.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: isAr ? ar(p.titleAr, p.title) : p.title,
      sector: isAr ? ar(p.sectorAr, p.sector) : p.sector,
      location: isAr ? ar(p.locationAr, p.location) : p.location,
      description: isAr ? ar(p.descriptionAr, p.description) : p.description,
      longDescription: isAr ? ar(p.longDescriptionAr, p.longDescription) : p.longDescription,
      highlights: p.highlights.map((h) => isAr ? ar(h.textAr, h.text) : h.text),
      scope: p.scope.map((s) => ({
        title: isAr ? ar(s.titleAr, s.title) : s.title,
        details: s.details.map((d) => isAr ? ar(d.textAr, d.text) : d.text),
      })),
      blogContent: p.blogContent.map((b) => ({
        heading: isAr ? ar(b.headingAr, b.heading) : b.heading,
        body: isAr ? ar(b.bodyAr, b.body) : b.body,
      })),
      image: p.image,
      heroImage: p.heroImage,
      services: p.services.map((s) => isAr ? ar(s.nameAr, s.name) : s.name),
      client: isAr ? ar(p.clientAr, p.client) : p.client,
      year: p.year,
      duration: isAr ? ar(p.durationAr, p.duration) : p.duration,
      status: isAr ? ar(p.statusAr, p.status) : p.status,
    }));
  } catch {
    return defaultProjects;
  }
}

export async function getProjectBySlug(slug: string, locale = "en"): Promise<Project | undefined> {
  try {
    const dbProject = await prisma.project.findUnique({
      where: { slug },
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

    if (!dbProject) {
      return defaultProjects.find((p) => p.slug === slug);
    }

    const isAr = locale === "ar";

    return {
      id: dbProject.id,
      slug: dbProject.slug,
      title: isAr ? ar(dbProject.titleAr, dbProject.title) : dbProject.title,
      sector: isAr ? ar(dbProject.sectorAr, dbProject.sector) : dbProject.sector,
      location: isAr ? ar(dbProject.locationAr, dbProject.location) : dbProject.location,
      description: isAr ? ar(dbProject.descriptionAr, dbProject.description) : dbProject.description,
      longDescription: isAr ? ar(dbProject.longDescriptionAr, dbProject.longDescription) : dbProject.longDescription,
      highlights: dbProject.highlights.map((h) => isAr ? ar(h.textAr, h.text) : h.text),
      scope: dbProject.scope.map((s) => ({
        title: isAr ? ar(s.titleAr, s.title) : s.title,
        details: s.details.map((d) => isAr ? ar(d.textAr, d.text) : d.text),
      })),
      blogContent: dbProject.blogContent.map((b) => ({
        heading: isAr ? ar(b.headingAr, b.heading) : b.heading,
        body: isAr ? ar(b.bodyAr, b.body) : b.body,
      })),
      image: dbProject.image,
      heroImage: dbProject.heroImage,
      services: dbProject.services.map((s) => isAr ? ar(s.nameAr, s.name) : s.name),
      client: isAr ? ar(dbProject.clientAr, dbProject.client) : dbProject.client,
      year: dbProject.year,
      duration: isAr ? ar(dbProject.durationAr, dbProject.duration) : dbProject.duration,
      status: isAr ? ar(dbProject.statusAr, dbProject.status) : dbProject.status,
    };
  } catch {
    return defaultProjects.find((p) => p.slug === slug);
  }
}
