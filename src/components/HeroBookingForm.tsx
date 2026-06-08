'use client';

import { ScrollReveal } from '@/components/ScrollReveal';



/** Inline booking widget rendered inside the hero section. */
export function HeroBookingForm() {
 
  return (
    <ScrollReveal  className="w-full max-w-6xl relative z-50">
      {/* 
        The wrapper has a fixed height that matches the "closed" form size. 
        This prevents the huge empty gap from pushing down the text below. 
      */}
      <div className="w-full rounded-2xl bg-transparent transition-all duration-400 h-[180px] sm:h-[120px] md:h-[100px]">
        <iframe 
          src="https://book.kaiya.taxi/booking-form.php" 
          className="absolute top-0 left-0 w-full h-[550px] sm:h-[450px] md:h-[450px] border-none bg-transparent"
          title="Kaiya Booking Form"
          scrolling="no"
        />
      </div>
    </ScrollReveal>
  );
}
