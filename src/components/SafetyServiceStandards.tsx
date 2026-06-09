import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type SafetyServiceStandardsIconName =
  | 'professionalDriver'
  | 'maintenance'
  | 'compliance'
  | 'privacy';

type SafetyServiceStandardsCard = {
  icon: SafetyServiceStandardsIconName;
  title: string;
  description: string;
};

type SafetyServiceStandardsProps = {
  title: string;
  description?: string;
  cards: readonly SafetyServiceStandardsCard[];
  termsLabel: string;
  termsDescription: string;
};

const renderIcon = (name: SafetyServiceStandardsIconName) => {
  switch (name) {
    case 'professionalDriver': {
      return (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    }
    case 'maintenance': {
      return (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    }
    case 'compliance': {
      return (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    }
    case 'privacy': {
      return (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      );
    }
    default: {
      return null;
    }
  }
};

/**
 * Renders safety, compliance, and service quality standards.
 * @param props Section title, standard cards, and terms note
 * @returns React.ReactNode representing the safety standards section
 */
export const SafetyServiceStandards = (props: SafetyServiceStandardsProps): React.ReactNode => (
  <section className="py-16 sm:py-24" id="safety-standards">
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Decorative background blobs to match SpecialtyServices */}
      <div className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 -bottom-40 h-[500px] w-[500px] rounded-full bg-indigo-50/50 blur-3xl" />
      <ScrollReveal animation="up">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {props.title}
          </h2>
          {props.description && (
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              {props.description}
            </p>
          )}
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {props.cards.map((card, index) => (
          <ScrollReveal
            key={card.title}
            animation="up"
            delay={[0, 100, 200, 300][index % 4] as 0 | 100 | 200 | 300}
          >
            <article className="group relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2B7FFF]/30 hover:shadow-[0_0_30px_rgba(43,127,255,0.15)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#2B7FFF] to-[#4A90E2] text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(43,127,255,0.4)]">
                {renderIcon(card.icon)}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#2B7FFF]">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{card.description}</p>

              {/* Decorative bottom line on hover */}
              <div className="absolute right-8 bottom-0 left-8 h-[3px] scale-x-0 rounded-t-full bg-gradient-to-r from-[#2B7FFF] to-[#4A90E2] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal animation="up" delay={400}>
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-slate-200 bg-[#2B7FFF] px-8 py-6 text-center shadow-sm sm:px-10">
          <p className="text-sm leading-relaxed text-white">
            <strong className="font-extrabold text-white">{props.termsLabel}</strong>{' '}
            {props.termsDescription}
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
