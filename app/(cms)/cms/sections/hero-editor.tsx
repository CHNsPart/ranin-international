"use client";

import { useSiteContent } from "../hooks/use-site-content";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  TextArea,
  AddButton,
  RemoveButton,
} from "../components/editor-shell";
import { ImageUpload } from "../components/image-upload";
import { LangTab } from "../components/lang-tab";
import type { HeroData } from "@/lib/data/defaults/hero";
import { defaultHero } from "@/lib/data/defaults/hero";

export function HeroEditor() {
  const { data, setLangData, loading, saving, save, status } =
    useSiteContent<HeroData>("hero", defaultHero);

  return (
    <EditorShell
      title="Hero Section"
      description="Main hero banner on the homepage"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Text Content">
        <LangTab>
          {(lang) => (
            <>
              <Field label={`Section Label${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].sectionLabel}
                  onChange={(v) => setLangData(lang, { sectionLabel: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label={`Heading${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].heading}
                  onChange={(v) => setLangData(lang, { heading: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label={`Subheading${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextArea
                  value={data[lang].subheading}
                  onChange={(v) => setLangData(lang, { subheading: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
            </>
          )}
        </LangTab>
      </FieldGroup>

      <FieldGroup label="Call to Actions">
        <LangTab>
          {(lang) => (
            <div className="grid grid-cols-2 gap-4">
              <Field label={`Primary CTA Label${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].ctaPrimary.label}
                  onChange={(v) =>
                    setLangData(lang, { ctaPrimary: { ...data[lang].ctaPrimary, label: v } })
                  }
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label="Primary CTA Link">
                <TextInput
                  value={data[lang].ctaPrimary.href}
                  onChange={(v) =>
                    setLangData(lang, { ctaPrimary: { ...data[lang].ctaPrimary, href: v } })
                  }
                />
              </Field>
              <Field label={`Secondary CTA Label${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].ctaSecondary.label}
                  onChange={(v) =>
                    setLangData(lang, { ctaSecondary: { ...data[lang].ctaSecondary, label: v } })
                  }
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label="Secondary CTA Link">
                <TextInput
                  value={data[lang].ctaSecondary.href}
                  onChange={(v) =>
                    setLangData(lang, { ctaSecondary: { ...data[lang].ctaSecondary, href: v } })
                  }
                />
              </Field>
            </div>
          )}
        </LangTab>
      </FieldGroup>

      <FieldGroup label="Background Image">
        <ImageUpload
          value={data.en.backgroundImage}
          onChange={(v) => {
            setLangData("en", { backgroundImage: v });
            setLangData("ar", { backgroundImage: v });
          }}
        />
      </FieldGroup>

      <FieldGroup label="Slider Images">
        {data.en.images.map((img, i) => (
          <div key={i} className="flex items-start gap-3 border border-zinc-800 bg-zinc-800/50 p-3">
            <div className="flex-1 space-y-2">
              <ImageUpload
                value={img.src}
                onChange={(v) => {
                  const enImages = [...data.en.images];
                  enImages[i] = { ...enImages[i], src: v };
                  setLangData("en", { images: enImages });
                  const arImages = [...data.ar.images];
                  if (arImages[i]) {
                    arImages[i] = { ...arImages[i], src: v };
                    setLangData("ar", { images: arImages });
                  }
                }}
                label={`Image ${i + 1}`}
              />
              <LangTab>
                {(lang) => (
                  <Field label={`Label${lang === "ar" ? " (Arabic)" : ""}`}>
                    <TextInput
                      value={data[lang].images[i]?.label ?? ""}
                      onChange={(v) => {
                        const images = [...data[lang].images];
                        images[i] = { ...images[i], label: v };
                        setLangData(lang, { images });
                      }}
                      dir={lang === "ar" ? "rtl" : undefined}
                    />
                  </Field>
                )}
              </LangTab>
            </div>
            <RemoveButton
              onClick={() => {
                const enImages = data.en.images.filter((_, j) => j !== i);
                setLangData("en", { images: enImages });
                const arImages = data.ar.images.filter((_, j) => j !== i);
                setLangData("ar", { images: arImages });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Image"
          onClick={() => {
            setLangData("en", { images: [...data.en.images, { src: "", label: "" }] });
            setLangData("ar", { images: [...data.ar.images, { src: "", label: "" }] });
          }}
        />
      </FieldGroup>
    </EditorShell>
  );
}
