"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/shared/section-label";
import { CTAStrip } from "@/components/sections/cta-strip";

const projects = [
  {
    title: "Petrochemical Complex Maintenance",
    sector: "Petrochemical",
    location: "Jubail Industrial City",
    description: "Comprehensive maintenance and turnaround services for a major petrochemical complex, deploying 200+ skilled workers across multiple units.",
    image: "/images/13.png",
    services: ["Manpower", "O&M"],
  },
  {
    title: "High-Rise Construction Support",
    sector: "Construction",
    location: "Riyadh, KSA",
    description: "Full manpower and materials supply for a landmark high-rise development in the capital, including structural steel and finishing teams.",
    image: "/images/30.png",
    services: ["Manpower", "Materials"],
  },
  {
    title: "Refinery Turnaround Project",
    sector: "Oil & Gas",
    location: "Yanbu, KSA",
    description: "Critical turnaround support for a major refinery, providing specialized welders, fitters, and inspection teams on a tight schedule.",
    image: "/images/39.png",
    services: ["Manpower", "Fabrication"],
  },
  {
    title: "Industrial Fabrication Workshop",
    sector: "Fabrication",
    location: "Jubail, KSA",
    description: "Custom fabrication of pressure vessels, piping spools, and structural steel for downstream projects across the Eastern Province.",
    image: "/services/Fabrication_Work/fab (5).png",
    services: ["Fabrication"],
  },
  {
    title: "Power Plant O&M Services",
    sector: "Power & Utilities",
    location: "Dammam, KSA",
    description: "Ongoing operation and maintenance services for a 500MW power generation facility, ensuring 99.5% uptime reliability.",
    image: "/images/54.png",
    services: ["O&M", "Manpower"],
  },
  {
    title: "Surface Treatment & Coating",
    sector: "Oil & Gas",
    location: "Ras Tanura, KSA",
    description: "Industrial sandblasting and protective coating application for offshore platform components and pipeline infrastructure.",
    image: "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (1).png",
    services: ["Sandblasting & Painting"],
  },
  {
    title: "NEOM Infrastructure Support",
    sector: "Infrastructure",
    location: "NEOM, KSA",
    description: "Manpower deployment and materials supply for foundational infrastructure development at Saudi Arabia's flagship mega-project.",
    image: "/images/28.png",
    services: ["Manpower", "Materials"],
  },
  {
    title: "Petrochemical Plant Expansion",
    sector: "Petrochemical",
    location: "Yanbu, KSA",
    description: "Fabrication and installation support for a major petrochemical plant expansion, delivering precision piping and structural components.",
    image: "/images/41.png",
    services: ["Fabrication", "Manpower"],
  },
  {
    title: "Corporate Printing & Signage",
    sector: "Commercial",
    location: "Jubail, KSA",
    description: "Full-service industrial printing including safety signage, technical documentation, and corporate branding materials for major clients.",
    image: "/services/Printing_Press_Services/pps (1).png",
    services: ["Printing Press"],
  },
];

const sectors = ["All", "Oil & Gas", "Petrochemical", "Construction", "Power & Utilities", "Infrastructure", "Fabrication", "Commercial"];

export default function ProjectsPage() {
  return (
    <main>
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ranin-navy pb-16 pt-32 lg:min-h-[70vh] lg:pb-24 lg:pt-40">
        <Image
          src="/images/45.png"
          alt="Industrial cranes at sunset"
          fill
          className="object-cover opacity-[0.12]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy via-ranin-navy/60 to-ranin-navy/30" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
              OUR PROJECTS
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ranin-steel">
              A track record of excellence across Saudi Arabia&apos;s most
              critical industrial and construction projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Tags ─────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] bg-ranin-navy py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector, i) => (
              <button
                key={sector}
                className={`border px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                  i === 0
                    ? "border-ranin-accent bg-ranin-accent/10 text-ranin-accent"
                    : "border-white/[0.08] text-ranin-steel hover:border-ranin-accent/30 hover:text-white"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ───────────────────────────────────── */}
      <section className="bg-ranin-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group overflow-hidden border border-ranin-navy/[0.06] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy/80 via-ranin-navy/20 to-transparent" />

                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <Badge className="bg-ranin-accent/90 text-[10px] text-white">
                      {project.sector}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/70">
                    <MapPin className="size-3" />
                    <span className="text-xs">{project.location}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl text-ranin-navy">
                    {project.title.toUpperCase()}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ranin-steel">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="border border-ranin-navy/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-ranin-steel"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </main>
  );
}
