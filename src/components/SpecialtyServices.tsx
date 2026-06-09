import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type ServiceCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type SpecialtyServicesProps = {
  title: string;
  description: string;
  services: readonly ServiceCard[];
  ctaText: string;
  ctaButtonText: string;
  ctaButtonHref: string;
};

/**
 * Renders the Specialty Services section with icon cards and a call-to-action bottom banner.
 * @param props SpecialtyServicesProps containing section text and service data
 * @returns React.ReactNode representing the Specialty Services section
 */
export const SpecialtyServices = (props: SpecialtyServicesProps): React.ReactNode => (
  <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20" id="specialty-services">
    {/* Decorative background blobs */}

    <div className="absolute top-0 -left-20 h-[200px] w-[200px] rounded-full bg-blue-100/40 blur-xl md:-left-30 md:h-[300px] md:w-[300px] md:blur-2xl lg:-left-40 lg:h-[500px] lg:w-[500px] lg:blur-3xl" />
    <div className="absolute right-0 -bottom-20 h-[200px] w-[200px] rounded-full bg-indigo-50/50 blur-xl md:-bottom-30 md:h-[300px] md:w-[300px] md:blur-lg lg:-bottom-40 lg:h-[500px] lg:w-[500px] lg:blur-3xl" />

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
        {props.services.map((service, index) => (
          <ScrollReveal
            key={service.title}
            animation="up"
            delay={[0, 150, 300][index % 3] as 0 | 150 | 300}
          >
            <div className="group relative h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:ring-blue-300">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                {service.title}
              </h3>
              <p className="leading-relaxed text-slate-600">{service.description}</p>
              {/* Decorative bottom line */}
              <div className="absolute right-8 bottom-0 left-8 h-[2px] scale-x-0 rounded-t-full bg-blue-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom CTA */}
      <ScrollReveal animation="up" delay={400}>
        <div className="mt-12 flex flex-col items-center text-center">
          <p className="text-lg font-medium text-slate-600">{props.ctaText}</p>
          <div className="mt-6">
            <a
              href={props.ctaButtonHref}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2B7FFF] to-[#4A90E2] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:from-[#1A66FF] hover:to-[#357ABD] hover:shadow-[0_0_20px_rgba(43,127,255,0.4)] focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 focus:outline-none active:scale-95"
            >
              {props.ctaButtonText}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);
