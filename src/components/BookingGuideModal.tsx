'use client';

import { useTranslations } from 'next-intl';
import * as React from 'react';
import { createPortal } from 'react-dom';

type Tab = 'transfer' | 'hourly';

type Rule = {
  text: string;
};

type ServiceGuide = {
  id: Tab;
  emoji: string;
  label: string;
  intro: string;
  rules: Rule[];
};

/**
 * A glass-pill trigger button that opens a two-tab booking guide modal.
 * Helps users understand the Transfer vs Hourly service options before filling the form.
 * The modal is rendered via React Portal at document.body so it is never
 * clipped by ancestor overflow, transforms, or stacking contexts.
 * @returns The rendered trigger button and portal-mounted modal overlay
 */
export const BookingGuideModal = (): React.ReactNode => {
  const t = useTranslations('Index');
  const [open, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<Tab>('transfer');
  // Track whether we are mounted in the browser (needed for createPortal).
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const close = () => {
    setOpen(false);
  };

  // Close on Escape key
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };
    if (open) {
      document.addEventListener('keydown', handler);
    }
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [open]);

  // Lock body scroll when open
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Build guides from translations so they update with the active locale
  const guides: ServiceGuide[] = [
    {
      id: 'transfer',
      emoji: '🚗',
      label: t('booking_guide_transfer_label'),
      intro: t('booking_guide_transfer_intro'),
      rules: [
        { text: t('booking_guide_transfer_rule_1') },
        { text: t('booking_guide_transfer_rule_2') },
        { text: t('booking_guide_transfer_rule_3') },
        { text: t('booking_guide_transfer_rule_4') },
        { text: t('booking_guide_transfer_rule_5') },
      ],
    },
    {
      id: 'hourly',
      emoji: '⏱️',
      label: t('booking_guide_hourly_label'),
      intro: t('booking_guide_hourly_intro'),
      rules: [
        { text: t('booking_guide_hourly_rule_1') },
        { text: t('booking_guide_hourly_rule_2') },
        { text: t('booking_guide_hourly_rule_3') },
        { text: t('booking_guide_hourly_rule_4') },
        { text: t('booking_guide_hourly_rule_5') },
      ],
    },
  ];

  const activeGuide = guides.find((g) => g.id === activeTab) ?? guides[0];

  // Narrowing: guides is a non-empty constant, but TypeScript types array[0]
  // as T | undefined. This guard proves to the compiler it is defined.
  if (!activeGuide) {
    return null;
  }

  return (
    <>
      {/* ── Trigger pill ── */}
      <button
        type="button"
        id="booking-guide-trigger"
        onClick={() => {
          setOpen(true);
        }}
        className="group z-50 mt-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 hover:text-white focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
      >
        <svg
          aria-hidden="true"
          className="size-3.5 shrink-0 text-white/70 transition-colors group-hover:text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
        {t('booking_guide_trigger')}
        <svg
          aria-hidden="true"
          className="size-3 shrink-0 text-white/60 transition-transform duration-200 group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/*
        ── Modal overlay rendered via React Portal ──
        createPortal mounts the modal at document.body, completely outside the
        hero's overflow / stacking / transform contexts, so it always renders
        on top of everything regardless of ancestor CSS.
      */}
      {open &&
        mounted &&
        createPortal(
          <dialog
            open
            aria-modal="true"
            aria-label={t('booking_guide_title')}
            className="fixed inset-0 z-[9999] m-0 flex h-full max-h-none w-full max-w-none items-center justify-center border-0 bg-transparent p-4"
          >
            {/* Backdrop — button so keyboard users can dismiss with Enter/Space */}
            <button
              type="button"
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
              onClick={close}
              aria-label={t('booking_guide_close')}
            />
            {/* Panel */}
            <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/30">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
                    {t('booking_guide_eyebrow')}
                  </p>
                  <h2 className="mt-0.5 text-lg font-extrabold text-slate-900">
                    {t('booking_guide_title')}
                  </h2>
                </div>
                <button
                  type="button"
                  id="booking-guide-close"
                  onClick={close}
                  aria-label={t('booking_guide_close')}
                  className="flex size-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                >
                  <svg
                    aria-hidden="true"
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 border-b border-slate-100 px-6 pt-3">
                {guides.map((guide) => (
                  <button
                    key={guide.id}
                    type="button"
                    id={`booking-guide-tab-${guide.id}`}
                    onClick={() => {
                      setActiveTab(guide.id);
                    }}
                    className={`flex items-center gap-1.5 rounded-t-lg px-4 py-2 text-sm font-semibold transition-all duration-150 focus-visible:outline-none ${
                      activeTab === guide.id
                        ? 'border-b-2 border-blue-600 text-blue-700'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <span>{guide.emoji}</span>
                    {guide.label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                {/* Intro */}
                <p className="mb-4 rounded-xl bg-blue-50 px-4 py-3 text-sm leading-relaxed text-blue-800">
                  {activeGuide.intro}
                </p>

                {/* Rules list */}
                <ul className="space-y-2.5">
                  {activeGuide.rules.map((rule) => (
                    <li key={rule.text} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <svg
                          aria-hidden="true"
                          className="size-2.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{rule.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer note */}
                <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-xs text-amber-800">
                  {t('booking_guide_questions')}
                </p>
              </div>

              {/* Close CTA */}
              <div className="border-t border-slate-100 px-6 py-4">
                <button
                  type="button"
                  onClick={close}
                  className="w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  {t('booking_guide_cta')}
                </button>
              </div>
            </div>
          </dialog>,
          document.body,
        )}
    </>
  );
};
