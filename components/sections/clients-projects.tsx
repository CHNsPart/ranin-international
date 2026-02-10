"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/shared/section-label";

/* ── Partner logos ───────────────────────────────────────── */
const partnersRow1 = [
  { src: "/partners/Saudi_Aramco_logo.png", alt: "Saudi Aramco" },
  { src: "/partners/SABIC_logo.png", alt: "SABIC" },
  { src: "/partners/MAADEN.png", alt: "Ma'aden" },
  { src: "/partners/NEOM.png", alt: "NEOM" },
  { src: "/partners/Sadara.png", alt: "Sadara" },
  { src: "/partners/SAMSUNG_Engineering.png", alt: "Samsung Engineering" },
  { src: "/partners/HYUNDAI_Engineering.png", alt: "Hyundai Engineering" },
  { src: "/partners/SAIPEM.png", alt: "Saipem" },
  { src: "/partners/Sinopec.png", alt: "Sinopec" },
  { src: "/partners/L_T.png", alt: "L&T" },
  { src: "/partners/DAEWOO.png", alt: "Daewoo" },
  { src: "/partners/DOOSAN.png", alt: "Doosan" },
];

const partnersRow2 = [
  { src: "/partners/CCC-Consolidated_Contractors_Company.png", alt: "CCC" },
  { src: "/partners/Tecnicas_Reunidas_logo.png", alt: "Tecnicas Reunidas" },
  { src: "/partners/JGC_Corporation_company_logo.png", alt: "JGC" },
  { src: "/partners/MARAFIQ_logo.png", alt: "Marafiq" },
  { src: "/partners/Farabi.png", alt: "Farabi" },
  { src: "/partners/SASREF.png", alt: "SASREF" },
  { src: "/partners/Satrop.png", alt: "Satrop" },
  { src: "/partners/Yasref_logo.png", alt: "Yasref" },
  { src: "/partners/RC.png", alt: "Royal Commission" },
  { src: "/partners/Read_Sea.png", alt: "Red Sea" },
  { src: "/partners/S-Chem_logo.png", alt: "S-Chem" },
  { src: "/partners/Sipchem_logo.png", alt: "Sipchem" },
];

/* ── Featured projects ───────────────────────────────────── */
const projects = [
  {
    title: "Petrochemical Complex Maintenance",
    sector: "Petrochemical",
    location: "Jubail Industrial City",
    image: "/images/13.png",
  },
  {
    title: "High-Rise Construction Support",
    sector: "Construction",
    location: "Riyadh, KSA",
    image: "/images/30.png",
  },
  {
    title: "Refinery Turnaround Project",
    sector: "Oil & Gas",
    location: "Yanbu, KSA",
    image: "/images/39.png",
  },
];

/* ── Logo Marquee Row ────────────────────────────────────── */
function LogoRow({
  logos,
  reverse = false,
}: {
  logos: typeof partnersRow1;
  reverse?: boolean;
}) {
  const doubled = [...logos, ...logos];
  return (
    <div
      className={`flex items-center gap-14 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {doubled.map((logo, i) => (
        <div
          key={`${logo.alt}-${i}`}
          className="relative flex h-14 w-32 shrink-0 items-center justify-center grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100 sm:h-16 sm:w-36 lg:h-20 lg:w-44"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            className="object-contain px-2"
            sizes="180px"
          />
        </div>
      ))}
    </div>
  );
}

export function ClientsProjects() {
  return (
    <section className="bg-ranin-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Partners Section ────────────────────────────────── */}
        <div className="text-center">
          <SectionLabel className="text-ranin-accent">Partners</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-ranin-navy sm:text-4xl md:text-5xl">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ranin-steel">
            Partnering with the world&apos;s leading engineering, construction,
            and energy companies across the Kingdom.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mt-14 overflow-hidden py-4 lg:mt-20">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-ranin-light to-transparent sm:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-ranin-light to-transparent sm:w-32" />

          <div className="flex flex-col gap-8 lg:gap-10">
            <LogoRow logos={partnersRow1} />
            <LogoRow logos={partnersRow2} reverse />
          </div>
        </div>
      </div>

      {/* ── Project Highlights ────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-24 text-center lg:mt-32">
          <SectionLabel className="text-ranin-accent">Portfolio</SectionLabel>
          <h2 className="mt-4 font-display text-3xl text-ranin-navy sm:text-4xl md:text-5xl">
            PROJECT HIGHLIGHTS
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy/90 via-ranin-navy/30 to-transparent transition-opacity duration-300 group-hover:via-ranin-navy/20" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-ranin-accent/90 text-[10px] text-white">
                    {project.sector}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-white/20 text-[10px] text-white/80"
                  >
                    {project.location}
                  </Badge>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl text-white">
                    {project.title.toUpperCase()}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/0 transition-all duration-300 group-hover:text-white/80">
                    View Project
                    <ArrowRight className="size-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/projects">
            <Button
              variant="outline"
              className="group border-ranin-navy/20 text-ranin-navy hover:border-ranin-accent hover:text-ranin-accent"
            >
              View All Projects
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
