import { setRequestLocale } from "next-intl/server";
import { getServiceBySlug, getServices } from "@/lib/queries/services";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import ServiceDetailClient from "./service-detail-client";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return routing.locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug }))
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const [service, allServices] = await Promise.all([
    getServiceBySlug(slug, locale),
    getServices(locale),
  ]);

  if (!service) notFound();

  // Strip non-serializable `icon` property
  const { icon, ...serializedService } = service;
  const serializedAll = allServices.map(({ icon, ...rest }) => rest);

  return <ServiceDetailClient service={serializedService} allServices={serializedAll} />;
}
