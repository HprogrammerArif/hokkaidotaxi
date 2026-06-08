import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type HowItWorksStep = {
  title: string;
  description: string;
};

type HowItWorksProps = {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  steps: readonly HowItWorksStep[];
  confirmationLabel: string;
  confirmationDescription: string;
};

/**
 * Renders the booking process timeline with supporting travel imagery.
 * @param props How it works content and timeline steps
 * @returns React.ReactNode representing the booking process section
 */
export const HowItWorks = (props: HowItWorksProps): React.ReactNode => (
  <section className="bg-white py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <ScrollReveal animation="up">
        <div className="text-center">
          <p className="text-xs font-extrabold tracking-[0.18em] text-slate-500 uppercase">
            {props.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {props.title}
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.95fr_1.2fr] lg:gap-16">
        {/* Image — slides in from left */}
        <ScrollReveal animation="left">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-slate-100 lg:mx-0">
            <Image
              src={props.image}
              alt={props.imageAlt}
              fill
              sizes="(min-width: 1024px) 448px, (min-width: 640px) 448px, calc(100vw - 2rem)"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </ScrollReveal>

        {/* Steps — each slides in from right with stagger */}
        <ol className="relative space-y-8 border-l border-slate-200 pl-8 sm:space-y-9 sm:pl-10">
          {props.steps.map((step, index) => (
            <ScrollReveal
              key={step.title}
              animation="right"
              delay={([0, 150, 300, 400] as const)[index % 4]}
            >
              <li className="relative">
                <span className="absolute -left-[2.9rem] flex size-9 items-center justify-center rounded-full bg-slate-900 text-sm font-extrabold text-white ring-8 ring-white transition-transform duration-300 hover:scale-110 sm:-left-[3.15rem]">
                  {index + 1}
                </span>
                <h3 className="text-xl font-extrabold text-slate-800">{step.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>

      {/* Confirmation banner */}
      <ScrollReveal animation="up" delay={200}>
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-[#D4D4D4] bg-[#FFF6E2] px-6 py-5 text-sm leading-relaxed text-slate-600 shadow-sm sm:px-8">
          <p>
            <strong className="font-extrabold text-slate-900">{props.confirmationLabel}</strong>{' '}
            {props.confirmationDescription}
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
