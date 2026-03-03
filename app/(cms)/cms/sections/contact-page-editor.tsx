"use client";

import { useSiteContent } from "../hooks/use-site-content";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  TextArea,
} from "../components/editor-shell";
import { ImageUpload } from "../components/image-upload";
import { LangTab } from "../components/lang-tab";
import type { ContactPageData } from "@/lib/data/defaults/contact-page";
import { defaultContactPage } from "@/lib/data/defaults/contact-page";

export function ContactPageEditor() {
  const { data, setLangData, loading, saving, save, status } =
    useSiteContent<ContactPageData>("contact-page", defaultContactPage);

  return (
    <EditorShell
      title="Contact Page"
      description="Contact page hero and settings"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Hero">
        <ImageUpload
          value={data.en.heroImage}
          onChange={(v) => {
            setLangData("en", { heroImage: v });
            setLangData("ar", { heroImage: v });
          }}
          label="Hero Image"
        />
        <LangTab>
          {(lang) => (
            <>
              <Field label={`Hero Image Alt${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].heroImageAlt}
                  onChange={(v) => setLangData(lang, { heroImageAlt: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label={`Heading${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].heroHeading}
                  onChange={(v) => setLangData(lang, { heroHeading: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label={`Description${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextArea
                  value={data[lang].heroDescription}
                  onChange={(v) => setLangData(lang, { heroDescription: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
            </>
          )}
        </LangTab>
      </FieldGroup>

      <FieldGroup label="Map">
        <Field label="Google Maps Embed URL">
          <TextArea
            value={data.en.mapEmbedUrl}
            onChange={(v) => {
              setLangData("en", { mapEmbedUrl: v });
              setLangData("ar", { mapEmbedUrl: v });
            }}
            rows={4}
          />
        </Field>
      </FieldGroup>
    </EditorShell>
  );
}
