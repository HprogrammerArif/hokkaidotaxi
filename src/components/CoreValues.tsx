import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type CoreValuesItem = {
  icon: string;
  title: string;
  description: string;
};

type CoreValuesProps = {
  title: string;
  description?: string;
  items: readonly CoreValuesItem[];
};

/**
 * Renders the company's core values as a grid of titled cards.
 * @param props Section title, optional description, and value cards
 * @returns React.ReactNode representing the core values section
 */
export const CoreValues = (props: CoreValuesProps): React.ReactNode => (
  <section className="bg-white py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {props.title}
          </h2>
          {props.description && (
            <p className="mt-4 text-lg text-slate-600">
              {props.description}
            </p>
          )}
        </div>
      </ScrollReveal>

      <div className="mt-8 md:mt-14 grid gap-6 lg:grid-cols-2">
        {props.items.map((item, index) => (
          <ScrollReveal
            key={item.title}
            animation="up"
            delay={([0, 150, 300, 400] as const)[index % 4]}
          >
            <article className="group h-full rounded-2xl bg-[#F5F5F5] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className="flex size-8 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8 object-contain"
                  />
                </span>
                <h3 className="text-lg font-extrabold text-slate-800">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-slate-500">
                {item.description}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
