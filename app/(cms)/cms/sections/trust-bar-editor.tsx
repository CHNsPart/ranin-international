"use client";

import { useSiteContent } from "../hooks/use-site-content";
import {
  EditorShell,
  FieldGroup,
  Field,
  TextInput,
  NumberInput,
  AddButton,
  RemoveButton,
} from "../components/editor-shell";
import { LangTab } from "../components/lang-tab";
import type { TrustBarData } from "@/lib/data/defaults/trust-bar";
import { defaultTrustBar } from "@/lib/data/defaults/trust-bar";

export function TrustBarEditor() {
  const { data, setLangData, loading, saving, save, status } =
    useSiteContent<TrustBarData>("trust-bar", defaultTrustBar);

  return (
    <EditorShell
      title="Trust Bar"
      description="Statistics shown below the hero section"
      saving={saving}
      status={status}
      onSave={save}
      loading={loading}
    >
      <FieldGroup label="Metrics">
        <LangTab>
          {(lang) => (
            <>
              {data[lang].metrics.map((metric, i) => (
                <div key={i} className="flex items-start gap-3 border border-zinc-800 bg-zinc-800/50 p-3">
                  <div className="flex-1 space-y-2">
                    <div className="grid grid-cols-3 gap-3">
                      <Field label="Value">
                        <NumberInput
                          value={metric.value}
                          onChange={(v) => {
                            const metrics = [...data[lang].metrics];
                            metrics[i] = { ...metrics[i], value: v };
                            setLangData(lang, { metrics });
                          }}
                        />
                      </Field>
                      <Field label={`Suffix${lang === "ar" ? " (Arabic)" : ""}`}>
                        <TextInput
                          value={metric.suffix}
                          onChange={(v) => {
                            const metrics = [...data[lang].metrics];
                            metrics[i] = { ...metrics[i], suffix: v };
                            setLangData(lang, { metrics });
                          }}
                          placeholder="e.g. + or /7"
                          dir={lang === "ar" ? "rtl" : undefined}
                        />
                      </Field>
                      <Field label={`Label${lang === "ar" ? " (Arabic)" : ""}`}>
                        <TextInput
                          value={metric.label}
                          onChange={(v) => {
                            const metrics = [...data[lang].metrics];
                            metrics[i] = { ...metrics[i], label: v };
                            setLangData(lang, { metrics });
                          }}
                          dir={lang === "ar" ? "rtl" : undefined}
                        />
                      </Field>
                    </div>
                  </div>
                  <RemoveButton
                    onClick={() => {
                      const metrics = data[lang].metrics.filter((_, j) => j !== i);
                      setLangData(lang, { metrics });
                    }}
                  />
                </div>
              ))}
              <AddButton
                label="Add Metric"
                onClick={() =>
                  setLangData(lang, {
                    metrics: [
                      ...data[lang].metrics,
                      { value: 0, suffix: "", label: "" },
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
