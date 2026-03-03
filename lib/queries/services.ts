import { prisma } from "@/lib/db";
import { services as defaultServices, type Service } from "@/lib/data/services";

/** Pick Arabic value if non-empty, otherwise English fallback */
function ar(arVal: string, enVal: string): string {
  return arVal && arVal.trim() ? arVal : enVal;
}

export async function getServices(locale = "en"): Promise<Service[]> {
  try {
    const dbServices = await prisma.service.findMany({
      orderBy: { sortOrder: "asc" },
      include: {
        features: { orderBy: { sortOrder: "asc" } },
        featureGroups: {
          orderBy: { sortOrder: "asc" },
          include: { details: { orderBy: { sortOrder: "asc" } } },
        },
        images: { orderBy: { sortOrder: "asc" } },
      },
    });

    if (dbServices.length === 0) return defaultServices;

    const isAr = locale === "ar";

    return dbServices.map((s) => ({
      id: s.id,
      slug: s.slug,
      title: isAr ? ar(s.titleAr, s.title) : s.title,
      shortTitle: isAr ? ar(s.shortTitleAr, s.shortTitle) : s.shortTitle,
      description: isAr ? ar(s.descriptionAr, s.description) : s.description,
      longDescription: isAr ? ar(s.longDescriptionAr, s.longDescription) : s.longDescription,
      iconName: s.iconName,
      features: s.features.map((f) => isAr ? ar(f.textAr, f.text) : f.text),
      featureGroups: s.featureGroups.map((g) => ({
        title: isAr ? ar(g.titleAr, g.title) : g.title,
        details: g.details.map((d) => isAr ? ar(d.textAr, d.text) : d.text),
      })),
      images: s.images.map((img) => img.url),
      heroImage: s.heroImage,
    })) as unknown as Service[];
  } catch {
    return defaultServices;
  }
}

export async function getServiceBySlug(slug: string, locale = "en"): Promise<Service | undefined> {
  try {
    const dbService = await prisma.service.findUnique({
      where: { slug },
      include: {
        features: { orderBy: { sortOrder: "asc" } },
        featureGroups: {
          orderBy: { sortOrder: "asc" },
          include: { details: { orderBy: { sortOrder: "asc" } } },
        },
        images: { orderBy: { sortOrder: "asc" } },
      },
    });

    if (!dbService) {
      return defaultServices.find((s) => s.slug === slug);
    }

    const isAr = locale === "ar";

    return {
      id: dbService.id,
      slug: dbService.slug,
      title: isAr ? ar(dbService.titleAr, dbService.title) : dbService.title,
      shortTitle: isAr ? ar(dbService.shortTitleAr, dbService.shortTitle) : dbService.shortTitle,
      description: isAr ? ar(dbService.descriptionAr, dbService.description) : dbService.description,
      longDescription: isAr ? ar(dbService.longDescriptionAr, dbService.longDescription) : dbService.longDescription,
      iconName: dbService.iconName,
      features: dbService.features.map((f) => isAr ? ar(f.textAr, f.text) : f.text),
      featureGroups: dbService.featureGroups.map((g) => ({
        title: isAr ? ar(g.titleAr, g.title) : g.title,
        details: g.details.map((d) => isAr ? ar(d.textAr, d.text) : d.text),
      })),
      images: dbService.images.map((img) => img.url),
      heroImage: dbService.heroImage,
    } as unknown as Service;
  } catch {
    return defaultServices.find((s) => s.slug === slug);
  }
}

export async function getServicesForNav(locale = "en"): Promise<
  { slug: string; shortTitle: string; heroImage: string; iconName: string }[]
> {
  try {
    const dbServices = await prisma.service.findMany({
      orderBy: { sortOrder: "asc" },
      select: { slug: true, shortTitle: true, shortTitleAr: true, heroImage: true, iconName: true },
    });
    if (dbServices.length === 0) {
      return defaultServices.map((s) => ({
        slug: s.slug,
        shortTitle: s.shortTitle,
        heroImage: s.heroImage,
        iconName: s.iconName ?? "Package",
      }));
    }
    const isAr = locale === "ar";
    return dbServices.map((s) => ({
      slug: s.slug,
      shortTitle: isAr ? ar(s.shortTitleAr, s.shortTitle) : s.shortTitle,
      heroImage: s.heroImage,
      iconName: s.iconName,
    }));
  } catch {
    return defaultServices.map((s) => ({
      slug: s.slug,
      shortTitle: s.shortTitle,
      heroImage: s.heroImage,
      iconName: s.iconName ?? "Package",
    }));
  }
}
