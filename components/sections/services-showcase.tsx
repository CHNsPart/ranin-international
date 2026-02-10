"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/shared/section-label";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const services = [
  {
    id: 1,
    slug: "manpower-services",
    title: "Industrial & Construction\nManpower Services",
    description:
      "Deploying skilled and semi-skilled workforce across Saudi Arabia — welders, fitters, riggers, electricians, and project managers tailored to your operational demands.",
    images: [
      "/services/Industrial_And_Construction_Manpower_Services/icms (1).png",
      "/services/Industrial_And_Construction_Manpower_Services/icms (2).png",
    ],
  },
  {
    id: 2,
    slug: "materials-supply",
    title: "Industrial & Construction\nMaterials Supply",
    description:
      "Comprehensive procurement and supply chain management for industrial-grade materials, structural steel, piping, valves, and construction consumables.",
    images: [
      "/services/Industries_And_Construction_Materials_Supply/icmsa (1).png",
      "/services/Industries_And_Construction_Materials_Supply/icmsa (2).png",
    ],
  },
  {
    id: 3,
    slug: "operation-maintenance",
    title: "Operation &\nMaintenance",
    description:
      "Turnkey O&M services for refineries, power plants, and industrial facilities — ensuring maximum uptime, safety compliance, and operational efficiency.",
    images: [
      "/services/Operation_And_Maintenance/om (1).png",
      "/services/Operation_And_Maintenance/om (2).png",
      "/services/Operation_And_Maintenance/om (3).png",
    ],
  },
  {
    id: 4,
    slug: "fabrication-work",
    title: "Fabrication\nWork",
    description:
      "Precision fabrication of structural steel, pressure vessels, piping spools, tanks, and custom metalwork — from engineering to final inspection.",
    images: [
      "/services/Fabrication_Work/fab (1).png",
      "/services/Fabrication_Work/fab (10).png",
      "/services/Fabrication_Work/fab (12).png",
    ],
  },
  {
    id: 5,
    slug: "sandblasting-painting",
    title: "Sandblasting, Painting\n& Galvanizing",
    description:
      "Surface preparation and protective coating services — industrial sandblasting, epoxy systems, fireproofing, and hot-dip galvanizing for lasting corrosion protection.",
    images: [
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (1).png",
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (2).png",
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (3).png",
    ],
  },
  {
    id: 6,
    slug: "printing-press",
    title: "Printing Press\nServices",
    description:
      "Full-service commercial and industrial printing — corporate collateral, safety signage, technical documentation, and large-format production.",
    images: [
      "/services/Printing_Press_Services/pps (1).png",
      "/services/Printing_Press_Services/pps (2).png",
      "/services/Printing_Press_Services/pps (3).png",
    ],
  },
];

export function ServicesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const wrapper = wrapperRef.current;
        const container = containerRef.current;
        const progress = progressRef.current;
        if (!wrapper || !container) return;

        const scrollAmount = wrapper.scrollWidth - container.offsetWidth;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=${scrollAmount}`,
            pin: true,
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });

        tl.to(wrapper, { x: -scrollAmount, ease: "none" }, 0);
        if (progress) {
          tl.to(progress, { scaleX: 1, ease: "none" }, 0);
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-ranin-navy">
      {/* Section header */}
      <div className="px-6 pt-24 pb-10 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
            OUR SERVICES
          </h2>
        </div>
      </div>

      {/* ── Desktop: Horizontal Scroll ───────────────────────── */}
      <div
        ref={wrapperRef}
        className="hidden lg:flex"
        style={{ width: `${services.length * 80}vw` }}
      >
        {services.map((service, i) => (
          <div
            key={service.id}
            className={`relative flex h-[70vh] w-[80vw] shrink-0 ${
              i % 2 === 0 ? "bg-ranin-navy" : "bg-ranin-blue/30"
            }`}
          >
            {/* Left: Content */}
            <div className="flex w-[38%] flex-col justify-center px-12 xl:px-16">
              <Badge
                variant="outline"
                className="mb-6 w-fit border-ranin-accent/30 font-mono text-xs text-ranin-accent"
              >
                {String(service.id).padStart(2, "0")}
              </Badge>
              <h3 className="whitespace-pre-line font-display text-3xl leading-tight text-white xl:text-4xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ranin-steel">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="group mt-8 inline-flex w-fit items-center text-sm text-white/70 transition-colors hover:text-white"
              >
                Learn More
                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: Image mosaic */}
            <div className="relative w-[62%] overflow-hidden p-3">
              <div className="grid h-full grid-rows-[1fr_auto] gap-2">
                {/* Main image */}
                <div className="relative overflow-hidden [clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]">
                  <Image
                    src={service.images[0]}
                    alt={service.title.replace("\n", " ")}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-ranin-navy/20" />
                </div>

                {/* Thumbnail strip */}
                {service.images.length > 1 && (
                  <div className="flex gap-2">
                    {service.images.slice(1, 4).map((img, j) => (
                      <div
                        key={j}
                        className="group/thumb relative h-24 flex-1 overflow-hidden border border-white/[0.06] xl:h-28"
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          className="object-cover opacity-70 transition-all duration-500 group-hover/thumb:scale-105 group-hover/thumb:opacity-100"
                          sizes="20vw"
                        />
                        <div className="absolute inset-0 bg-ranin-navy/30 transition-opacity group-hover/thumb:bg-ranin-navy/10" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar (desktop) */}
      <div className="hidden lg:block">
        <div className="mx-auto h-[2px] max-w-7xl bg-white/[0.04]">
          <div
            ref={progressRef}
            className="h-full origin-left scale-x-0 bg-ranin-accent/60"
          />
        </div>
      </div>

      {/* ── Mobile: Vertical Stack ───────────────────────────── */}
      <div className="flex flex-col gap-6 px-6 pb-20 lg:hidden">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            className="group overflow-hidden border border-white/[0.06]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
          >
            {/* Main image */}
            <div className="relative h-52 overflow-hidden sm:h-64">
              <Image
                src={service.images[0]}
                alt={service.title.replace("\n", " ")}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy via-ranin-navy/40 to-transparent" />
              <Badge
                variant="outline"
                className="absolute top-4 left-4 border-white/20 font-mono text-xs text-white/70"
              >
                {String(service.id).padStart(2, "0")}
              </Badge>
            </div>

            {/* Thumbnail row */}
            {service.images.length > 1 && (
              <div className="flex gap-px bg-white/[0.04]">
                {service.images.slice(1, 4).map((img, j) => (
                  <div key={j} className="relative h-20 flex-1 overflow-hidden">
                    <Image
                      src={img}
                      alt=""
                      fill
                      className="object-cover opacity-60"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="bg-ranin-navy p-6">
              <h3 className="whitespace-pre-line font-display text-2xl text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ranin-steel">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="group/btn mt-4 inline-flex items-center text-sm text-white/70 transition-colors hover:text-white"
              >
                Learn More
                <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pb-4 lg:pb-8" />
    </section>
  );
}
