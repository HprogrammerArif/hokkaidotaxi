import * as React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type CapacityLevel = {
  pax: number;
  lugg: number;
  label: string;
};

type VehicleRow = {
  vehicle: string;
  seats: number;
  min: CapacityLevel;
  suitable: CapacityLevel;
  max: CapacityLevel;
  tip?: string;
};

type VehicleCapacityProps = {
  title: string;
  description: string;
  noteText: string;
  rows: readonly VehicleRow[];
};

/**
 * Renders a small icon for passenger count.
 * @returns The SVG passenger icon element
 */
const PaxIcon = () => (
  <svg
    aria-hidden="true"
    className="inline size-3.5 shrink-0 text-blue-500"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
  </svg>
);

/**
 * Renders a colorful rolling suitcase icon for luggage count.
 * @returns The SVG suitcase icon element
 */
const LuggIcon = () => (
  <svg aria-hidden="true" className="inline size-3.5 shrink-0" viewBox="0 0 24 24" fill="none">
    {/* Handle */}
    <path
      d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"
      stroke="#92400e"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Suitcase body */}
    <rect x="3" y="6" width="18" height="13" rx="2" fill="#3f50a3ff" />
    {/* Body sheen strip */}
    <rect x="3" y="6" width="18" height="4" rx="2" fill="#677186ff" />
    {/* Horizontal centre band */}
    <rect x="3" y="11.5" width="18" height="2" fill="#a09da7ff" />
    {/* Clasp */}
    <rect x="10.5" y="10.5" width="3" height="3" rx="0.5" fill="#310e92ff" />
    {/* Wheels */}
    <circle cx="7.5" cy="21" r="1.2" fill="#475569" />
    <circle cx="16.5" cy="21" r="1.2" fill="#475569" />
  </svg>
);

type LoadBadgeProps = {
  label: string;
  variant: 'min' | 'suitable' | 'max';
};

const variantStyles: Record<LoadBadgeProps['variant'], string> = {
  min: 'bg-slate-100 text-slate-600',
  suitable: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
  max: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
};

const LoadBadge = (props: LoadBadgeProps) => (
  <span
    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${variantStyles[props.variant]}`}
  >
    {props.label}
  </span>
);

type CapacityCellProps = {
  level: CapacityLevel;
  variant: LoadBadgeProps['variant'];
};

const CapacityCell = (props: CapacityCellProps) => (
  <div className="flex flex-col items-center gap-1.5">
    <LoadBadge label={props.level.label} variant={props.variant} />
    <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
      <PaxIcon />
      <span>{props.level.pax}</span>
      <span className="mx-0.5 text-slate-300">·</span>
      <LuggIcon />
      <span>{props.level.lugg}</span>
    </div>
  </div>
);

type SeatIconRowProps = {
  seats: number;
  max: number;
};

/**
 * Visual seat occupancy bar showing filled and empty seat dots.
 * @param props - Seat counts for rendering the occupancy bar
 * @returns The seat occupancy dot row element
 */
const SeatIconRow = (props: SeatIconRowProps) => (
  <div className="mt-2 flex items-center gap-0.5">
    {Array.from({ length: props.max }).map((_, i) => (
      <span
        key={i}
        className={`block h-2 w-2 rounded-full ${i < props.seats ? 'bg-blue-500' : 'bg-slate-200'}`}
      />
    ))}
  </div>
);

/**
 * Renders the vehicle capacity reference table section.
 * Uses white background with ScrollReveal animations matching the site design system.
 * @param props VehicleCapacityProps
 * @returns React.ReactNode
 */
export const VehicleCapacity = (props: VehicleCapacityProps): React.ReactNode => {
  const maxSeats = Math.max(...props.rows.map((r) => r.seats));

  return (
    <section id="vehicle-capacity" className="mb-8 bg-slate-50 pt-12 pb-16 sm:pb-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Decorative background blobs */}
        <div className="absolute top-0 -left-10 h-[200px] w-[200px] rounded-full bg-blue-100/30 blur-lg md:-left-10 md:h-[200px] md:w-[200px] md:blur-xl lg:-left-10 lg:h-[200px] lg:w-[200px] lg:blur-2xl" />
        <div className="absolute right-0 -bottom-10 h-[200px] w-[200px] rounded-full bg-indigo-50/50 blur-xl md:-bottom-10 md:h-[200px] md:w-[200px] md:blur-xl lg:-bottom-10 lg:h-[200px] lg:w-[200px] lg:blur-2xl" />

        <div className="">
          {/* Section header */}
          <ScrollReveal animation="up">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {props.title}
              </h2>
              <p className="text-md mt-4 text-slate-600">{props.description}</p>
            </div>
          </ScrollReveal>

          {/* Desktop table */}
          <ScrollReveal animation="up" delay={150}>
            <div className="hidden overflow-hidden rounded-2xl border border-slate-100 shadow-sm md:block">
              <table className="w-full text-center text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-slate-500 uppercase">
                      Vehicle
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                      Seats
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                      Min Pax / Lugg
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-blue-600 uppercase">
                      ✦ Suitable Pax / Lugg
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-amber-600 uppercase">
                      Max Pax / Lugg
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {props.rows.map((row, idx) => (
                    <tr
                      key={row.vehicle}
                      className={`transition-colors duration-200 hover:bg-blue-50/30 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                    >
                      {/* Vehicle name */}
                      <td className="px-6 py-5 text-left">
                        <div className="flex items-center gap-3">
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <svg
                              aria-hidden="true"
                              className="size-5"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-5h14v5z" />
                              <circle cx="7.5" cy="14.5" r="1.5" />
                              <circle cx="16.5" cy="14.5" r="1.5" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-slate-900">{row.vehicle}</p>
                            <SeatIconRow seats={row.seats} max={maxSeats} />
                          </div>
                        </div>
                      </td>

                      {/* Seat count */}
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center justify-center rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                          {row.seats}
                        </span>
                      </td>

                      {/* Min */}
                      <td className="px-6 py-5">
                        <CapacityCell level={row.min} variant="min" />
                      </td>

                      {/* Suitable */}
                      <td className="bg-blue-50/40 px-6 py-5">
                        <CapacityCell level={row.suitable} variant="suitable" />
                      </td>

                      {/* Max */}
                      <td className="px-6 py-5">
                        <CapacityCell level={row.max} variant="max" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Mobile cards */}
          <div className="space-y-4 md:hidden">
            {props.rows.map((row, idx) => (
              <ScrollReveal
                key={row.vehicle}
                animation="up"
                delay={([0, 100, 200, 300] as const)[idx % 4]}
              >
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                  {/* Card header */}
                  <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-5 py-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <svg
                        aria-hidden="true"
                        className="size-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-5h14v5z" />
                        <circle cx="7.5" cy="14.5" r="1.5" />
                        <circle cx="16.5" cy="14.5" r="1.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{row.vehicle}</p>
                      <SeatIconRow seats={row.seats} max={maxSeats} />
                    </div>
                    <span className="ml-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                      {row.seats} seats
                    </span>
                  </div>

                  {/* Capacity grid */}
                  <div className="grid grid-cols-3 divide-x divide-slate-100 px-0 py-4">
                    <div className="flex flex-col items-center gap-2 px-3">
                      <CapacityCell level={row.min} variant="min" />
                    </div>
                    <div className="flex flex-col items-center gap-2 bg-blue-50/40 px-3">
                      <CapacityCell level={row.suitable} variant="suitable" />
                    </div>
                    <div className="flex flex-col items-center gap-2 px-3">
                      <CapacityCell level={row.max} variant="max" />
                    </div>
                  </div>

                  {row.tip && (
                    <div className="border-t border-slate-100 bg-slate-50 px-5 py-3">
                      <p className="text-xs text-slate-500 italic">{row.tip}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Legend note */}
          <ScrollReveal animation="up" delay={300}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <PaxIcon />
                Pax = Passengers
              </span>
              <span className="flex items-center gap-1.5">
                <LuggIcon />
                Lugg = Standard luggage pieces
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block size-2 rounded-full bg-blue-500" />✦ Suitable =
                recommended for most groups
              </span>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">{props.noteText}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
