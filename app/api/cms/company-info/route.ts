import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { verifyCmsAuth, unauthorizedResponse } from "@/lib/cms-auth";

export async function GET() {
  const info = await prisma.companyInfo.findUnique({ where: { id: 1 } });
  return NextResponse.json(info);
}

export async function PUT(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();

  const data = {
    ...body,
    addressAr: body.addressAr ?? "",
    hoursAr: body.hoursAr ?? "",
    taglineAr: body.taglineAr ?? "",
  };

  const info = await prisma.companyInfo.upsert({
    where: { id: 1 },
    update: data,
    create: { id: 1, ...data },
  });

  revalidatePath("/", "layout");
  return NextResponse.json(info);
}
