import {
  Users,
  Package,
  Wrench,
  Hammer,
  PaintBucket,
  Printer,
} from "lucide-react";

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: typeof Users;
  images: string[];
  heroImage: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: "manpower-services",
    title: "Industrial & Construction\nManpower Services",
    shortTitle: "Manpower Services",
    description:
      "Deploying skilled and semi-skilled workforce across Saudi Arabia — welders, fitters, riggers, electricians, and project managers tailored to your operational demands.",
    longDescription:
      "Ranin International provides comprehensive industrial and construction manpower solutions, deploying highly skilled and semi-skilled professionals across Saudi Arabia's most critical projects. From welders and pipe fitters to riggers, electricians, and project managers — we assemble teams tailored to your unique operational demands. Our workforce management ensures compliance, safety training, and rapid mobilization to keep your projects on schedule.",
    features: [
      "Skilled & semi-skilled workforce deployment",
      "Welders, fitters, riggers & electricians",
      "Project managers & supervisors",
      "Rapid mobilization capabilities",
      "Full compliance & safety training",
      "Flexible staffing models",
    ],
    icon: Users,
    images: [
      "/services/Industrial_And_Construction_Manpower_Services/icms (1).png",
      "/services/Industrial_And_Construction_Manpower_Services/icms (2).png",
    ],
    heroImage:
      "/services/Industrial_And_Construction_Manpower_Services/icms (1).png",
  },
  {
    id: 2,
    slug: "materials-supply",
    title: "Industrial & Construction\nMaterials Supply",
    shortTitle: "Materials Supply",
    description:
      "Comprehensive procurement and supply chain management for industrial-grade materials, structural steel, piping, valves, and construction consumables.",
    longDescription:
      "We offer end-to-end procurement and supply chain management for industrial-grade materials essential to construction and industrial operations. From structural steel and piping to valves, fittings, and construction consumables — our supply chain expertise ensures timely delivery, quality assurance, and competitive pricing. We partner with leading manufacturers to guarantee materials meet international standards.",
    features: [
      "Structural steel & piping supply",
      "Valves, fittings & flanges",
      "Construction consumables",
      "Quality assurance & certification",
      "Competitive procurement",
      "Logistics & timely delivery",
    ],
    icon: Package,
    images: [
      "/services/Industries_And_Construction_Materials_Supply/icmsa (1).png",
      "/services/Industries_And_Construction_Materials_Supply/icmsa (2).png",
    ],
    heroImage:
      "/services/Industries_And_Construction_Materials_Supply/icmsa (1).png",
  },
  {
    id: 3,
    slug: "operation-maintenance",
    title: "Operation &\nMaintenance",
    shortTitle: "Operation & Maintenance",
    description:
      "Turnkey O&M services for refineries, power plants, and industrial facilities — ensuring maximum uptime, safety compliance, and operational efficiency.",
    longDescription:
      "Ranin International delivers turnkey Operation & Maintenance services for refineries, power plants, petrochemical complexes, and industrial facilities. Our O&M teams ensure maximum uptime, strict safety compliance, and operational efficiency through preventive maintenance programs, shutdown support, and continuous monitoring. We keep critical infrastructure running at peak performance.",
    features: [
      "Preventive & corrective maintenance",
      "Plant shutdown & turnaround support",
      "Refinery & power plant O&M",
      "Safety compliance management",
      "24/7 operational monitoring",
      "Equipment inspection & testing",
    ],
    icon: Wrench,
    images: [
      "/services/Operation_And_Maintenance/om (1).png",
      "/services/Operation_And_Maintenance/om (2).png",
      "/services/Operation_And_Maintenance/om (3).png",
      "/services/Operation_And_Maintenance/om (4).png",
      "/services/Operation_And_Maintenance/om (5).png",
      "/services/Operation_And_Maintenance/om (6).png",
    ],
    heroImage: "/services/Operation_And_Maintenance/om (1).png",
  },
  {
    id: 4,
    slug: "fabrication-work",
    title: "Fabrication\nWork",
    shortTitle: "Fabrication Work",
    description:
      "Precision fabrication of structural steel, pressure vessels, piping spools, tanks, and custom metalwork — from engineering to final inspection.",
    longDescription:
      "Our fabrication division specializes in precision manufacturing of structural steel, pressure vessels, piping spools, storage tanks, and custom metalwork. From initial engineering and design through cutting, welding, assembly, and final inspection — we deliver fabricated components that meet the most stringent international codes and standards. Our state-of-the-art facilities handle projects of all scales.",
    features: [
      "Structural steel fabrication",
      "Pressure vessel manufacturing",
      "Piping spool fabrication",
      "Tank & vessel construction",
      "Custom metalwork & assemblies",
      "NDT & quality inspection",
    ],
    icon: Hammer,
    images: Array.from({ length: 25 }, (_, i) => `/services/Fabrication_Work/fab (${i + 1}).png`),
    heroImage: "/services/Fabrication_Work/fab (1).png",
  },
  {
    id: 5,
    slug: "sandblasting-painting",
    title: "Sandblasting, Painting\n& Galvanizing",
    shortTitle: "Sandblasting & Painting",
    description:
      "Surface preparation and protective coating services — industrial sandblasting, epoxy systems, fireproofing, and hot-dip galvanizing for lasting corrosion protection.",
    longDescription:
      "We provide comprehensive surface preparation and protective coating services to extend the lifespan of industrial structures and equipment. Our capabilities include industrial sandblasting, application of advanced epoxy and polyurethane coating systems, fireproofing, and hot-dip galvanizing. Every project is executed to international coating standards, ensuring lasting corrosion protection in the harshest environments.",
    features: [
      "Industrial sandblasting (Sa 2.5 / Sa 3)",
      "Epoxy & polyurethane coating systems",
      "Fireproofing applications",
      "Hot-dip galvanizing",
      "Coating inspection & DFT testing",
      "Corrosion protection solutions",
    ],
    icon: PaintBucket,
    images: [
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (1).png",
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (2).png",
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (3).png",
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (4).png",
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (5).png",
    ],
    heroImage:
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (1).png",
  },
  {
    id: 6,
    slug: "printing-press",
    title: "Printing Press\nServices",
    shortTitle: "Printing Press",
    description:
      "Full-service commercial and industrial printing — corporate collateral, safety signage, technical documentation, and large-format production.",
    longDescription:
      "Ranin International's printing press division provides full-service commercial and industrial printing solutions. From corporate collateral and safety signage to technical documentation and large-format production — we deliver high-quality printed materials that meet the demands of industrial and corporate environments. Our modern printing facility ensures precision, consistency, and fast turnaround.",
    features: [
      "Corporate branding & collateral",
      "Safety signage & labels",
      "Technical documentation printing",
      "Large-format printing",
      "Packaging & industrial labels",
      "Fast turnaround production",
    ],
    icon: Printer,
    images: [
      "/services/Printing_Press_Services/pps (1).png",
      "/services/Printing_Press_Services/pps (2).png",
      "/services/Printing_Press_Services/pps (3).png",
      "/services/Printing_Press_Services/pps (4).png",
    ],
    heroImage: "/services/Printing_Press_Services/pps (1).png",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
