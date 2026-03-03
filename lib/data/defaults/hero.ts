export interface HeroData {
  sectionLabel: string;
  heading: string;
  subheading: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  backgroundImage: string;
  images: { src: string; label: string }[];
}

export const defaultHero: HeroData = {
  sectionLabel: "Since 2010 · Kingdom of Saudi Arabia",
  heading: "BUILDING TOMORROW'S INDUSTRIAL LANDSCAPE",
  subheading:
    "Ranin International Company delivers comprehensive industrial services — from manpower and materials to fabrication, maintenance, and beyond — powering Saudi Arabia's infrastructure growth.",
  ctaPrimary: { label: "Get a Quote", href: "/contact" },
  ctaSecondary: { label: "Explore Services", href: "/services" },
  backgroundImage: "/images/13.png",
  images: [
    { src: "/images/14.png", label: "Oil & Gas" },
    { src: "/images/27.png", label: "Construction" },
    { src: "/images/41.png", label: "Petrochemical" },
    { src: "/images/54.png", label: "Power" },
    { src: "/images/56.png", label: "Our Team" },
  ],
};

export const defaultHeroAr: HeroData = {
  sectionLabel: "منذ 2010 · المملكة العربية السعودية",
  heading: "نبني المشهد الصناعي للغد",
  subheading:
    "تقدم شركة Ranin International خدمات صناعية شاملة — من القوى العاملة والمواد إلى التصنيع والصيانة وما بعدها — لدعم نمو البنية التحتية في المملكة العربية السعودية.",
  ctaPrimary: { label: "احصل على عرض سعر", href: "/contact" },
  ctaSecondary: { label: "استكشف خدماتنا", href: "/services" },
  backgroundImage: "/images/13.png",
  images: [
    { src: "/images/14.png", label: "النفط والغاز" },
    { src: "/images/27.png", label: "البناء" },
    { src: "/images/41.png", label: "البتروكيماويات" },
    { src: "/images/54.png", label: "الطاقة" },
    { src: "/images/56.png", label: "فريقنا" },
  ],
};
