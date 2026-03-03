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
import type { SiteMetaData } from "@/lib/data/defaults/site-meta";
import { defaultSiteMeta } from "@/lib/data/defaults/site-meta";

export function SiteMetaEditor() {
  const { data, setLangData, loading, saving, save, status } =
    useSiteContent<SiteMetaData>("site-meta", defaultSiteMeta);

  return (
    <EditorShell
      title="Site Settings"
      description="Global site metadata and SEO settings"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Meta Tags">
        <LangTab>
          {(lang) => (
            <>
              <Field label={`Site Title${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].title}
                  onChange={(v) => setLangData(lang, { title: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label={`Site Description${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextArea
                  value={data[lang].description}
                  onChange={(v) => setLangData(lang, { description: v })}
                  rows={3}
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
