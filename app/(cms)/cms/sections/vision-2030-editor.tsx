"use client";

import { useSiteContent } from "../hooks/use-site-content";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  TextArea,
} from "../components/editor-shell";
import { LangTab } from "../components/lang-tab";
import type { Vision2030Data } from "@/lib/data/defaults/vision-2030";
import { defaultVision2030 } from "@/lib/data/defaults/vision-2030";

export function Vision2030Editor() {
  const { data, setLangData, loading, saving, save, status } =
    useSiteContent<Vision2030Data>("vision-2030", defaultVision2030);

  return (
    <EditorShell
      title="Vision 2030"
      description="Vision 2030 alignment section on the homepage"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Content">
        <LangTab>
          {(lang) => (
            <>
              <Field label={`Heading${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].heading}
                  onChange={(v) => setLangData(lang, { heading: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label={`Description${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextArea
                  value={data[lang].description}
                  onChange={(v) => setLangData(lang, { description: v })}
                  rows={4}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label={`Tagline${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].tagline}
                  onChange={(v) => setLangData(lang, { tagline: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
            </>
          )}
        </LangTab>
      </FieldGroup>
    </EditorShell>
  );
}
