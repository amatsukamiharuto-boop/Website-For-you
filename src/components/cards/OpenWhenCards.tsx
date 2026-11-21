"use client";

import { useState } from "react";
import { openWhen } from "@/data/keepsake";
import { CardIcon, PlusIcon } from "@/components/icons/Icons";
import SectionHead from "@/components/ui/SectionHead";

export default function OpenWhenCards() {
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(new Set());

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <section aria-labelledby="open-when-title" className="py-20">
      <SectionHead
        id="open-when-title"
        eyebrow={openWhen.eyebrow}
        title={openWhen.title}
        helper={openWhen.helper}
      />
      <ul className="space-y-4">
        {openWhen.cards.map((card) => {
          const isOpen = openIds.has(card.id);
          const panelId = `panel-${card.id}`;
          return (
            <li key={card.id}>
              <div className="paper-card" data-open={isOpen}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(card.id)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left"
                >
                  <CardIcon
                    name={card.icon}
                    size={26}
                    className={isOpen ? "text-terracotta" : "text-ink-soft"}
                  />
                  <span className="flex-1">
                    <span className="display block text-[1.5rem]">{card.label}</span>
                    <span className="mt-0.5 block text-[0.8125rem] text-ink-soft">
                      {card.hint}
                    </span>
                  </span>
                  <PlusIcon
                    size={18}
                    className="shrink-0 text-ink-soft transition-transform duration-500"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-label={card.title}
                  className="unfold"
                  data-open={isOpen}
                  inert={!isOpen}
                >
                  <div>
                    <div className="border-t border-line mx-5 pb-6 pt-5">
                      <h3 className="display-italic text-[1.5rem] leading-snug">
                        {card.title}
                      </h3>
                      <div className="prose-soft mt-4 space-y-4 text-[0.9688rem]">
                        {card.body.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="btn-quiet mt-3"
                        onClick={() => toggle(card.id)}
                      >
                        {openWhen.closeLabel}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
