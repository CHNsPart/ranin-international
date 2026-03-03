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
import type { CTAStripData } from "@/lib/data/defaults/cta-strip";
import { defaultCTAStrip } from "@/lib/data/defaults/cta-strip";

export function CTAStripEditor() {
  const { data, setLangData, loading, saving, save, status } =
    useSiteContent<CTAStripData>("cta-strip", defaultCTAStrip);

  return (
    <EditorShell
      title="CTA Strip"
      description="Call-to-action banner section on the homepage"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Text Content">
        <LangTab>
          {(lang) => (
            <>
              <Field label={`Label${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].label}
                  onChange={(v) => setLangData(lang, { label: v })}
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
              <Field label={`Heading Accent${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].headingAccent}
                  onChange={(v) => setLangData(lang, { headingAccent: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label={`Description${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextArea
                  value={data[lang].description}
                  onChange={(v) => setLangData(lang, { description: v })}
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

      <FieldGroup label="Contact Info">
        <LangTab>
          {(lang) => (
            <div className="grid grid-cols-2 gap-4">
              <Field label="Phone Number">
                <TextInput
                  value={data[lang].phone}
                  onChange={(v) => setLangData(lang, { phone: v })}
                />
              </Field>
              <Field label={`Hours${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].hours}
                  onChange={(v) => setLangData(lang, { hours: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
            </div>
          )}
        </LangTab>
      </FieldGroup>

      <FieldGroup label="Background Images">
        {data.en.backgroundImages.map((img, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1">
              <ImageUpload
                value={img}
                onChange={(v) => {
                  const enBg = [...data.en.backgroundImages];
                  enBg[i] = v;
                  setLangData("en", { backgroundImages: enBg });
                  const arBg = [...data.ar.backgroundImages];
                  arBg[i] = v;
                  setLangData("ar", { backgroundImages: arBg });
                }}
                label={`Background ${i + 1}`}
              />
            </div>
            <RemoveButton
              onClick={() => {
                const enBg = data.en.backgroundImages.filter((_, j) => j !== i);
                setLangData("en", { backgroundImages: enBg });
                const arBg = data.ar.backgroundImages.filter((_, j) => j !== i);
                setLangData("ar", { backgroundImages: arBg });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Background Image"
          onClick={() => {
            setLangData("en", { backgroundImages: [...data.en.backgroundImages, ""] });
            setLangData("ar", { backgroundImages: [...data.ar.backgroundImages, ""] });
          }}
        />
      </FieldGroup>

      <FieldGroup label="Bottom Images">
        {data.en.bottomImages.map((img, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1">
              <ImageUpload
                value={img}
                onChange={(v) => {
                  const enBottom = [...data.en.bottomImages];
                  enBottom[i] = v;
                  setLangData("en", { bottomImages: enBottom });
                  const arBottom = [...data.ar.bottomImages];
                  arBottom[i] = v;
                  setLangData("ar", { bottomImages: arBottom });
                }}
                label={`Bottom ${i + 1}`}
              />
            </div>
            <RemoveButton
              onClick={() => {
                const enBottom = data.en.bottomImages.filter((_, j) => j !== i);
                setLangData("en", { bottomImages: enBottom });
                const arBottom = data.ar.bottomImages.filter((_, j) => j !== i);
                setLangData("ar", { bottomImages: arBottom });
              }}
            />
          </div>
        ))}
        <AddButton
          label="Add Bottom Image"
          onClick={() => {
            setLangData("en", { bottomImages: [...data.en.bottomImages, ""] });
            setLangData("ar", { bottomImages: [...data.ar.bottomImages, ""] });
          }}
        />
      </FieldGroup>
    </EditorShell>
  );
}
