import Image from 'next/image';
import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type RouteItem = {
  id: string;
  from: string;
  to: string;
  distance: string;
  image: string;
};

type PopularRoutesProps = {
  title: string;
  description: string;
  routes: readonly RouteItem[];
};

/**
 * Renders the Popular Routes section with beautifully styled image cards.
 * @param props PopularRoutesProps containing title, description, and an array of routes.
 * @returns React.ReactNode representing the Popular Routes section
 */
export const PopularRoutes = (props: PopularRoutesProps): React.ReactNode => (
  <section className="bg-white py-20 sm:py-28" id="routes">
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
        {props.routes.map((route, index) => (
          <ScrollReveal
            key={route.id}
            animation="up"
            delay={[0, 150, 300][index % 3] as 0 | 150 | 300}
          >
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:ring-blue-300">
              {/* Image Header */}
              <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-slate-100">
                <Image
                  src={route.image}
                  alt={`${route.from} to ${route.to}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2 text-slate-900">
                        <span className="text-lg font-bold">{route.from}</span>
                        <svg
                          className="h-4 w-4 shrink-0 text-slate-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                        <span className="text-lg font-bold">{route.to}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center space-x-2 text-sm text-slate-500">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-600">Distance: {route.distance}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);
