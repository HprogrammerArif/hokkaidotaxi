import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type TourFeature = string;

type TourCard = {
  title: string;
  description: string;
  image: string;
  features: readonly TourFeature[];
};

type SightseeingToursProps = {
  title: string;
  description: string;
  tours: readonly TourCard[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonHref: string;
};

/**
 * Renders the Sightseeing Tours section with image cards and a call-to-action bottom banner.
 * @param props SightseeingToursProps containing section text and tour data
 * @returns React.ReactNode representing the Sightseeing Tours section
 */
export const SightseeingTours = (props: SightseeingToursProps): React.ReactNode => (
  <section className="py-20 sm:py-28" id="tours">
    <section className=" ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="up">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {props.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">{props.description}</p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {props.tours.map((tour, index) => (
            <ScrollReveal
              key={tour.title}
              animation="up"
              delay={[0, 150, 300][index % 3] as 0 | 150 | 300}
            >
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:ring-blue-300">
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-slate-100">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{tour.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {tour.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {tour.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start text-sm text-slate-600">
                          <svg
                            className="mt-0.5 mr-2 h-4 w-4 shrink-0 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="relative mx-auto mt-12 max-w-7xl overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 -bottom-40 h-[500px] w-[500px] rounded-full bg-indigo-50/50 blur-3xl" />
      {/* Bottom CTA */}
      <ScrollReveal animation="up" delay={150}>
        <div className="rounded-3xl p-8 text-center shadow-sm ring-1 ring-slate-200 sm:p-12">
          <h3 className="text-2xl font-bold text-slate-900">{props.ctaTitle}</h3>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">{props.ctaDescription}</p>
          <div className="mt-8">
            <a
              href={props.ctaButtonHref}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2B7FFF] to-[#4A90E2] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-[#1A66FF] hover:to-[#357ABD] hover:shadow-[0_0_20px_rgba(43,127,255,0.4)] hover:shadow-lg focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 focus:outline-none active:scale-95"
            >
              {props.ctaButtonText}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  </section>
);
