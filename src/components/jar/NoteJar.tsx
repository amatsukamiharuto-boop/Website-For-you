"use client";

import { useRef, useState } from "react";
import { jar } from "@/data/keepsake";
import { pickRandomIndex } from "@/lib/pickRandom";
import { JarIllustration } from "@/components/icons/Icons";
import SectionHead from "@/components/ui/SectionHead";

export default function NoteJar() {
  const [index, setIndex] = useState<number | null>(null);
  const [draw, setDraw] = useState(0);
  const lastIndex = useRef<number | null>(null);

  const takeNote = () => {
    const next = pickRandomIndex(jar.notes.length, lastIndex.current);
    lastIndex.current = next;
    setIndex(next);
    setDraw((d) => d + 1);
  };

  return (
    <section aria-labelledby="jar-title" className="py-20">
      <SectionHead
        id="jar-title"
        eyebrow={jar.eyebrow}
        title={jar.title}
        helper={jar.helper}
      />

      <div className="flex flex-col items-center">
        <JarIllustration className="h-48 w-auto text-ink" />

        <div className="mt-8" aria-live="polite" aria-atomic="true" style={{ minHeight: "11rem" }}>
          {index === null ? (
            <p className="display-italic max-w-[16rem] pt-6 text-center text-xl text-ink-soft">
              {jar.emptyHint}
            </p>
          ) : (
            <div
              key={draw}
              className="note-slip w-full max-w-sm"
              data-tilt={draw % 2 === 0 ? "right" : "left"}
            >
              {jar.notes[index]}
            </div>
          )}
        </div>

        <button type="button" className="btn-ink mt-10" onClick={takeNote}>
          {index === null ? jar.buttonLabel : jar.buttonAgainLabel}
        </button>
      </div>
    </section>
  );
}
