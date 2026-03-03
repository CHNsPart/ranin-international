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
import type { SectorsData } from "@/lib/data/defaults/sectors";
import { defaultSectors } from "@/lib/data/defaults/sectors";

export function SectorsEditor() {
  const { data, setLangData, loading, saving, save, status } =
    useSiteContent<SectorsData>("sectors", defaultSectors);

  return (
    <EditorShell
      title="Sectors"
      description="Industries we serve section on the homepage"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Section Header">
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

      <FieldGroup label="Sectors">
        <LangTab>
          {(lang) => (
            <>
              {data[lang].sectors.map((sector, i) => (
                <div key={i} className="flex items-start gap-3 border border-zinc-800 bg-zinc-800/50 p-3">
                  <div className="flex-1 space-y-2">
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Icon Name">
                        <TextInput
                          value={sector.iconName}
                          onChange={(v) => {
                            const sectors = [...data[lang].sectors];
                            sectors[i] = { ...sectors[i], iconName: v };
                            setLangData(lang, { sectors });
                          }}
                          placeholder="e.g. Droplets, Building2"
                        />
                      </Field>
                      <Field label={`Title${lang === "ar" ? " (Arabic)" : ""}`}>
                        <TextInput
                          value={sector.title}
                          onChange={(v) => {
                            const sectors = [...data[lang].sectors];
                            sectors[i] = { ...sectors[i], title: v };
                            setLangData(lang, { sectors });
                          }}
                          dir={lang === "ar" ? "rtl" : undefined}
                        />
                      </Field>
                    </div>
                    <Field label={`Description${lang === "ar" ? " (Arabic)" : ""}`}>
                      <TextArea
                        value={sector.description}
                        onChange={(v) => {
                          const sectors = [...data[lang].sectors];
                          sectors[i] = { ...sectors[i], description: v };
                          setLangData(lang, { sectors });
                        }}
                        rows={2}
                        dir={lang === "ar" ? "rtl" : undefined}
                      />
                    </Field>
                    <Field label="Image URL">
                      <TextInput
                        value={sector.image}
                        onChange={(v) => {
                          const sectors = [...data[lang].sectors];
                          sectors[i] = { ...sectors[i], image: v };
                          setLangData(lang, { sectors });
                        }}
                      />
                    </Field>
                  </div>
                  <RemoveButton
                    onClick={() => {
                      const sectors = data[lang].sectors.filter((_, j) => j !== i);
                      setLangData(lang, { sectors });
                    }}
                  />
                </div>
              ))}
              <AddButton
                label="Add Sector"
                onClick={() =>
                  setLangData(lang, {
                    sectors: [
                      ...data[lang].sectors,
                      { iconName: "", title: "", description: "", image: "" },
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
