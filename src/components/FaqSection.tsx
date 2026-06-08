'use client';

import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type FaqCategoryId = 'all' | 'booking' | 'airport' | 'policy' | 'service';

type FaqCategory = {
  id: FaqCategoryId;
  label: string;
};

type FaqItem = {
  id: string;
  category: Exclude<FaqCategoryId, 'all'>;
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title: string;
  description: string;
  categories: readonly FaqCategory[];
  items: readonly FaqItem[];
};

/** Emoji used in both the category filter pills and the FAQ row icons. */
const CATEGORY_EMOJI: Record<FaqCategoryId, string> = {
  all: '⭐',
  booking: '📋',
  airport: '✈️',
  policy: '⚙️',
  service: '💳',
};

/**
 * Renders filterable FAQ accordion content with colorful emoji icons.
 * @param props FAQ heading, categories, and questions
 * @returns React.ReactNode representing the FAQ section
 */
export const FaqSection = (props: FaqSectionProps): React.ReactNode => {
  const [selectedCategory, setSelectedCategory] = React.useState<FaqCategoryId>('all');
  const [openItemId, setOpenItemId] = React.useState<string | null>(props.items[0]?.id ?? null);

  const filteredItems = props.items.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory,
  );

  const selectCategory = (categoryId: FaqCategoryId) => {
    setSelectedCategory(categoryId);
    const nextItem = props.items.find(
      (item) => categoryId === 'all' || item.category === categoryId,
    );
    setOpenItemId(nextItem?.id ?? null);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal animation="up">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              {props.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              {props.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Category filter pills */}
        <ScrollReveal animation="up" delay={100}>
          <fieldset
            aria-label={props.title}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 border-0 p-0"
          >
            {props.categories.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => selectCategory(category.id)}
                  className={
                    isSelected
                      ? 'inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow transition-all hover:scale-105 active:scale-95'
                      : 'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 transition-all hover:scale-105 hover:bg-slate-50 active:scale-95'
                  }
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    {CATEGORY_EMOJI[category.id]}
                  </span>
                  {category.label}
                </button>
              );
            })}
          </fieldset>
        </ScrollReveal>

        {/* FAQ accordion — 2-column grid */}
        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {filteredItems.map((item, index) => {
            const isOpen = openItemId === item.id;

            return (
              <ScrollReveal
                key={item.id}
                animation="fade"
                delay={([0, 100, 150, 200] as const)[index % 4]}
              >
                <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-sm">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-answer`}
                    onClick={() => setOpenItemId(isOpen ? null : item.id)}
                    className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-slate-50/50"
                  >
                    {/* Colorful emoji icon — no wrapper box */}
                    <span aria-hidden="true" className="shrink-0 text-2xl leading-none">
                      {CATEGORY_EMOJI[item.category]}
                    </span>

                    <span className="flex-1 text-sm font-bold text-slate-800">
                      {item.question}
                    </span>

                    {/* Solid ▼ triangle */}
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-[10px] leading-none text-slate-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`${item.id}-answer`} className="animate-in fade-in slide-in-from-top-2 px-5 pb-5 pt-0 duration-300">
                      <p className="text-sm leading-relaxed text-slate-500">{item.answer}</p>
                    </div>
                  )}
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Item count */}
        <ScrollReveal animation="fade" delay={300}>
          <p className="mt-8 text-center text-xs font-medium text-slate-400">
            Showing {filteredItems.length} of {props.items.length} questions
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
