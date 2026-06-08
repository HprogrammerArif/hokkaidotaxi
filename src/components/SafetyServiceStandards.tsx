import Image from 'next/image';
import * as React from 'react';

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

const safetyServiceStandardsIcons: Record<SafetyServiceStandardsIconName, string> = {
  professionalDriver: '/assets/icons/professionalDriver.svg',
  maintenance: '/assets/icons/vehaclemaintananceicon.svg',
  compliance: '/assets/icons/okIcon.svg',
  privacy: '/assets/icons/customerprivacy.svg',
};

/**
 * Renders safety, compliance, and service quality standards.
 * @param props Section title, standard cards, and terms note
 * @returns React.ReactNode representing the safety standards section
 */
export const SafetyServiceStandards = (props: SafetyServiceStandardsProps): React.ReactNode => (
  <section className="bg-[#F5F5F5] py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
          {props.title}
        </h2>
        {props.description && (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
            {props.description}
          </p>
        )}
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {props.cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="flex size-14 items-center justify-center rounded-full bg-black shadow-lg">
              <Image
                src={safetyServiceStandardsIcons[card.icon]}
                alt=""
                width={32}
                height={32}
                aria-hidden="true"
                className="size-8 object-contain"
              />
            </div>

            <h3 className="mt-5 text-lg font-extrabold text-slate-800">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed font-medium text-slate-500">
              {card.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-stone-200 bg-[#FFF6E8] px-6 py-5 text-sm leading-relaxed font-medium text-slate-600 shadow-sm sm:px-8">
        <p>
          <strong className="font-extrabold text-slate-900">{props.termsLabel}</strong>{' '}
          {props.termsDescription}
        </p>
      </div>
    </div>
  </section>
);
