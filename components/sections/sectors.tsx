"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Droplets, FlaskConical, Zap, Building2, Landmark } from "lucide-react";
import { SectionLabel } from "@/components/shared/section-label";

const sectors = [
  {
    icon: Droplets,
    title: "Oil & Gas",
    description:
      "Upstream, midstream, and downstream support — from drilling operations to refinery turnarounds.",
    image: "/images/14.png",
  },
  {
    icon: FlaskConical,
    title: "Petrochemical",
    description:
      "Specialized workforce and materials for petrochemical complexes, chemical processing, and polymer plants.",
    image: "/images/41.png",
  },
  {
    icon: Zap,
    title: "Power & Utilities",
    description:
      "Supporting power generation, transmission, water treatment, and utility infrastructure projects.",
    image: "/images/54.png",
  },
  {
    icon: Building2,
    title: "Construction & EPC",
    description:
      "End-to-end support for engineering, procurement, and construction projects across the Kingdom.",
    image: "/images/28.png",
  },
  {
    icon: Landmark,
    title: "Infrastructure",
    description:
      "Roads, bridges, rail, airports, and mega-projects driving Saudi Arabia's transformation.",
    image: "/images/30.png",
  },
];

export function Sectors() {
  return (
    <section className="relative bg-ranin-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <SectionLabel>Industries</SectionLabel>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
            SECTORS WE SERVE
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ranin-steel">
            Trusted across Saudi Arabia&apos;s most critical industries — delivering
            specialized services where precision and reliability matter most.
          </p>
        </div>

        {/* Sector Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              className="group relative overflow-hidden border border-white/[0.06] bg-ranin-blue/20 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-ranin-accent/30 lg:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {/* Background image */}
              <Image
                src={sector.image}
                alt=""
                fill
                className="object-cover opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.14]"
                sizes="(max-width: 640px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy via-ranin-navy/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-5 inline-block animate-[float_3s_ease-in-out_infinite]">
                  <sector.icon
                    className="size-8 text-ranin-accent transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-display text-xl text-white">
                  {sector.title.toUpperCase()}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ranin-steel transition-colors duration-300 group-hover:text-white/70">
                  {sector.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 z-10 h-[2px] w-0 bg-ranin-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
