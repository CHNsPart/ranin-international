import { setRequestLocale } from "next-intl/server";
import { getProjects } from "@/lib/queries/projects";
import { getProjectsPageContent } from "@/lib/queries/site-content";
import ProjectsPageClient from "./projects-page-client";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [projects, pageContent] = await Promise.all([
    getProjects(locale),
    getProjectsPageContent(locale),
  ]);

  return <ProjectsPageClient projects={projects} pageContent={pageContent} />;
}
