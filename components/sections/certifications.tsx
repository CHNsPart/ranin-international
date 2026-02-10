"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/section-label";

const certifications = [
  {
    logo: "/certificates/iso-9001-2015-quality-management.svg",
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
  },
  {
    logo: "/certificates/iso-14001-2015-environmental-management.svg",
    title: "ISO 14001:2015",
    subtitle: "Environmental Management",
  },
  {
    logo: "/certificates/iso-45001-2018-occupational-health-safety.svg",
    title: "ISO 45001:2018",
    subtitle: "Occupational Health & Safety",
  },
  {
    logo: "/certificates/saudi-aramco-approved-vendor.svg",
    title: "Saudi Aramco",
    subtitle: "Approved Vendor",
  },
  {
    logo: "/certificates/sabic-approved-contractor.svg",
    title: "SABIC",
    subtitle: "Approved Contractor",
  },
  {
    logo: "/certificates/royal-commission-jubail-licensed.svg",
    title: "Royal Commission",
    subtitle: "Jubail Licensed",
  },
];

export function Certifications() {
  return (
    <section className="relative overflow-hidden bg-ranin-navy py-24 lg:py-32">
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="cert-grid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cert-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <SectionLabel>Accreditations</SectionLabel>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
            CERTIFIED EXCELLENCE
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ranin-steel">
            Our operations meet the highest international standards — recognized
            by the Kingdom&apos;s most trusted regulatory and industry bodies.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-20 lg:grid-cols-6 lg:gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="group relative flex flex-col items-center border border-white/[0.06] bg-white/[0.02] p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:border-ranin-accent/30 hover:bg-white/[0.06] lg:p-8"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-ranin-accent/0 via-ranin-accent/0 to-ranin-accent/0 transition-all duration-500 group-hover:from-ranin-accent/5 group-hover:via-transparent group-hover:to-transparent" />

              {/* Logo */}
              <div className="relative mb-5 flex h-20 w-full items-center justify-center lg:h-24">
                <Image
                  src={cert.logo}
                  alt={`${cert.title} - ${cert.subtitle}`}
                  width={80}
                  height={80}
                  className="h-16 w-auto object-contain opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 lg:h-20"
                />
              </div>

              {/* Text */}
              <h3 className="font-display text-sm tracking-wider text-white lg:text-base">
                {cert.title}
              </h3>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-ranin-steel transition-colors duration-300 group-hover:text-ranin-accent lg:text-[11px]">
                {cert.subtitle}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-ranin-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Trust statement */}
        <motion.div
          className="mt-14 flex flex-col items-center gap-4 border-t border-white/[0.06] pt-10 text-center lg:mt-20 lg:flex-row lg:justify-center lg:gap-8 lg:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-ranin-accent/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ranin-accent">
              Trusted &amp; Verified
            </span>
            <div className="h-px w-8 bg-ranin-accent/40" />
          </div>
          <p className="max-w-lg text-sm text-ranin-steel">
            Every project we deliver is backed by internationally recognized
            certifications, ensuring quality, safety, and environmental
            compliance at every stage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
