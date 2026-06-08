import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type VehicleJourneyItem = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: readonly string[];
  imageSide: 'left' | 'right';
};

type VehicleJourneyProps = {
  title: string;
  description?: string;
  items: readonly VehicleJourneyItem[];
};

/**
 * Renders vehicle options in an alternating image and details layout.
 * @param props Vehicle journey content and vehicle options
 * @returns React.ReactNode representing the vehicle journey section
 */
export const VehicleJourney = (props: VehicleJourneyProps): React.ReactNode => (
  <section className="bg-[#FAFAFA] py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Heading */}
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

      <div className="space-y-12 sm:space-y-14">
        {props.items.map((item) => (
          <article key={item.title} className="grid items-center gap-7 md:grid-cols-2 md:gap-12">
            {/* Image */}
            <ScrollReveal
              animation={item.imageSide === 'left' ? 'left' : 'right'}
              className={item.imageSide === 'right' ? 'md:order-2' : 'md:order-1'}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 448px, calc(100vw - 2rem)"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal
              animation={item.imageSide === 'left' ? 'right' : 'left'}
              delay={150}
              className={item.imageSide === 'right' ? 'md:order-1' : 'md:order-2'}
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-800">{item.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">{item.description}</p>

                <ul className="mt-5 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-xs font-semibold text-slate-500"
                      >
                        &#10003;
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </article>
        ))}
      </div>
    </div>
  </section>
);
