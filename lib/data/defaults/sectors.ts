export interface SectorItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface SectorsData {
  sectionLabel: string;
  heading: string;
  description: string;
  sectors: SectorItem[];
}

export const defaultSectors: SectorsData = {
  sectionLabel: "Industries",
  heading: "SECTORS WE SERVE",
  description:
    "Trusted across Saudi Arabia's most critical industries — delivering specialized services where precision and reliability matter most.",
  sectors: [
    {
      iconName: "Droplets",
      title: "Oil & Gas",
      description:
        "Upstream, midstream, and downstream support — from drilling operations to refinery turnarounds.",
      image: "/images/14.png",
    },
    {
      iconName: "FlaskConical",
      title: "Petrochemical",
      description:
        "Specialized workforce and materials for petrochemical complexes, chemical processing, and polymer plants.",
      image: "/images/41.png",
    },
    {
      iconName: "Zap",
      title: "Power & Utilities",
      description:
        "Supporting power generation, transmission, water treatment, and utility infrastructure projects.",
      image: "/images/54.png",
    },
    {
      iconName: "Building2",
      title: "Construction & EPC",
      description:
        "End-to-end support for engineering, procurement, and construction projects across the Kingdom.",
      image: "/images/28.png",
    },
    {
      iconName: "Landmark",
      title: "Infrastructure",
      description:
        "Roads, bridges, rail, airports, and mega-projects driving Saudi Arabia's transformation.",
      image: "/images/30.png",
    },
  ],
};

export const defaultSectorsAr: SectorsData = {
  sectionLabel: "القطاعات",
  heading: "القطاعات التي نخدمها",
  description:
    "موثوقون في أهم القطاعات الحيوية في المملكة العربية السعودية — نقدم خدمات متخصصة حيث تكون الدقة والموثوقية في غاية الأهمية.",
  sectors: [
    {
      iconName: "Droplets",
      title: "النفط والغاز",
      description:
        "دعم عمليات المنبع والمنتصف والمصب — من عمليات الحفر إلى أعمال صيانة المصافي.",
      image: "/images/14.png",
    },
    {
      iconName: "FlaskConical",
      title: "البتروكيماويات",
      description:
        "قوى عاملة متخصصة ومواد لمجمعات البتروكيماويات ومعالجة الكيماويات ومصانع البوليمرات.",
      image: "/images/41.png",
    },
    {
      iconName: "Zap",
      title: "الطاقة والمرافق",
      description:
        "دعم مشاريع توليد الطاقة والنقل ومعالجة المياه والبنية التحتية للمرافق.",
      image: "/images/54.png",
    },
    {
      iconName: "Building2",
      title: "البناء والمقاولات",
      description:
        "دعم شامل لمشاريع الهندسة والمشتريات والبناء في جميع أنحاء المملكة.",
      image: "/images/28.png",
    },
    {
      iconName: "Landmark",
      title: "البنية التحتية",
      description:
        "الطرق والجسور والسكك الحديدية والمطارات والمشاريع الكبرى التي تقود تحول المملكة العربية السعودية.",
      image: "/images/30.png",
    },
  ],
};
