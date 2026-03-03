import { setRequestLocale } from "next-intl/server";
import { getAboutPageContent } from "@/lib/queries/site-content";
import { getCertifications } from "@/lib/queries/certifications";
import { getCTAStrip } from "@/lib/queries/site-content";
import AboutPageClient from "./about-page-client";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [aboutData, certifications, ctaData] = await Promise.all([
    getAboutPageContent(locale),
    getCertifications(locale),
    getCTAStrip(locale),
  ]);

  return <AboutPageClient data={aboutData} certifications={certifications} ctaData={ctaData} />;
}
