import { setRequestLocale } from "next-intl/server";
import { getContactPageContent } from "@/lib/queries/site-content";
import { getCompanyInfo } from "@/lib/queries/company-info";
import ContactPageClient from "./contact-page-client";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [contactData, companyInfo] = await Promise.all([
    getContactPageContent(locale),
    getCompanyInfo(locale),
  ]);

  return <ContactPageClient data={contactData} companyInfo={companyInfo} />;
}
