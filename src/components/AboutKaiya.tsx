import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type AboutKaiyaProps = {
  title: string;
  paragraphs: readonly string[];
  image: string;
  imageAlt: string;
};

/**
 * Renders the company introduction with supporting brand imagery.
 * @param props About content and image details
 * @returns React.ReactNode representing the About Kaiya section
 */
export const AboutKaiya = (props: AboutKaiyaProps): React.ReactNode => (
  <section id="about" className="bg-white py-8 sm:py-24 md:py-16">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
      {/* Text — slides in from left */}
      <ScrollReveal animation="left">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {props.title}
          </h2>

          <div className="mt-6 space-y-6">
            {props.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mx-auto max-w-3xl text-base leading-relaxed font-medium text-slate-500 lg:mx-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Image — slides in from right */}
      <ScrollReveal animation="right" delay={150}>
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-slate-100">
          <Image
            src={props.image}
            alt={props.imageAlt}
            fill
            sizes="(min-width: 1024px) 480px, calc(100vw - 2rem)"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);
