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
import type { AboutPageData } from "@/lib/data/defaults/about-page";
import { defaultAboutPage } from "@/lib/data/defaults/about-page";

export function AboutPageEditor() {
  const { data, setLangData, loading, saving, save, status } =
    useSiteContent<AboutPageData>("about-page", defaultAboutPage);

  return (
    <EditorShell
      title="About Page"
      description="Full about page content"
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
              <Field label={`Hero Heading${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextArea
                  value={data[lang].heroHeading}
                  onChange={(v) => setLangData(lang, { heroHeading: v })}
                  rows={2}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              <Field label={`Hero Description${lang === "ar" ? " (Arabic)" : ""}`}>
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

      <FieldGroup label="Overview">
        <ImageUpload
          value={data.en.overviewImage}
          onChange={(v) => {
            setLangData("en", { overviewImage: v });
            setLangData("ar", { overviewImage: v });
          }}
          label="Overview Image"
        />
        <p className="text-xs text-zinc-500">Overview Stats</p>
        <LangTab>
          {(lang) => (
            <>
              {data[lang].overviewStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="grid flex-1 grid-cols-2 gap-3">
                    <Field label={`Value${lang === "ar" ? " (Arabic)" : ""}`}>
                      <TextInput
                        value={stat.value}
                        onChange={(v) => {
                          const overviewStats = [...data[lang].overviewStats];
                          overviewStats[i] = { ...overviewStats[i], value: v };
                          setLangData(lang, { overviewStats });
                        }}
                        dir={lang === "ar" ? "rtl" : undefined}
                      />
                    </Field>
                    <Field label={`Label${lang === "ar" ? " (Arabic)" : ""}`}>
                      <TextInput
                        value={stat.label}
                        onChange={(v) => {
                          const overviewStats = [...data[lang].overviewStats];
                          overviewStats[i] = { ...overviewStats[i], label: v };
                          setLangData(lang, { overviewStats });
                        }}
                        dir={lang === "ar" ? "rtl" : undefined}
                      />
                    </Field>
                  </div>
                  <RemoveButton
                    onClick={() => {
                      const overviewStats = data[lang].overviewStats.filter(
                        (_, j) => j !== i
                      );
                      setLangData(lang, { overviewStats });
                    }}
                  />
                </div>
              ))}
              <AddButton
                label="Add Stat"
                onClick={() =>
                  setLangData(lang, {
                    overviewStats: [
                      ...data[lang].overviewStats,
                      { value: "", label: "" },
                    ],
                  })
                }
              />
            </>
          )}
        </LangTab>
      </FieldGroup>

      <FieldGroup label="Story">
        <LangTab>
          {(lang) => (
            <>
              <Field label={`Story Heading${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].storyHeading}
                  onChange={(v) => setLangData(lang, { storyHeading: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              {data[lang].storyParagraphs.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-1">
                    <Field label={`Paragraph ${i + 1}${lang === "ar" ? " (Arabic)" : ""}`}>
                      <TextArea
                        value={p}
                        onChange={(v) => {
                          const storyParagraphs = [...data[lang].storyParagraphs];
                          storyParagraphs[i] = v;
                          setLangData(lang, { storyParagraphs });
                        }}
                        dir={lang === "ar" ? "rtl" : undefined}
                      />
                    </Field>
                  </div>
                  <RemoveButton
                    onClick={() => {
                      const storyParagraphs = data[lang].storyParagraphs.filter(
                        (_, j) => j !== i
                      );
                      setLangData(lang, { storyParagraphs });
                    }}
                  />
                </div>
              ))}
              <AddButton
                label="Add Paragraph"
                onClick={() =>
                  setLangData(lang, {
                    storyParagraphs: [...data[lang].storyParagraphs, ""],
                  })
                }
              />
            </>
          )}
        </LangTab>
      </FieldGroup>

      <FieldGroup label="Values">
        <LangTab>
          {(lang) => (
            <>
              <Field label={`Values Heading${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].valuesHeading}
                  onChange={(v) => setLangData(lang, { valuesHeading: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
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
                          placeholder="e.g. ShieldCheck"
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

      <FieldGroup label="Milestones">
        <LangTab>
          {(lang) => (
            <>
              <Field label={`Milestones Heading${lang === "ar" ? " (Arabic)" : ""}`}>
                <TextInput
                  value={data[lang].milestonesHeading}
                  onChange={(v) => setLangData(lang, { milestonesHeading: v })}
                  dir={lang === "ar" ? "rtl" : undefined}
                />
              </Field>
              {data[lang].milestones.map((ms, i) => (
                <div key={i} className="flex items-start gap-3 border border-zinc-800 bg-zinc-800/50 p-3">
                  <div className="flex-1 space-y-2">
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Year">
                        <TextInput
                          value={ms.year}
                          onChange={(v) => {
                            const milestones = [...data[lang].milestones];
                            milestones[i] = { ...milestones[i], year: v };
                            setLangData(lang, { milestones });
                          }}
                        />
                      </Field>
                      <Field label={`Title${lang === "ar" ? " (Arabic)" : ""}`}>
                        <TextInput
                          value={ms.title}
                          onChange={(v) => {
                            const milestones = [...data[lang].milestones];
                            milestones[i] = { ...milestones[i], title: v };
                            setLangData(lang, { milestones });
                          }}
                          dir={lang === "ar" ? "rtl" : undefined}
                        />
                      </Field>
                    </div>
                    <Field label={`Description${lang === "ar" ? " (Arabic)" : ""}`}>
                      <TextArea
                        value={ms.description}
                        onChange={(v) => {
                          const milestones = [...data[lang].milestones];
                          milestones[i] = { ...milestones[i], description: v };
                          setLangData(lang, { milestones });
                        }}
                        rows={2}
                        dir={lang === "ar" ? "rtl" : undefined}
                      />
                    </Field>
                  </div>
                  <RemoveButton
                    onClick={() => {
                      const milestones = data[lang].milestones.filter((_, j) => j !== i);
                      setLangData(lang, { milestones });
                    }}
                  />
                </div>
              ))}
              <AddButton
                label="Add Milestone"
                onClick={() =>
                  setLangData(lang, {
                    milestones: [
                      ...data[lang].milestones,
                      { year: "", title: "", description: "" },
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
