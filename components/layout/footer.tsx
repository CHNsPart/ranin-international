"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronUp, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Manpower Services", href: "/services/manpower-services" },
  { label: "Materials Supply", href: "/services/materials-supply" },
  { label: "Operation & Maintenance", href: "/services/operation-maintenance" },
  { label: "Fabrication Work", href: "/services/fabrication-work" },
  { label: "Sandblasting & Painting", href: "/services/sandblasting-painting" },
  { label: "Printing Press", href: "/services/printing-press" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-ranin-navy pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── 4-Column Grid ──────────────────────────────────── */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Col 1: Logo + Tagline */}
          <ScrollReveal>
            <div>
              <Image
                src="/ranin-logo.png"
                alt="Ranin International"
                width={140}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ranin-steel">
                Comprehensive industrial &amp; construction services — powering
                Saudi Arabia&apos;s infrastructure growth since 2010.
              </p>

              {/* Social icons placeholder */}
              <div className="mt-6 flex gap-2">
                {["LinkedIn", "X", "Email"].map((social) => (
                  <button
                    key={social}
                    className="flex h-8 items-center border border-white/[0.08] px-3 font-mono text-[9px] uppercase tracking-wider text-ranin-steel transition-all duration-300 hover:border-ranin-accent/40 hover:text-white"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Col 2: Quick Links */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="font-display text-sm tracking-wider text-white">
                QUICK LINKS
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ranin-steel transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Col 3: Services */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="font-display text-sm tracking-wider text-white">
                SERVICES
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="text-sm text-ranin-steel transition-colors hover:text-white"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Col 4: Contact */}
          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="font-display text-sm tracking-wider text-white">
                CONTACT
              </h4>
              <ul className="mt-4 flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-ranin-accent" />
                  <span className="text-sm text-ranin-steel">
                    Jubail Industrial City,
                    <br />
                    Kingdom of Saudi Arabia
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-ranin-accent" />
                  <a
                    href="tel:+966000000000"
                    className="text-sm text-ranin-steel transition-colors hover:text-white"
                  >
                    +966 00 000 0000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-ranin-accent" />
                  <a
                    href="mailto:info@ranin.com"
                    className="text-sm text-ranin-steel transition-colors hover:text-white"
                  >
                    info@ranin.com
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────── */}
        <Separator className="mt-16 bg-white/[0.06]" />

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="font-mono text-[10px] tracking-wider text-ranin-steel/60">
            &copy; {new Date().getFullYear()} Ranin International. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-mono text-[10px] tracking-wider text-ranin-steel/60 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-mono text-[10px] tracking-wider text-ranin-steel/60 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* ── Back to Top Button ────────────────────────────────── */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
      >
        <Button
          size="icon"
          onClick={scrollToTop}
          className="bg-ranin-accent text-white shadow-lg hover:bg-ranin-accent/90"
          aria-label="Back to top"
        >
          <ChevronUp className="size-5" />
        </Button>
      </motion.div>
    </footer>
  );
}
