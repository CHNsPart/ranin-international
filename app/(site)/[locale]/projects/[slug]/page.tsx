import { setRequestLocale } from "next-intl/server";
import { getProjectBySlug, getProjects } from "@/lib/queries/projects";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import ProjectDetailClient from "./project-detail-client";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const [project, allProjects] = await Promise.all([
    getProjectBySlug(slug, locale),
    getProjects(locale),
  ]);

  if (!project) notFound();

  return <ProjectDetailClient project={project} allProjects={allProjects} />;
}
