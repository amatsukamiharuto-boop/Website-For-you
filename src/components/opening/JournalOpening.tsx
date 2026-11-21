"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { opening } from "@/data/keepsake";
import { ArrowDownIcon, SprigIcon } from "@/components/icons/Icons";

export default function JournalOpening({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!opened) return;
    window.scrollTo({ top: 0, behavior: "auto" });
    headingRef.current?.focus({ preventScroll: true });
  }, [opened]);

  if (!opened) {
    return (
      <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-7 py-16">
        <div className="anim-fade">
          <SprigIcon size={28} className="text-sage mb-10" />
          <p className="eyebrow mb-6">{opening.eyebrow}</p>
          <h1 className="display text-5xl sm:text-6xl">{opening.coverTitle}</h1>
          <p className="display-italic mt-3 text-[1.625rem] leading-snug text-ink-soft sm:text-3xl">
            {opening.coverSubtitle}
          </p>
          <hr className="hairline my-10 w-16" />
          <button type="button" className="btn-ink" onClick={() => setOpened(true)}>
            {opening.buttonLabel}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl px-7">
      <section
        aria-labelledby="greeting-title"
        className="anim-page-open flex min-h-[88dvh] flex-col justify-center py-16"
      >
        <h1
          id="greeting-title"
          ref={headingRef}
          tabIndex={-1}
          className="display text-5xl outline-none sm:text-6xl"
        >
          {opening.greetingTitle}
        </h1>
        <div className="mt-8 space-y-5">
          {opening.greeting.map((paragraph) => (
            <p key={paragraph} className="prose-soft">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-14 flex items-center gap-3 text-sage">
          <ArrowDownIcon size={18} className="anim-breathe" />
          <span className="text-sm">{opening.scrollHint}</span>
        </div>
      </section>
      <div className="anim-fade">{children}</div>
    </main>
  );
}
