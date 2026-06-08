import Image from 'next/image';
import * as React from 'react';
import { Link } from '@/libs/I18nNavigation';
import { ScrollReveal } from '@/components/ScrollReveal';

type ReadyToBookProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Full-width dark banner CTA with decorative SVG wings on both sides.
 * @param props Section title, description, and primary CTA
 * @returns React.ReactNode representing the ready-to-book banner
 */
export const ReadyToBook = (props: ReadyToBookProps): React.ReactNode => (
  <section className="bg-white pb-12 sm:pb-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ScrollReveal animation="up">
        <div className="relative overflow-hidden rounded-3xl bg-black">
          {/* Left decorative SVG */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-56 select-none sm:w-72">
            <Image
              src="/assets/images/READYTOBOOKBACKGROUND.svg"
              alt=""
              fill
              aria-hidden="true"
              className="object-cover object-right"
              sizes="288px"
            />
          </div>

          {/* Right decorative SVG — mirrored horizontally */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-56 select-none sm:w-72"
            style={{ transform: 'scaleX(-1)' }}
          >
            <Image
              src="/assets/images/READYTOBOOKBACKGROUND.svg"
              alt=""
              fill
              aria-hidden="true"
              className="object-cover object-right"
              sizes="288px"
            />
          </div>

          {/* Content — sits above the decorations */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center sm:py-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {props.title}
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/70">{props.description}</p>
            <Link
              href={props.ctaHref}
              target='_blank'
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-7 py-2.5 text-sm font-semibold text-slate-900 shadow transition-all duration-200 hover:bg-white/90 hover:shadow-lg active:scale-95"
            >
              {props.ctaLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
