'use client';

import { ScrollReveal } from '@/components/ScrollReveal';

/**
 * Inline booking widget rendered inside the hero section.
 * @returns The rendered component
 */
export function HeroBookingForm() {
  return (
    <ScrollReveal className="relative z-50 w-full max-w-6xl">
      {/*
        The wrapper has a fixed height that matches the "closed" form size. 
        This prevents the huge empty gap from pushing down the text below. 
      */}
      <div className="h-[180px] w-full rounded-2xl bg-transparent transition-all duration-400 sm:h-[120px] md:h-[100px]">
        <iframe
          src="https://www.bookhokkaidotaxi.com/booking-form.php"
          className="absolute top-0 left-0 h-[550px] w-full border-none bg-transparent sm:h-[450px] md:h-[450px]"
          title="Kaiya Booking Form"
        />
      </div>
    </ScrollReveal>
  );
}
