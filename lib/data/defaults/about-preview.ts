export interface AboutPreviewValue {
  iconName: string;
  title: string;
  description: string;
}

export interface AboutPreviewData {
  sectionLabel: string;
  heading: string;
  paragraphs: string[];
  linkText: string;
  linkHref: string;
  image: string;
  imageAlt: string;
  values: AboutPreviewValue[];
}

export const defaultAboutPreview: AboutPreviewData = {
  sectionLabel: "Who We Are",
  heading: "YOUR TRUSTED INDUSTRIAL PARTNER SINCE 2010",
  paragraphs: [
    "Ranin International Company is a diversified industrial services company headquartered in the Kingdom of Saudi Arabia. For over 15 years, we have delivered mission-critical manpower, materials, fabrication, and maintenance solutions to the region's most demanding sectors.",
    "Our commitment to operational excellence, safety, and integrity has made us a trusted partner for leading EPC contractors, oil & gas operators, and government entities across the Kingdom.",
  ],
  linkText: "About Us",
  linkHref: "/about",
  image: "/images/47.png",
  imageAlt: "Ranin International worker at industrial facility",
  values: [
    {
      iconName: "ShieldCheck",
      title: "Safety First",
      description:
        "Zero-compromise safety culture across every project site and operation.",
    },
    {
      iconName: "Handshake",
      title: "Integrity",
      description:
        "Transparent partnerships built on trust, accountability, and honest communication.",
    },
    {
      iconName: "Award",
      title: "Excellence",
      description:
        "Relentless pursuit of quality in every deliverable, from manpower to materials.",
    },
  ],
};

export const defaultAboutPreviewAr: AboutPreviewData = {
  sectionLabel: "من نحن",
  heading: "شريككم الصناعي الموثوق منذ 2010",
  paragraphs: [
    "شركة Ranin International هي شركة خدمات صناعية متنوعة يقع مقرها الرئيسي في المملكة العربية السعودية. على مدار أكثر من 15 عامًا، قدمنا حلول القوى العاملة والمواد والتصنيع والصيانة الحيوية لأكثر القطاعات تطلبًا في المنطقة.",
    "إن التزامنا بالتميز التشغيلي والسلامة والنزاهة جعلنا شريكًا موثوقًا لكبار مقاولي الهندسة والمشتريات والبناء ومشغلي النفط والغاز والجهات الحكومية في جميع أنحاء المملكة.",
  ],
  linkText: "من نحن",
  linkHref: "/about",
  image: "/images/47.png",
  imageAlt: "عامل شركة Ranin International في منشأة صناعية",
  values: [
    {
      iconName: "ShieldCheck",
      title: "السلامة أولاً",
      description:
        "ثقافة سلامة لا تقبل المساومة في كل موقع مشروع وعملية.",
    },
    {
      iconName: "Handshake",
      title: "النزاهة",
      description:
        "شراكات شفافة مبنية على الثقة والمسؤولية والتواصل الصادق.",
    },
    {
      iconName: "Award",
      title: "التميز",
      description:
        "سعي دؤوب نحو الجودة في كل ما نقدمه، من القوى العاملة إلى المواد.",
    },
  ],
};
