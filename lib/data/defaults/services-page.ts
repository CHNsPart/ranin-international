export interface ServicesPageData {
  heroImage: string;
  heroImageAlt: string;
  heroHeading: string;
  heroDescription: string;
}

export const defaultServicesPage: ServicesPageData = {
  heroImage: "/images/47.png",
  heroImageAlt: "Industrial welder at work",
  heroHeading: "OUR SERVICES",
  heroDescription:
    "Six core divisions delivering end-to-end industrial and construction solutions across the Kingdom of Saudi Arabia.",
};

export const defaultServicesPageAr: ServicesPageData = {
  heroImage: "/images/47.png",
  heroImageAlt: "عامل لحام صناعي أثناء العمل",
  heroHeading: "خدماتنا",
  heroDescription:
    "ستة أقسام رئيسية تقدم حلولاً صناعية وإنشائية متكاملة في جميع أنحاء المملكة العربية السعودية.",
};
