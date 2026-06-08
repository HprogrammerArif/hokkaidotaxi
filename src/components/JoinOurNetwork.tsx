import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type NetworkPartnerItem = {
  icon: string;
  title: string;
  description: string;
};

type JoinOurNetworkProps = {
  title: string;
  description?: string;
  items: readonly NetworkPartnerItem[];
};

/**
 * Renders the "Join Our Network" section with three partner audience cards.
 * @param props Section title and partner card items
 * @returns React.ReactNode representing the join-our-network section
 */
export const JoinOurNetwork = (props: JoinOurNetworkProps): React.ReactNode => (
  <section className="bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section heading */}
      <ScrollReveal animation="up">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {props.title}
          </h2>
          {props.description && (
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-base">
              {props.description}
            </p>
          )}
        </div>
      </ScrollReveal>

      {/* Partner cards */}
      <div className="grid gap-6 sm:grid-cols-3">
        {props.items.map((item, index) => (
          <ScrollReveal key={item.title} animation="up" delay={([0, 200, 400] as const)[index % 3]}>
            <article className="group h-full rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
              {/* Icon */}
              <div
                className="mb-5 flex size-12 items-center justify-center transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 object-contain"
                />
              </div>

              <h3 className="mb-3 text-base font-bold text-slate-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
