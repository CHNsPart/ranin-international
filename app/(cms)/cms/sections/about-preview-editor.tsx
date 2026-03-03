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
import type { AboutPreviewData } from "@/lib/data/defaults/about-preview";
import { defaultAboutPreview } from "@/lib/data/defaults/about-preview";

export function AboutPreviewEditor() {
  const { data, setLangData, loading, saving, save, status } =
    useSiteContent<AboutPreviewData>("about-preview", defaultAboutPreview);

  return (
    <EditorShell
      title="About Preview"
      description="About section preview on the homepage"
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
            </>
          )}
        </LangTab>
      </FieldGroup>

      <FieldGroup label="Paragraphs">
        <LangTab>
          {(lang) => (
            <>
              {data[lang].paragraphs.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-1">
                    <Field label={`Paragraph ${i + 1}${lang === "ar" ? " (Arabic)" : ""}`}>
                      <TextArea
                        value={p}
                        onChange={(v) => {
                          const paragraphs = [...data[lang].paragraphs];
                          paragraphs[i] = v;
                          setLangData(lang, { paragraphs });
                        }}
                        dir={lang === "ar" ? "rtl" : undefined}
                      />
                    </Field>
                  </div>
                  <RemoveButton
                    onClick={() => {
                      const paragraphs = data[lang].paragraphs.filter((_, j) => j !== i);
                      setLangData(lang, { paragraphs });
                    }}
                  />
                </div>
              ))}
              <AddButton
                label="Add Paragraph"
                onClick={() =>
                  setLangData(lang, { paragraphs: [...data[lang].paragraphs, ""] })
                }
              />
            </>
          )}
        </LangTab>
      </FieldGroup>

      <FieldGroup label="Link">
        <LangTab>
          {(lang) => (
            <div className="grid grid-cols-2 gap-4">
              <Field label={`Link Text${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].linkText}
                  onChange={(v) => setLangData(lang, { linkText: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label="Link URL">
                <TextInput
                  value={data[lang].linkHref}
                  onChange={(v) => setLangData(lang, { linkHref: v })}
                />
              </Field>
            </div>
          )}
        </LangTab>
      </FieldGroup>

      <FieldGroup label="Image">
        <ImageUpload
          value={data.en.image}
          onChange={(v) => {
            setLangData("en", { image: v });
            setLangData("ar", { image: v });
          }}
        />
        <LangTab>
          {(lang) => (
            <Field label={`Image Alt Text${lang === "ar" ? " (Arabic)" : ""}`}>
              <TextInput
                value={data[lang].imageAlt}
                onChange={(v) => setLangData(lang, { imageAlt: v })}
                dir={lang === "ar" ? "rtl" : undefined}
              />
            </Field>
          )}
        </LangTab>
      </FieldGroup>

      <FieldGroup label="Values">
        <LangTab>
          {(lang) => (
            <>
              {data[lang].values.map((val, i) => (
                <div key={i} className="flex items-start gap-3 border border-zinc-800 bg-zinc-800/50 p-3">
                  <div className="flex-1 space-y-2">
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Icon Name">
                        <TextInput
                          value={val.iconName}
                          onChange={(v) => {
                            const values = [...data[lang].values];
                            values[i] = { ...values[i], iconName: v };
                            setLangData(lang, { values });
                          }}
                          placeholder="e.g. ShieldCheck, Handshake"
                        />
                      </Field>
                      <Field label={`Title${lang === "ar" ? " (Arabic)" : ""}`}>
                        <TextInput
                          value={val.title}
                          onChange={(v) => {
                            const values = [...data[lang].values];
                            values[i] = { ...values[i], title: v };
                            setLangData(lang, { values });
                          }}
                          dir={lang === "ar" ? "rtl" : undefined}
                        />
                      </Field>
                    </div>
                    <Field label={`Description${lang === "ar" ? " (Arabic)" : ""}`}>
                      <TextArea
                        value={val.description}
                        onChange={(v) => {
                          const values = [...data[lang].values];
                          values[i] = { ...values[i], description: v };
                          setLangData(lang, { values });
                        }}
                        rows={2}
                        dir={lang === "ar" ? "rtl" : undefined}
                      />
                    </Field>
                  </div>
                  <RemoveButton
                    onClick={() => {
                      const values = data[lang].values.filter((_, j) => j !== i);
                      setLangData(lang, { values });
                    }}
                  />
                </div>
              ))}
              <AddButton
                label="Add Value"
                onClick={() =>
                  setLangData(lang, {
                    values: [
                      ...data[lang].values,
                      { iconName: "", title: "", description: "" },
                    ],
                  })
                }
              />
            </>
          )}
        </LangTab>
      </FieldGroup>
    </EditorShell>
  );
}
