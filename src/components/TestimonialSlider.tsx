'use client';

import * as React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { ScrollReveal } from '@/components/ScrollReveal';

export type Testimonial = {
  name: string;
  country: string;
  quote: string;
  avatar: string;
};

type TestimonialSliderProps = {
  title: string;
  subtitle: string;
  testimonials: readonly Testimonial[];
};

/**
 * A swiper slider for customer testimonials using Embla Carousel with smooth AutoScroll.
 */
export const TestimonialSlider = (props: TestimonialSliderProps): React.ReactNode => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
      skipSnaps: true,
    },
    [AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="up">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1e293b] sm:text-4xl">
              {props.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
              {props.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Embla Carousel Viewport */}
        <ScrollReveal animation="fade" delay={150}>
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex  touch-pan-y">
              {props.testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3 select-none"
                >
                  {/* Card */}
                  <div className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
                    {/* Header: Avatar + Info */}
                    <div className="flex items-center gap-4 border-b border-slate-50 pb-4 sm:pb-6">
                      <div className="relative size-12 shrink-0 overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                        <p className="text-sm text-slate-500">{testimonial.country}</p>
                      </div>
                    </div>

                    {/* Body: Quote */}
                    <blockquote className="mt-4 sm:mt-6 flex-1 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {testimonial.quote}
                    </blockquote>

                    {/* Footer: Stars */}
                    <div className="mt-4 sm:mt-6 flex gap-1 text-[#d97706]">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="size-5 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
