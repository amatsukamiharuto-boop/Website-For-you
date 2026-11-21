"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { capsule } from "@/data/keepsake";
import { isAccepted } from "@/lib/capsule";
import { KeyIcon } from "@/components/icons/Icons";
import SectionHead from "@/components/ui/SectionHead";

export default function SecretCapsule() {
  const inputId = useId();
  const messageId = useId();
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [wrongCount, setWrongCount] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const fieldRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (unlocked) letterRef.current?.focus({ preventScroll: false });
  }, [unlocked]);

  const nudge = () => {
    const el = fieldRef.current;
    if (!el) return;
    el.classList.remove("anim-nudge");
    void el.offsetWidth; // restart animasi
    el.classList.add("anim-nudge");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.trim()) {
      setMessage(capsule.emptyMessage);
      return;
    }
    if (isAccepted(value, capsule.accepted)) {
      setMessage("");
      setUnlocked(true);
      return;
    }
    setMessage(capsule.wrongMessages[wrongCount % capsule.wrongMessages.length]);
    setWrongCount((count) => count + 1);
    nudge();
  };

  const { letter } = capsule;

  return (
    <section aria-labelledby="capsule-title" className="py-20">
      <SectionHead
        id="capsule-title"
        eyebrow={capsule.eyebrow}
        title={capsule.title}
        helper={unlocked ? undefined : capsule.intro}
      />

      {!unlocked ? (
        <form onSubmit={onSubmit} noValidate>
          <div className="mb-8 flex items-start gap-3 text-ink-soft">
            <KeyIcon size={22} className="mt-1 shrink-0 text-terracotta" />
            <p className="display-italic text-[1.375rem] leading-snug">{capsule.clue}</p>
          </div>

          <label htmlFor={inputId} className="eyebrow mb-2 block">
            {capsule.inputLabel}
          </label>
          <div ref={fieldRef}>
            <input
              id={inputId}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={capsule.inputPlaceholder}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck={false}
              enterKeyHint="go"
              aria-invalid={message !== "" && wrongCount > 0}
              aria-describedby={messageId}
              className="field-line"
            />
          </div>

          <p
            id={messageId}
            role="status"
            aria-live="polite"
            className="prose-soft mt-3 min-h-[1.75rem] text-sm"
          >
            {message}
          </p>

          <button type="submit" className="btn-ink mt-6">
            {capsule.submitLabel}
          </button>
        </form>
      ) : (
        <article className="anim-fade border border-line bg-slip px-6 py-9 sm:px-10">
          <p className="eyebrow mb-6">{capsule.successLabel}</p>
          <h3
            ref={letterRef}
            tabIndex={-1}
            className="display text-[2rem] outline-none"
          >
            {letter.greeting}
          </h3>
          <div className="letter mt-6">
            {[...letter.paragraphs, letter.memory, ...letter.paragraphsAfter].map((p, i) => (
              <p key={p} className="anim-rise" style={{ animationDelay: `${0.5 + i * 0.7}s` }}>
                {p}
              </p>
            ))}
          </div>
          <hr className="hairline my-8" />
          <div className="prose-soft space-y-4 text-[0.9688rem]">
            {letter.closing.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink-soft">{letter.signoff}</p>
          <p className="mt-1 font-hand text-4xl text-terracotta-deep">{letter.signature}</p>
          <div className="mt-8 space-y-1 font-hand text-2xl text-ink-soft">
            {letter.ps.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </article>
      )}
    </section>
  );
}
