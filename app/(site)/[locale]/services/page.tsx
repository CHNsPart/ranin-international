import { setRequestLocale } from "next-intl/server";
import { getServices } from "@/lib/queries/services";
import { getServicesPageContent } from "@/lib/queries/site-content";
import ServicesPageClient from "./services-page-client";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const [services, pageContent] = await Promise.all([
    getServices(locale),
    getServicesPageContent(locale),
  ]);

  // Strip non-serializable `icon` property before passing to client
  const serializedServices = services.map(({ icon, ...rest }) => rest);

  return <ServicesPageClient services={serializedServices} pageContent={pageContent} />;
}
