import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type WhyChooseItem = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type StatItem = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

type WhyChooseKaiyaProps = {
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  items: readonly WhyChooseItem[];
  stats: readonly StatItem[];
};

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    className="size-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/**
 * Renders a redesigned "Why Choose Kaiya" section with a sticky left column containing an image and stats,
 * and a scrollable right column containing the 5 feature items.
 * @param props WhyChooseKaiyaProps containing title, image, stats and features
 * @returns React.ReactNode representing the Why Choose Kaiya section
 */
export const WhyChooseKaiya = (props: WhyChooseKaiyaProps): React.ReactNode => (
  <section className="relative overflow-hidden bg-slate-50 py-16 md:py-28">
    {/* Decorative background blobs */}
    <div className="absolute top-0 -left-40 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />
    <div className="absolute right-0 -bottom-40 h-[500px] w-[500px] rounded-full bg-indigo-50/50 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Sticky Title & Image & Stats */}
        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <ScrollReveal animation="up">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {props.title}
              </h2>
              {props.description && (
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{props.description}</p>
              )}
            </ScrollReveal>

            <ScrollReveal animation="up" delay={150}>
              <div className="mt-8 overflow-hidden rounded-3xl shadow-xl shadow-slate-200/50">
                <Image
                  src={props.image}
                  alt={props.imageAlt}
                  width={640}
                  height={480}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </ScrollReveal>

            {/* Stats Row */}
            <ScrollReveal animation="up" delay={300}>
              <div className="mt-8 grid grid-cols-3 gap-4 divide-x divide-slate-200 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/50">
                {props.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group flex flex-col items-center justify-center px-2 text-center"
                  >
                    {stat.icon && (
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-slate-200/50 ring-slate-100 transition-transform duration-300 group-hover:scale-110">
                        {stat.icon}
                      </div>
                    )}
                    <span className="text-2xl font-black text-blue-600 lg:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Column: Features Grid */}
        <div className="lg:col-span-7 lg:pl-10">
          <div className="flex flex-col space-y-6">
            {props.items.map((item, index) => (
              <ScrollReveal
                key={item.title}
                animation="up"
                delay={([0, 100, 200, 300, 400] as const)[index % 5]}
              >
                <div className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 hover:ring-blue-200">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100 group-hover:text-blue-700">
                      {item.icon ?? <CheckIcon />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
