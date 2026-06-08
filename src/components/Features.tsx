import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

type FeaturesProps = {
  title: string;
  description: string;
  items: readonly FeatureItem[];
};

/**
 * Renders a premium grid of service feature cards.
 * @param props FeaturesProps containing section title and features list
 * @returns React.ReactNode representing the Features section
 */
export const Features = (props: FeaturesProps): React.ReactNode => (
  <section id="services" className="bg-[#FAFAFA] py-20 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <ScrollReveal animation="up">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-4 text-md text-slate-600">{props.description}</p>
        </div>
      </ScrollReveal>

      {/* Feature cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {props.items.map((feature, index) => (
          <ScrollReveal
            key={feature.title}
            animation="up"
            delay={([0, 150, 300, 400] as const)[index % 4]}
          >
            <div className="group flex h-full flex-col items-start rounded-2xl border border-slate-100/80 bg-[#FFFFFF] p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
              {/* Icon */}
              <div className="mb-5 flex size-12 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="size-12 object-contain"
                />
              </div>

              <h3 className="mb-2 text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{feature.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
