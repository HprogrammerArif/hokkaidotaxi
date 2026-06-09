import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type ChangesDelaysWaitingTimeIconName = 'waiting' | 'beyond' | 'modify' | 'cancellation';

type ChangesDelaysWaitingTimeCard = {
  icon: ChangesDelaysWaitingTimeIconName;
  title: string;
  description: string;
};

type ChangesDelaysWaitingTimeProps = {
  title: string;
  description: string;
  cards: readonly ChangesDelaysWaitingTimeCard[];
  supportTitle: string;
  supportDescription: string;
};

const changesDelaysWaitingTimeIcons: Record<ChangesDelaysWaitingTimeIconName, string> = {
  waiting: '/assets/icons/waiting-time.svg',
  beyond: '/assets/icons/beyound-time.svg',
  modify: '/assets/icons/modifyicon.svg',
  cancellation: '/assets/icons/cancelationicon.svg',
};

/**
 * Renders booking change, delay, and waiting time guidance.
 * @param props Section content, policy cards, and support note
 * @returns React.ReactNode representing the changes and waiting time section
 */
export const ChangesDelaysWaitingTime = (props: ChangesDelaysWaitingTimeProps): React.ReactNode => (
  <section className="relative overflow-hidden bg-slate-100/70 py-16 sm:py-24">
    {/* Decorative background blobs */}
    <div className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
    <div className="absolute right-0 -bottom-40 h-[500px] w-[500px] rounded-full bg-indigo-50/50 blur-3xl" />

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed font-medium text-slate-500 sm:text-base">
            {props.description}
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {props.cards.map((card, index) => (
          <ScrollReveal
            key={card.title}
            animation="up"
            delay={([0, 150, 300, 400] as const)[index % 4]}
          >
            <article className="group flex h-full gap-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-9">
              <span className="flex size-12 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={changesDelaysWaitingTimeIcons[card.icon]}
                  alt=""
                  width={48}
                  height={48}
                  aria-hidden="true"
                  className="size-12 object-contain"
                />
              </span>

              <div>
                <h3 className="text-xl font-extrabold text-slate-800">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed font-medium text-slate-500">
                  {card.description}
                </p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
