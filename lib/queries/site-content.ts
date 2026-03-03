import { prisma } from "@/lib/db";

import { defaultHero, defaultHeroAr, type HeroData } from "@/lib/data/defaults/hero";
import { defaultTrustBar, defaultTrustBarAr, type TrustBarData } from "@/lib/data/defaults/trust-bar";
import { defaultAboutPreview, defaultAboutPreviewAr, type AboutPreviewData } from "@/lib/data/defaults/about-preview";
import { defaultVision2030, defaultVision2030Ar, type Vision2030Data } from "@/lib/data/defaults/vision-2030";
import { defaultSectors, defaultSectorsAr, type SectorsData } from "@/lib/data/defaults/sectors";
import { defaultCTAStrip, defaultCTAStripAr, type CTAStripData } from "@/lib/data/defaults/cta-strip";
import { defaultClientsProjects, defaultClientsProjectsAr, type ClientsProjectsData } from "@/lib/data/defaults/clients-projects";
import { defaultAboutPage, defaultAboutPageAr, type AboutPageData } from "@/lib/data/defaults/about-page";
import { defaultContactPage, defaultContactPageAr, type ContactPageData } from "@/lib/data/defaults/contact-page";
import { defaultServicesPage, defaultServicesPageAr, type ServicesPageData } from "@/lib/data/defaults/services-page";
import { defaultProjectsPage, defaultProjectsPageAr, type ProjectsPageData } from "@/lib/data/defaults/projects-page";
import { defaultSiteMeta, defaultSiteMetaAr, type SiteMetaData } from "@/lib/data/defaults/site-meta";

const defaultsMap: Record<string, unknown> = {
  hero: defaultHero,
  "trust-bar": defaultTrustBar,
  "about-preview": defaultAboutPreview,
  "vision-2030": defaultVision2030,
  sectors: defaultSectors,
  "cta-strip": defaultCTAStrip,
  "clients-projects": defaultClientsProjects,
  "about-page": defaultAboutPage,
  "contact-page": defaultContactPage,
  "services-page": defaultServicesPage,
  "projects-page": defaultProjectsPage,
  "site-meta": defaultSiteMeta,
};

const arDefaultsMap: Record<string, unknown> = {
  hero: defaultHeroAr,
  "trust-bar": defaultTrustBarAr,
  "about-preview": defaultAboutPreviewAr,
  "vision-2030": defaultVision2030Ar,
  sectors: defaultSectorsAr,
  "cta-strip": defaultCTAStripAr,
  "clients-projects": defaultClientsProjectsAr,
  "about-page": defaultAboutPageAr,
  "contact-page": defaultContactPageAr,
  "services-page": defaultServicesPageAr,
  "projects-page": defaultProjectsPageAr,
  "site-meta": defaultSiteMetaAr,
};

/**
 * Resolve bilingual SiteContent JSON.
 * New structure: { en: { heading: "..." }, ar: { heading: "..." } }
 * Legacy structure: { heading: "..." }
 * Falls back to English when Arabic value is missing.
 */
function resolveLocale<T>(data: unknown, locale: string, fallback: T): T {
  const obj = data as Record<string, unknown>;

  // New bilingual structure: { en: {...}, ar: {...} }
  if (obj && typeof obj === "object" && "en" in obj && typeof obj.en === "object") {
    if (locale === "ar" && "ar" in obj && typeof obj.ar === "object") {
      // Merge: Arabic values override English, but fall back to English for missing keys
      return { ...(obj.en as T), ...(obj.ar as T) };
    }
    return obj.en as T;
  }

  // Legacy flat structure — return as-is (English)
  return (obj as T) ?? fallback;
}

export async function getSiteContent<T>(id: string, locale = "en"): Promise<T> {
  const fallback = (locale === "ar" ? arDefaultsMap[id] : defaultsMap[id]) as T;
  try {
    const record = await prisma.siteContent.findUnique({ where: { id } });
    if (record) return resolveLocale<T>(record.data, locale, fallback);
    return fallback;
  } catch {
    return fallback;
  }
}

// Convenience typed getters
export const getHero = (locale?: string) => getSiteContent<HeroData>("hero", locale);
export const getTrustBar = (locale?: string) => getSiteContent<TrustBarData>("trust-bar", locale);
export const getAboutPreview = (locale?: string) => getSiteContent<AboutPreviewData>("about-preview", locale);
export const getVision2030 = (locale?: string) => getSiteContent<Vision2030Data>("vision-2030", locale);
export const getSectors = (locale?: string) => getSiteContent<SectorsData>("sectors", locale);
export const getCTAStrip = (locale?: string) => getSiteContent<CTAStripData>("cta-strip", locale);
export const getClientsProjects = (locale?: string) => getSiteContent<ClientsProjectsData>("clients-projects", locale);
export const getAboutPageContent = (locale?: string) => getSiteContent<AboutPageData>("about-page", locale);
export const getContactPageContent = (locale?: string) => getSiteContent<ContactPageData>("contact-page", locale);
export const getServicesPageContent = (locale?: string) => getSiteContent<ServicesPageData>("services-page", locale);
export const getProjectsPageContent = (locale?: string) => getSiteContent<ProjectsPageData>("projects-page", locale);
export const getSiteMeta = (locale?: string) => getSiteContent<SiteMetaData>("site-meta", locale);

// Re-export types for convenience
export type {
  HeroData,
  TrustBarData,
  AboutPreviewData,
  Vision2030Data,
  SectorsData,
  CTAStripData,
  ClientsProjectsData,
  AboutPageData,
  ContactPageData,
  ServicesPageData,
  ProjectsPageData,
  SiteMetaData,
};
