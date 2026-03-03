"use client";

import { useState } from "react";

type Lang = "en" | "ar";

interface LangTabProps {
  children: (lang: Lang) => React.ReactNode;
}

export function LangTab({ children }: LangTabProps) {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div>
      <div className="mb-4 flex items-center gap-1 rounded border border-white/10 p-0.5 w-fit">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1.5 text-xs font-medium tracking-wider transition-colors rounded ${
            lang === "en"
              ? "bg-white/10 text-white"
              : "text-white/40 hover:text-white/70"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("ar")}
          className={`px-3 py-1.5 text-xs font-medium tracking-wider transition-colors rounded ${
            lang === "ar"
              ? "bg-white/10 text-white"
              : "text-white/40 hover:text-white/70"
          }`}
        >
          AR
        </button>
      </div>
      {children(lang)}
    </div>
  );
}

export type { Lang };
