import { PrismaClient } from "@prisma/client";
import { services } from "../lib/data/services";
import { projects } from "../lib/data/projects";
import { servicesAr } from "../lib/data/services-ar";
import { projectsAr } from "../lib/data/projects-ar";
import { defaultHero, defaultHeroAr } from "../lib/data/defaults/hero";
import { defaultTrustBar, defaultTrustBarAr } from "../lib/data/defaults/trust-bar";
import { defaultAboutPreview, defaultAboutPreviewAr } from "../lib/data/defaults/about-preview";
import { defaultVision2030, defaultVision2030Ar } from "../lib/data/defaults/vision-2030";
import { defaultSectors, defaultSectorsAr } from "../lib/data/defaults/sectors";
import { defaultCTAStrip, defaultCTAStripAr } from "../lib/data/defaults/cta-strip";
import { defaultClientsProjects, defaultClientsProjectsAr } from "../lib/data/defaults/clients-projects";
import { defaultAboutPage, defaultAboutPageAr } from "../lib/data/defaults/about-page";
import { defaultContactPage, defaultContactPageAr } from "../lib/data/defaults/contact-page";
import { defaultServicesPage, defaultServicesPageAr } from "../lib/data/defaults/services-page";
import { defaultProjectsPage, defaultProjectsPageAr } from "../lib/data/defaults/projects-page";
import { defaultSiteMeta, defaultSiteMetaAr } from "../lib/data/defaults/site-meta";
import { defaultCompanyInfo, defaultCompanyInfoAr } from "../lib/data/defaults/company-info";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // ─── Clear existing data ─────────────────────────────────
  await prisma.serviceFeatureGroupDetail.deleteMany();
  await prisma.serviceFeatureGroup.deleteMany();
  await prisma.serviceFeature.deleteMany();
  await prisma.serviceImage.deleteMany();
  await prisma.service.deleteMany();
  await prisma.projectBlogContent.deleteMany();
  await prisma.projectScopeDetail.deleteMany();
  await prisma.projectScope.deleteMany();
  await prisma.projectHighlight.deleteMany();
  await prisma.projectService.deleteMany();
  await prisma.project.deleteMany();
  await prisma.partner.deleteMany();
  await prisma.certification.deleteMany();
  await prisma.companyInfo.deleteMany();
  await prisma.siteContent.deleteMany();

  // ─── Services (with Arabic) ──────────────────────────────
  console.log("Seeding services...");
  for (const [i, service] of services.entries()) {
    const ar = servicesAr[service.slug];
    await prisma.service.create({
      data: {
        slug: service.slug,
        title: service.title,
        titleAr: ar?.titleAr ?? "",
        shortTitle: service.shortTitle,
        shortTitleAr: ar?.shortTitleAr ?? "",
        description: service.description,
        descriptionAr: ar?.descriptionAr ?? "",
        longDescription: service.longDescription,
        longDescriptionAr: ar?.longDescriptionAr ?? "",
        iconName: service.iconName ?? "Package",
        heroImage: service.heroImage,
        sortOrder: i,
        features: {
          create: service.features.map((text, j) => ({
            text,
            sortOrder: j,
            textAr: ar?.features[j] ?? "",
          })),
        },
        featureGroups: {
          create: service.featureGroups.map((group, j) => ({
            title: group.title,
            titleAr: ar?.featureGroups[j]?.titleAr ?? "",
            sortOrder: j,
            details: {
              create: group.details.map((text, k) => ({
                text,
                sortOrder: k,
                textAr: ar?.featureGroups[j]?.details[k] ?? "",
              })),
            },
          })),
        },
        images: {
          create: service.images.map((url, j) => ({ url, sortOrder: j })),
        },
      },
    });
  }

  // ─── Projects (with Arabic) ──────────────────────────────
  console.log("Seeding projects...");
  for (const [i, project] of projects.entries()) {
    const ar = projectsAr[project.slug];
    await prisma.project.create({
      data: {
        slug: project.slug,
        title: project.title,
        titleAr: ar?.titleAr ?? "",
        sector: project.sector,
        sectorAr: ar?.sectorAr ?? "",
        location: project.location,
        locationAr: ar?.locationAr ?? "",
        description: project.description,
        descriptionAr: ar?.descriptionAr ?? "",
        longDescription: project.longDescription,
        longDescriptionAr: ar?.longDescriptionAr ?? "",
        image: project.image,
        heroImage: project.heroImage,
        client: project.client,
        clientAr: ar?.clientAr ?? "",
        year: project.year,
        duration: project.duration,
        durationAr: ar?.durationAr ?? "",
        status: project.status,
        statusAr: ar?.statusAr ?? "",
        sortOrder: i,
        highlights: {
          create: project.highlights.map((text, j) => ({
            text,
            sortOrder: j,
            textAr: ar?.highlights[j] ?? "",
          })),
        },
        scope: {
          create: project.scope.map((s, j) => ({
            title: s.title,
            titleAr: ar?.scope[j]?.titleAr ?? "",
            sortOrder: j,
            details: {
              create: s.details.map((text, k) => ({
                text,
                sortOrder: k,
                textAr: ar?.scope[j]?.details[k] ?? "",
              })),
            },
          })),
        },
        services: {
          create: project.services.map((name, j) => ({
            name,
            nameAr: ar?.services[j] ?? "",
          })),
        },
        blogContent: {
          create: (project.blogContent ?? []).map((b, j) => ({
            heading: b.heading,
            headingAr: ar?.blogContent[j]?.headingAr ?? "",
            body: b.body,
            bodyAr: ar?.blogContent[j]?.bodyAr ?? "",
            sortOrder: j,
          })),
        },
      },
    });
  }

  // ─── Partners (brand names stay English) ─────────────────
  console.log("Seeding partners...");
  for (const [i, partner] of defaultClientsProjects.partnersRow1.entries()) {
    await prisma.partner.create({
      data: { name: partner.alt, logoUrl: partner.src, row: 1, sortOrder: i },
    });
  }
  for (const [i, partner] of defaultClientsProjects.partnersRow2.entries()) {
    await prisma.partner.create({
      data: { name: partner.alt, logoUrl: partner.src, row: 2, sortOrder: i },
    });
  }

  // ─── Certifications (with Arabic subtitles) ──────────────
  console.log("Seeding certifications...");
  const certs = [
    { title: "ISO 9001:2015", subtitle: "Quality Management", subtitleAr: "إدارة الجودة", logoUrl: "/certificates/iso-9001-2015-quality-management.svg" },
    { title: "ISO 14001:2015", subtitle: "Environmental Management", subtitleAr: "الإدارة البيئية", logoUrl: "/certificates/iso-14001-2015-environmental-management.svg" },
    { title: "ISO 45001:2018", subtitle: "Occupational Health & Safety", subtitleAr: "الصحة والسلامة المهنية", logoUrl: "/certificates/iso-45001-2018-occupational-health-safety.svg" },
    { title: "Saudi Aramco", subtitle: "Approved Vendor", subtitleAr: "مورد معتمد", logoUrl: "/certificates/saudi-aramco-approved-vendor.svg" },
    { title: "SABIC", subtitle: "Approved Contractor", subtitleAr: "مقاول معتمد", logoUrl: "/certificates/sabic-approved-contractor.svg" },
    { title: "Royal Commission", subtitle: "Jubail Licensed", subtitleAr: "مرخص من الجبيل", logoUrl: "/certificates/royal-commission-jubail-licensed.svg" },
  ];
  for (const [i, cert] of certs.entries()) {
    await prisma.certification.create({
      data: { ...cert, sortOrder: i },
    });
  }

  // ─── Company Info (with Arabic) ──────────────────────────
  console.log("Seeding company info...");
  await prisma.companyInfo.create({
    data: {
      id: 1,
      ...defaultCompanyInfo,
      addressAr: defaultCompanyInfoAr.address,
      hoursAr: defaultCompanyInfoAr.hours,
      taglineAr: defaultCompanyInfoAr.tagline,
    },
  });

  // ─── Site Content (bilingual { en, ar } structure) ───────
  console.log("Seeding site content...");
  const siteContents: [string, unknown][] = [
    ["hero", { en: defaultHero, ar: defaultHeroAr }],
    ["trust-bar", { en: defaultTrustBar, ar: defaultTrustBarAr }],
    ["about-preview", { en: defaultAboutPreview, ar: defaultAboutPreviewAr }],
    ["vision-2030", { en: defaultVision2030, ar: defaultVision2030Ar }],
    ["sectors", { en: defaultSectors, ar: defaultSectorsAr }],
    ["cta-strip", { en: defaultCTAStrip, ar: defaultCTAStripAr }],
    ["clients-projects", { en: defaultClientsProjects, ar: defaultClientsProjectsAr }],
    ["about-page", { en: defaultAboutPage, ar: defaultAboutPageAr }],
    ["contact-page", { en: defaultContactPage, ar: defaultContactPageAr }],
    ["services-page", { en: defaultServicesPage, ar: defaultServicesPageAr }],
    ["projects-page", { en: defaultProjectsPage, ar: defaultProjectsPageAr }],
    ["site-meta", { en: defaultSiteMeta, ar: defaultSiteMetaAr }],
  ];

  for (const [id, data] of siteContents) {
    await prisma.siteContent.create({
      data: { id, data: data as object },
    });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
