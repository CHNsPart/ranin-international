"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";
import { SectionLabel } from "@/components/shared/section-label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Jubail Industrial City,\nKingdom of Saudi Arabia",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+966 13 341 0000",
    href: "tel:+966133410000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ranin.com.sa",
    href: "mailto:info@ranin.com.sa",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Sunday – Thursday\n8:00 AM – 5:00 PM",
  },
];

const services = [
  "Manpower Services",
  "Materials Supply",
  "Operation & Maintenance",
  "Fabrication Work",
  "Sandblasting & Painting",
  "Printing Press Services",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-ranin-navy pb-16 pt-32 lg:min-h-[60vh] lg:pb-24 lg:pt-40">
        <Image
          src="/images/9.png"
          alt="Ranin International workers"
          fill
          className="object-cover opacity-[0.1]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy via-ranin-navy/70 to-ranin-navy/40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Get in Touch</SectionLabel>
            <h1 className="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
              CONTACT US
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ranin-steel">
              Ready to start a project? Have a question? Our team is here to
              help — reach out and we&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form + Info ─────────────────────────────── */}
      <section className="bg-ranin-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form — 3 cols */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border border-ranin-navy/[0.06] bg-white p-8 lg:p-10">
                <h2 className="font-display text-2xl text-ranin-navy">
                  SEND US A MESSAGE
                </h2>
                <p className="mt-2 text-sm text-ranin-steel">
                  Fill out the form below and we&apos;ll get back to you shortly.
                </p>

                {submitted ? (
                  <motion.div
                    className="mt-8 flex flex-col items-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="flex size-16 items-center justify-center bg-ranin-accent/10">
                      <Send className="size-8 text-ranin-accent" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl text-ranin-navy">
                      MESSAGE SENT
                    </h3>
                    <p className="mt-2 text-sm text-ranin-steel">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    className="mt-8 grid gap-5 sm:grid-cols-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ranin-navy">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="John Smith"
                        className="h-10 border-ranin-navy/10 bg-ranin-light/50 text-sm text-ranin-navy placeholder:text-ranin-steel/50 dark:bg-ranin-light/50"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ranin-navy">
                        Company
                      </label>
                      <Input
                        placeholder="Your Company"
                        className="h-10 border-ranin-navy/10 bg-ranin-light/50 text-sm text-ranin-navy placeholder:text-ranin-steel/50 dark:bg-ranin-light/50"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ranin-navy">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="h-10 border-ranin-navy/10 bg-ranin-light/50 text-sm text-ranin-navy placeholder:text-ranin-steel/50 dark:bg-ranin-light/50"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ranin-navy">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="+966 00 000 0000"
                        className="h-10 border-ranin-navy/10 bg-ranin-light/50 text-sm text-ranin-navy placeholder:text-ranin-steel/50 dark:bg-ranin-light/50"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ranin-navy">
                        Service of Interest
                      </label>
                      <select className="flex h-10 w-full border border-ranin-navy/10 bg-ranin-light/50 px-3 py-2 text-sm text-ranin-navy outline-none focus:border-ranin-accent">
                        <option value="" className="text-ranin-steel">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="text-ranin-navy">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ranin-navy">
                        Message *
                      </label>
                      <Textarea
                        required
                        placeholder="Tell us about your project or requirements..."
                        className="min-h-[120px] border-ranin-navy/10 bg-ranin-light/50 text-sm text-ranin-navy placeholder:text-ranin-steel/50 dark:bg-ranin-light/50"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Button
                        type="submit"
                        className="group h-12 w-full bg-ranin-accent text-sm text-white hover:bg-ranin-accent/90 sm:w-auto sm:px-10"
                      >
                        Send Message
                        <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info — 2 cols */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex flex-col gap-6">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    className="border border-ranin-navy/[0.06] bg-white p-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center bg-ranin-accent/10">
                        <info.icon className="size-5 text-ranin-accent" />
                      </div>
                      <div>
                        <h3 className="font-display text-sm tracking-wider text-ranin-navy">
                          {info.label.toUpperCase()}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="mt-1 block whitespace-pre-line text-sm text-ranin-steel transition-colors hover:text-ranin-accent"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-1 whitespace-pre-line text-sm text-ranin-steel">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Google Map ──────────────────────────────────────── */}
      <section className="relative bg-ranin-navy">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <SectionLabel>Location</SectionLabel>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
              FIND US
            </h2>
          </div>

          <div className="mt-14 overflow-hidden border border-white/[0.06] lg:mt-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4373.719608980263!2d49.65081708697007!3d27.013888395380558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a10024d65585%3A0xb70e8ea3cf6fe8ca!2sRANIN%20INTERNATIONAL%20CONTRACTING%20COMPANY!5e1!3m2!1sen!2ssa!4v1770456740401!5m2!1sen!2ssa"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale transition-all duration-500 hover:grayscale-0"
              title="Ranin International Office Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
