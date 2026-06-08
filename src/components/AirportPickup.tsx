import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type AirportPickupIconName = 'tracking' | 'driver' | 'luggage';

type AirportPickupItem = {
  icon: AirportPickupIconName;
  title: string;
  description: string;
};

type AirportPickupProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  arrowImage: string;
  items: readonly AirportPickupItem[];
};

const airportPickupIcons: Record<AirportPickupIconName, string> = {
  tracking: '/assets/icons/traclink.svg',
  driver: '/assets/icons/driver.svg',
  luggage: '/assets/icons/luggages.svg',
};

/**
 * Renders airport pickup guidance with service details and arrival imagery.
 * @param props Airport pickup content, image assets, and guidance items
 * @returns React.ReactNode representing the airport pickup section
 */
export const AirportPickup = (props: AirportPickupProps): React.ReactNode => (
  <section className="bg-white py-10 md:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ScrollReveal animation="up">
        <div className="relative mx-auto max-w-3xl text-center">
          <Image
            src={props.arrowImage}
            alt=""
            width={201}
            height={177}
            aria-hidden="true"
            className="absolute -top-6 -left-20 hidden h-auto w-32 object-contain sm:block lg:-left-32 lg:w-40"
          />
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            {props.title}
          </h2>
          <p className="mt-4 text-sm font-medium text-slate-500 sm:text-base">
            {props.description}
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-10 rounded-[2rem] border border-slate-50 bg-white p-6 shadow-sm sm:p-8 lg:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-14">
          <div className="divide-y divide-slate-200">
            {props.items.map((item, index) => (
              <ScrollReveal
                key={item.title}
                animation="left"
                delay={([0, 150, 300] as const)[index % 3]}
              >
                <article className="group py-6">
                  <div className="flex items-center gap-3 text-slate-950">
                    <span className="flex size-8 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={airportPickupIcons[item.icon]}
                        alt=""
                        width={32}
                        height={32}
                        aria-hidden="true"
                        className="size-8 object-contain"
                      />
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="right" delay={150}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100">
              <Image
                src={props.image}
                alt={props.imageAlt}
                fill
                sizes="(min-width: 1024px) 560px, calc(100vw - 4rem)"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);
