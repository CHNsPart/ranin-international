export interface ProjectsPageData {
  heroImage: string;
  heroImageAlt: string;
  heroHeading: string;
  heroDescription: string;
  sectors: string[];
}

export const defaultProjectsPage: ProjectsPageData = {
  heroImage: "/images/45.png",
  heroImageAlt: "Industrial cranes at sunset",
  heroHeading: "OUR PROJECTS",
  heroDescription:
    "A track record of excellence across Saudi Arabia's most critical industrial and construction projects.",
  sectors: [
    "All",
    "Oil & Gas",
    "Petrochemical",
    "Construction",
    "Power & Utilities",
    "Infrastructure",
    "Fabrication",
    "Commercial",
  ],
};

export const defaultProjectsPageAr: ProjectsPageData = {
  heroImage: "/images/45.png",
  heroImageAlt: "رافعات صناعية عند غروب الشمس",
  heroHeading: "مشاريعنا",
  heroDescription:
    "سجل حافل بالتميز في أهم المشاريع الصناعية والإنشائية في المملكة العربية السعودية.",
  sectors: [
    "الكل",
    "النفط والغاز",
    "البتروكيماويات",
    "البناء",
    "الطاقة والمرافق",
    "البنية التحتية",
    "التصنيع",
    "تجاري",
  ],
};
