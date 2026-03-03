import { prisma } from "@/lib/db";
import { defaultClientsProjects } from "@/lib/data/defaults/clients-projects";

export interface PartnerRow {
  id: number;
  name: string;
  logoUrl: string;
  row: number;
  sortOrder: number;
}

function ar(arVal: string, enVal: string): string {
  return arVal && arVal.trim() ? arVal : enVal;
}

export async function getPartners(locale = "en"): Promise<{ row1: PartnerRow[]; row2: PartnerRow[] }> {
  try {
    const dbPartners = await prisma.partner.findMany({
      orderBy: { sortOrder: "asc" },
    });

    if (dbPartners.length === 0) {
      return {
        row1: defaultClientsProjects.partnersRow1.map((p, i) => ({
          id: i + 1,
          name: p.alt,
          logoUrl: p.src,
          row: 1,
          sortOrder: i,
        })),
        row2: defaultClientsProjects.partnersRow2.map((p, i) => ({
          id: i + 100,
          name: p.alt,
          logoUrl: p.src,
          row: 2,
          sortOrder: i,
        })),
      };
    }

    const isAr = locale === "ar";

    const mapped = dbPartners.map((p) => ({
      id: p.id,
      name: isAr ? ar(p.nameAr, p.name) : p.name,
      logoUrl: p.logoUrl,
      row: p.row,
      sortOrder: p.sortOrder,
    }));

    return {
      row1: mapped.filter((p) => p.row === 1),
      row2: mapped.filter((p) => p.row === 2),
    };
  } catch {
    return {
      row1: defaultClientsProjects.partnersRow1.map((p, i) => ({
        id: i + 1,
        name: p.alt,
        logoUrl: p.src,
        row: 1,
        sortOrder: i,
      })),
      row2: defaultClientsProjects.partnersRow2.map((p, i) => ({
        id: i + 100,
        name: p.alt,
        logoUrl: p.src,
        row: 2,
        sortOrder: i,
      })),
    };
  }
}
