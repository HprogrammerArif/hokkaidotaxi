import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Link } from '@/libs/I18nNavigation';

type ReadyToBookProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaLabelEmail?: string;
};

/**
 * Full-width dark banner CTA with decorative SVG wings on both sides.
 * @param props Section title, description, and primary CTA
 * @returns React.ReactNode representing the ready-to-book banner
 */
export const ReadyToBook = (props: ReadyToBookProps): React.ReactNode => (
  <section className="pb-12 sm:pb-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ScrollReveal animation="up">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E5BB8] via-[#2B7FFF] to-[#4A90E2] shadow-xl">
          {/* Decorative background elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Elegant glassmorphism light beams */}
            <div className="absolute -top-64 -right-64 h-[800px] w-[800px] rotate-45 transform bg-gradient-to-b from-white/10 to-transparent mix-blend-overlay blur-sm" />
            <div className="absolute -bottom-64 -left-64 h-[800px] w-[800px] rotate-45 transform bg-gradient-to-t from-white/10 to-transparent mix-blend-overlay blur-sm" />

            {/* Fine architectural grid pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Premium inner glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.15)]" />
          </div>

          {/* Content — sits above the decorations */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center sm:py-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {props.title}
            </h2>
            <p className="mt-6 max-w-xl text-base text-white/70">{props.description}</p>
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              {/* Primary Booking Button */}
              <Link
                href={props.ctaHref}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[#1E5BB8] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl focus:ring-2 focus:ring-white/50 focus:outline-none active:scale-95"
              >
                {props.ctaLabel}
                <svg
                  className="size-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>

              {/* Secondary Email Button - Only show if prop provided */}
              {props.ctaLabelEmail && (
                <Link
                  href="mailto:c.contact@kaiya.taxi"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-transparent px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 focus:ring-2 focus:ring-white/50 focus:outline-none active:scale-95"
                >
                  <svg
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.909A2.25 2.25 0 0 1 2.25 8.993V6.75m19.5 0-7.5 4.615"
                    />
                  </svg>
                  {props.ctaLabelEmail}
                </Link>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
