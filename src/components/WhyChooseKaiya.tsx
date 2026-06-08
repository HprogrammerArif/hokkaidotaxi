import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type WhyChooseItem = {
  title: string;
  description: string;
};

type WhyChooseKaiyaProps = {
  title: string;
  description?: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  /** First 3 items rendered beside image1 (text left, image right) */
  topItems: readonly [WhyChooseItem, WhyChooseItem, WhyChooseItem];
  /** Last 3 items rendered beside image2 (image left, text right) */
  bottomItems: readonly [WhyChooseItem, WhyChooseItem, WhyChooseItem];
};

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    className="mt-0.5 size-4 shrink-0 text-slate-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const FeatureList = (props: { items: readonly WhyChooseItem[]; animateFrom: 'left' | 'right' }) => (
  <ul className="space-y-7">
    {props.items.map((item, index) => (
      <ScrollReveal
        key={item.title}
        animation={props.animateFrom}
        delay={([0, 150, 300] as const)[index % 3]}
      >
        <li className="flex items-start gap-3">
          <CheckIcon />
          <div>
            <h3 className="text-base font-extrabold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-500 sm:text-base leading-relaxed text-slate-500">{item.description}</p>
          </div>
        </li>
      </ScrollReveal>
    ))}
  </ul>
);

/**
 * Renders the "Why Choose Kaiya" section with two alternating image+feature rows.
 * @param props WhyChooseKaiyaProps containing the title, two images, and two sets of feature items
 * @returns React.ReactNode representing the Why Choose Kaiya section
 */
export const WhyChooseKaiya = (props: WhyChooseKaiyaProps): React.ReactNode => (
  <section className="bg-white py-16 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section title */}
      <ScrollReveal animation="up">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {props.title}
          </h2>
          {props.description && (
            <p className="mt-4 text-lg text-slate-600">
              {props.description}
            </p>
          )}
        </div>
      </ScrollReveal>

      {/* Row 1 — features left, image right */}
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <FeatureList items={props.topItems} animateFrom="left" />

        <ScrollReveal animation="right" delay={150}>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={props.image1}
              alt={props.image1Alt}
              width={640}
              height={480}
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Row 2 — image left, features right */}
      <div className="mt-16 grid items-center gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
        <ScrollReveal animation="left" delay={150}>
          <div className="overflow-hidden rounded-3xl md:order-1">
            <Image
              src={props.image2}
              alt={props.image2Alt}
              width={640}
              height={480}
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </ScrollReveal>

        <div className="md:order-2">
          <FeatureList items={props.bottomItems} animateFrom="right" />
        </div>
      </div>
    </div>
  </section>
);
