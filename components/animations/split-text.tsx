"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface SplitTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  duration?: number;
  yOffset?: number;
}

export function SplitText({
  children,
  className,
  as: Tag = "h1",
  delay = 0,
  stagger = 0.08,
  duration = 1,
  yOffset = 60,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  const words = children.split(" ");

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        gsap.set(containerRef.current.querySelectorAll("[data-word]"), {
          opacity: 1,
          y: 0,
        });
        return;
      }

      gsap.fromTo(
        containerRef.current.querySelectorAll("[data-word]"),
        {
          opacity: 0,
          y: yOffset,
          rotateX: 40,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration,
          stagger,
          delay,
          ease: "power4.out",
        }
      );
    },
    { scope: containerRef, dependencies: [children, delay] }
  );

  return (
    <Tag ref={containerRef as React.RefObject<never>} className={className} style={{ perspective: "1000px" }}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span
            data-word
            className="inline-block opacity-0"
            style={{ transformOrigin: "bottom center" }}
          >
            {word}
          </span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
