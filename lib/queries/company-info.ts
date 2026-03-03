import { prisma } from "@/lib/db";
import { defaultCompanyInfo, type CompanyInfoData } from "@/lib/data/defaults/company-info";

function ar(arVal: string, enVal: string): string {
  return arVal && arVal.trim() ? arVal : enVal;
}

export async function getCompanyInfo(locale = "en"): Promise<CompanyInfoData> {
  try {
    const info = await prisma.companyInfo.findUnique({ where: { id: 1 } });
    if (!info) return defaultCompanyInfo;

    const isAr = locale === "ar";
    return {
      address: isAr ? ar(info.addressAr, info.address) : info.address,
      phone: info.phone,
      email: info.email,
      hours: isAr ? ar(info.hoursAr, info.hours) : info.hours,
      mapEmbedUrl: info.mapEmbedUrl,
      tagline: isAr ? ar(info.taglineAr, info.tagline) : info.tagline,
      logoUrl: info.logoUrl,
    };
  } catch {
    return defaultCompanyInfo;
  }
}

export type { CompanyInfoData };
