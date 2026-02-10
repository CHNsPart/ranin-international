"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { SectionLabel } from "@/components/shared/section-label";

export function GoogleMap() {
  return (
    <section className="relative bg-ranin-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel className="text-ranin-accent">Location</SectionLabel>
            <h2 className="mt-4 font-display text-3xl text-ranin-navy sm:text-4xl md:text-5xl">
              OUR OFFICE
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              Visit us at our headquarters in Jubail Industrial City — the heart
              of Saudi Arabia&apos;s industrial zone.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-ranin-accent" />
                <span className="text-sm text-ranin-steel">
                  Jubail Industrial City,
                  <br />
                  Kingdom of Saudi Arabia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-ranin-accent" />
                <a
                  href="tel:+966133410000"
                  className="text-sm text-ranin-steel transition-colors hover:text-ranin-accent"
                >
                  +966 13 341 0000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-ranin-accent" />
                <a
                  href="mailto:info@ranin.com.sa"
                  className="text-sm text-ranin-steel transition-colors hover:text-ranin-accent"
                >
                  info@ranin.com.sa
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Map — 2 cols */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="overflow-hidden border border-ranin-navy/[0.06]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4373.719608980263!2d49.65081708697007!3d27.013888395380558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a10024d65585%3A0xb70e8ea3cf6fe8ca!2sRANIN%20INTERNATIONAL%20CONTRACTING%20COMPANY!5e1!3m2!1sen!2ssa!4v1770456740401!5m2!1sen!2ssa"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale transition-all duration-500 hover:grayscale-0"
                title="Ranin International Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
