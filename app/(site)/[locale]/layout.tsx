import "@/app/globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Bebas_Neue, Cairo, Geist_Mono, Inter } from "next/font/google";
import { routing } from "@/src/i18n/routing";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/layout/preloader";
import { PageTransition } from "@/components/layout/page-transition";
import { getCompanyInfo } from "@/lib/queries/company-info";
import { getServicesForNav } from "@/lib/queries/services";
import { getProjectsForNav } from "@/lib/queries/projects";
import { getSiteMeta } from "@/lib/queries/site-content";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = await getSiteMeta(locale);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: {
        en: "/",
        ar: "/ar",
        "x-default": "/",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      images: [{ url: "/ranin-logo.png", width: 512, height: 512, alt: "Ranin International" }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const isRtl = locale === "ar";

  const [companyInfo, servicesNav, projectsNav, messages] = await Promise.all([
    getCompanyInfo(locale),
    getServicesForNav(locale),
    getProjectsForNav(locale),
    getMessages(),
  ]);

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${bebasNeue.variable} ${cairo.variable} ${inter.variable} ${geistMono.variable} dark`}
    >
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Preloader />
          <Navbar services={servicesNav} projects={projectsNav} locale={locale} />
          <PageTransition>{children}</PageTransition>
          <Footer companyInfo={companyInfo} services={servicesNav} locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
