import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { ChangesDelaysWaitingTime } from '@/components/ChangesDelaysWaitingTime';
import { ContactAndSupport } from '@/components/ContactAndSupport';
import { FaqSection } from '@/components/FaqSection';
import { Features } from '@/components/Features';
import { HeroBookingForm } from '@/components/HeroBookingForm';
import { JoinOurNetwork } from '@/components/JoinOurNetwork';
import { JsonLd } from '@/components/JsonLd';
import { PopularRoutes } from '@/components/PopularRoutes';
import { ReadyToBook } from '@/components/ReadyToBook';
import { SafetyServiceStandards } from '@/components/SafetyServiceStandards';
import { SightseeingTours } from '@/components/SightseeingTours';
import { SpecialtyServices } from '@/components/SpecialtyServices';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { VehicleJourney } from '@/components/VehicleJourney';
import { WhyChooseKaiya } from '@/components/WhyChooseKaiya';

const ExperienceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="url(#starGrad)"
    stroke="url(#starGrad)"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
  >
    <defs>
      <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const TravelersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#travelGrad)"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
  >
    <defs>
      <linearGradient id="travelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SupportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#supportGrad)"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-6"
  >
    <defs>
      <linearGradient id="supportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </svg>
);

type IndexPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IndexPageProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function IndexPage(props: IndexPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Index' });

  const features = [
    {
      icon: '/assets/icons/airplane.svg',
      title: t('feature_1_title'),
      description: t('feature_1_description'),
    },
    {
      icon: '/assets/icons/hotel.svg',
      title: t('feature_2_title'),
      description: t('feature_2_description'),
    },
    {
      // icon: '/assets/icons/tourIcon.svg',
      icon: '/assets/icons/tourstravels.png',
      title: t('feature_3_title'),
      description: t('feature_3_description'),
    },
    {
      icon: '/assets/icons/stopwatch.svg',
      title: t('feature_4_title'),
      description: t('feature_4_description'),
    },
  ] as const;

  const vehicleJourney = [
    {
      image: '/assets/newImages/sedan.png',
      title: t('vehicle_journey_compact_sedan_title'),
      subtitle: t('vehicle_journey_compact_sedan_subtitle'),
      description: t('vehicle_journey_compact_sedan_description'),
      bullets: [
        t('vehicle_journey_compact_sedan_bullet_1'),
        t('vehicle_journey_compact_sedan_bullet_2'),
        t('vehicle_journey_compact_sedan_bullet_3'),
        t('vehicle_journey_compact_sedan_bullet_4'),
      ],
      imageSide: 'left',
    },
    {
      image: '/assets/newImages/minivan.png',
      title: t('vehicle_journey_mini_van_title'),
      subtitle: t('vehicle_journey_mini_van_subtitle'),
      description: t('vehicle_journey_mini_van_description'),
      bullets: [
        t('vehicle_journey_mini_van_bullet_1'),
        t('vehicle_journey_mini_van_bullet_2'),
        t('vehicle_journey_mini_van_bullet_3'),
        t('vehicle_journey_mini_van_bullet_4'),
      ],
      imageSide: 'right',
    },
    {
      image: '/assets/newImages/van.png',
      title: t('vehicle_journey_comfort_van_title'),
      subtitle: t('vehicle_journey_comfort_van_subtitle'),
      description: t('vehicle_journey_comfort_van_description'),
      bullets: [
        t('vehicle_journey_comfort_van_bullet_1'),
        t('vehicle_journey_comfort_van_bullet_2'),
        t('vehicle_journey_comfort_van_bullet_3'),
        t('vehicle_journey_comfort_van_bullet_4'),
      ],
      imageSide: 'left',
    },
    {
      image: '/assets/newImages/suv.png',
      title: t('vehicle_journey_premium_suv_title'),
      subtitle: t('vehicle_journey_premium_suv_subtitle'),
      description: t('vehicle_journey_premium_suv_description'),
      bullets: [
        t('vehicle_journey_premium_suv_bullet_1'),
        t('vehicle_journey_premium_suv_bullet_2'),
        t('vehicle_journey_premium_suv_bullet_3'),
        t('vehicle_journey_premium_suv_bullet_4'),
      ],
      imageSide: 'right',
    },
  ] as const;

  const changesDelaysWaitingTimeCards = [
    {
      icon: 'waiting',
      title: t('changes_delays_waiting_time_included_title'),
      description: t('changes_delays_waiting_time_included_description'),
    },
    {
      icon: 'beyond',
      title: t('changes_delays_waiting_time_beyond_title'),
      description: t('changes_delays_waiting_time_beyond_description'),
    },
    {
      icon: 'modify',
      title: t('changes_delays_waiting_time_modify_title'),
      description: t('changes_delays_waiting_time_modify_description'),
    },
    {
      icon: 'cancellation',
      title: t('changes_delays_waiting_time_cancellations_title'),
      description: t('changes_delays_waiting_time_cancellations_description'),
    },
  ] as const;

  const safetyServiceStandardsCards = [
    {
      icon: 'professionalDriver',
      title: t('safety_service_standards_driver_title'),
      description: t('safety_service_standards_driver_description'),
    },
    {
      icon: 'maintenance',
      title: t('safety_service_standards_maintenance_title'),
      description: t('safety_service_standards_maintenance_description'),
    },
    {
      icon: 'compliance',
      title: t('safety_service_standards_compliance_title'),
      description: t('safety_service_standards_compliance_description'),
    },
    {
      icon: 'privacy',
      title: t('safety_service_standards_privacy_title'),
      description: t('safety_service_standards_privacy_description'),
    },
  ] as const;

  const faqCategories = [
    {
      id: 'all',
      label: t('faq_category_all'),
    },
    {
      id: 'booking',
      label: t('faq_category_booking'),
    },
    {
      id: 'airport',
      label: t('faq_category_airport'),
    },
    {
      id: 'policy',
      label: t('faq_category_policy'),
    },
    {
      id: 'service',
      label: t('faq_category_service'),
    },
  ] as const;

  const faqItems = [
    {
      id: 'book-transfer',
      category: 'booking',
      question: t('faq_book_transfer_question'),
      answer: t('faq_book_transfer_answer'),
    },
    {
      id: 'hourly-charter',
      category: 'service',
      question: t('faq_hourly_charter_question'),
      answer: t('faq_hourly_charter_answer'),
    },
    {
      id: 'airport-pickup',
      category: 'airport',
      question: t('faq_airport_pickup_question'),
      answer: t('faq_airport_pickup_answer'),
    },
    {
      id: 'flight-delayed',
      category: 'airport',
      question: t('faq_flight_delayed_question'),
      answer: t('faq_flight_delayed_answer'),
    },
    {
      id: 'cancellation-policy',
      category: 'policy',
      question: t('faq_cancellation_policy_question'),
      answer: t('faq_cancellation_policy_answer'),
    },
    {
      id: 'booking-changes',
      category: 'booking',
      question: t('faq_booking_changes_question'),
      answer: t('faq_booking_changes_answer'),
    },
    {
      id: 'child-seats',
      category: 'service',
      question: t('faq_child_seats_question'),
      answer: t('faq_child_seats_answer'),
    },
    {
      id: 'payment-methods',
      category: 'policy',
      question: t('faq_payment_methods_question'),
      answer: t('faq_payment_methods_answer'),
    },
  ] as const;

  const networkPartners = [
    {
      icon: '/assets/icons/driver.svg',
      title: t('join_our_network_drivers_title'),
      description: t('join_our_network_drivers_description'),
    },
    {
      icon: '/assets/icons/trPartner.svg',
      title: t('join_our_network_travel_partners_title'),
      description: t('join_our_network_travel_partners_description'),
    },
    {
      icon: '/assets/icons/businessIcon.svg',
      title: t('join_our_network_business_title'),
      description: t('join_our_network_business_description'),
    },
  ] as const;

  return (
    <>
      <JsonLd locale={locale} />
      {/* ── Hero ── */}
      <section
        id="bookings"
        className="relative flex min-h-[85vh] items-center justify-center overflow-hidden py-20 sm:py-28"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/heroBg.jpg"
            alt="Premium Private Travel Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <h1 className="mx-auto mt-4 mb-10 max-w-5xl text-center text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {t('hero_title')}
          </h1>

          {/* Booking Widget */}
          <div className="flex w-full justify-center">
            <HeroBookingForm />
          </div>

          {/* Subtext */}
          <p className="mx-auto mt-48 max-w-5xl text-center text-sm text-white/80 sm:text-base md:mt-68 lg:mt-60 xl:mt-24">
            {t('hero_subtext')}
          </p>

          {/* Features Pill Bar */}
          <div className="mb:4 mx-auto mt-6 flex max-w-5xl justify-center md:mb-12">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-md md:px-6 md:py-3">
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-white/70">✓</span>
                {t('hero_feature_1')}
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-white/70">✓</span>
                {t('hero_feature_2')}
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-white/70">✓</span>
                {t('hero_feature_3')}
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-white/70">✓</span>
                {t('hero_feature_4')}
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-white/70">✓</span>
                {t('hero_feature_5')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <Features
        title={t('features_title')}
        description={t('features_body_text')}
        items={features}
      />

      {/* ── Why Choose Kaiya ── */}
      <WhyChooseKaiya
        title={t('why_choose_title')}
        description={t('why_choose_description')}
        image="/assets/images/whyChooseKaiya1.jpg"
        imageAlt={t('why_choose_image_1_alt')}
        stats={[
          {
            value: t('why_choose_stat_1_value'),
            label: t('why_choose_stat_1_label'),
            icon: <ExperienceIcon />,
          },
          {
            value: t('why_choose_stat_2_value'),
            label: t('why_choose_stat_2_label'),
            icon: <TravelersIcon />,
          },
          {
            value: t('why_choose_stat_3_value'),
            label: t('why_choose_stat_3_label'),
            icon: <SupportIcon />,
          },
        ]}
        items={[
          {
            title: t('why_choose_item_1_title'),
            description: t('why_choose_item_1_description'),
            icon: (
              <Image
                src="/assets/icons/award.png"
                width={48}
                height={48}
                alt="Award"
                className="h-full w-full object-contain mix-blend-multiply transition-all"
              />
            ),
          },
          {
            title: t('why_choose_item_2_title'),
            description: t('why_choose_item_2_description'),
            icon: (
              <Image
                src="/assets/icons/car.png"
                width={48}
                height={48}
                alt="Car"
                className="h-full w-full object-contain mix-blend-multiply transition-all"
              />
            ),
          },
          {
            title: t('why_choose_item_3_title'),
            description: t('why_choose_item_3_description'),
            icon: (
              <Image
                src="/assets/icons/headphones.png"
                width={48}
                height={48}
                alt="Headphones"
                className="h-full w-full object-contain mix-blend-multiply transition-all"
              />
            ),
          },
          {
            title: t('why_choose_item_4_title'),
            description: t('why_choose_item_4_description'),
            icon: (
              <Image
                src="/assets/icons/coverage.png"
                width={48}
                height={48}
                alt="Coverage"
                className="h-full w-full object-contain mix-blend-multiply transition-all"
              />
            ),
          },
          {
            title: t('why_choose_item_5_title'),
            description: t('why_choose_item_5_description'),
            icon: (
              <Image
                src="/assets/icons/pricing.png"
                width={48}
                height={48}
                alt="Pricing"
                className="h-full w-full object-contain mix-blend-multiply transition-all"
              />
            ),
          },
        ]}
      />

      {/* ── Popular Routes ── */}
      <PopularRoutes
        title={t('popular_routes_title')}
        description={t('popular_routes_description')}
        routes={[
          {
            id: '1',
            from: t('route_1_from'),
            to: t('route_1_to'),
            distance: t('route_1_distance'),
            image: '/assets/images/Sapporo.jpg',
          },
          {
            id: '2',
            from: t('route_4_from'),
            to: t('route_4_to'),
            distance: t('route_4_distance'),
            image: '/assets/images/Tokyo.jpg',
          },
          {
            id: '3',
            from: t('route_2_from'),
            to: t('route_2_to'),
            distance: t('route_2_distance'),
            image: '/assets/images/Chitose.jpg',
          },
          {
            id: '4',
            from: t('route_3_from'),
            to: t('route_3_to'),
            distance: t('route_3_distance'),
            image: '/assets/images/Asahikawa.jpg',
          },
          {
            id: '5',
            from: t('route_5_from'),
            to: t('route_5_to'),
            distance: t('route_5_distance'),
            image: '/assets/images/Hakodate.jpg',
          },
          {
            id: '6',
            from: t('route_6_from'),
            to: t('route_6_to'),
            distance: t('route_6_distance'),
            image: '/assets/images/CustomRoute.png',
          },
        ]}
      />

      {/* ── Sightseeing Tours ── */}
      <SightseeingTours
        title={t('sightseeing_tours_title')}
        description={t('sightseeing_tours_description')}
        tours={[
          {
            title: t('tour_1_title'),
            description: t('tour_1_description'),
            image: '/assets/images/Alpine.jpg',
            features: [t('tour_1_feature_1'), t('tour_1_feature_2'), t('tour_1_feature_3')],
          },
          {
            title: t('tour_2_title'),
            description: t('tour_2_description'),
            image: '/assets/images/Cultural.jpg',
            features: [t('tour_2_feature_1'), t('tour_2_feature_2'), t('tour_2_feature_3')],
          },
          {
            title: t('tour_3_title'),
            description: t('tour_3_description'),
            image: '/assets/images/Wellness.jpg',
            features: [t('tour_3_feature_1'), t('tour_3_feature_2'), t('tour_3_feature_3')],
          },
        ]}
        ctaTitle={t('tour_cta_title')}
        ctaDescription={t('tour_cta_description')}
        ctaButtonText={t('tour_cta_button')}
        ctaButtonHref="#contact"
      />

      {/* ── Specialty Services ── */}
      <SpecialtyServices
        title={t('specialty_services_title')}
        description={t('specialty_services_description')}
        services={[
          {
            title: t('specialty_1_title'),
            description: t('specialty_1_description'),
            icon: (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            ),
          },
          {
            title: t('specialty_2_title'),
            description: t('specialty_2_description'),
            icon: (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            ),
          },
          {
            title: t('specialty_3_title'),
            description: t('specialty_3_description'),
            icon: (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            ),
          },
        ]}
        ctaText={t('specialty_cta_text')}
        ctaButtonText={t('specialty_cta_button')}
        ctaButtonHref="#contact"
      />

      <VehicleJourney
        title={t('vehicle_journey_title')}
        description={t('vehicle_journey_description')}
        items={vehicleJourney}
      />

      <ChangesDelaysWaitingTime
        title={t('changes_delays_waiting_time_title')}
        description={t('changes_delays_waiting_time_description')}
        cards={changesDelaysWaitingTimeCards}
        supportTitle={t('changes_delays_waiting_time_support_title')}
        supportDescription={t('changes_delays_waiting_time_support_description')}
      />

      <SafetyServiceStandards
        title={t('safety_service_standards_title')}
        description={t('safety_service_standards_description')}
        cards={safetyServiceStandardsCards}
        termsLabel={t('safety_service_standards_terms_label')}
        termsDescription={t('safety_service_standards_terms_description')}
      />

      {/* Why Travelers Trust Us user swipper slider review section */}
      <TestimonialSlider
        title={t('testimonials_title')}
        subtitle={t('testimonials_subtitle')}
        testimonials={[
          {
            name: t('testimonial_1_name'),
            country: t('testimonial_1_country'),
            quote: t('testimonial_1_quote'),
            avatar: '/assets/images/avatar-sarah.png',
          },
          {
            name: t('testimonial_2_name'),
            country: t('testimonial_2_country'),
            quote: t('testimonial_2_quote'),
            avatar: '/assets/images/avatar-james.png',
          },
          {
            name: t('testimonial_3_name'),
            country: t('testimonial_3_country'),
            quote: t('testimonial_3_quote'),
            avatar: '/assets/images/avatar-yuki.png',
          },
          {
            name: t('testimonial_4_name'),
            country: t('testimonial_4_country'),
            quote: t('testimonial_4_quote'),
            avatar: '/assets/images/avatar-james.png',
          },
          {
            name: t('testimonial_5_name'),
            country: t('testimonial_5_country'),
            quote: t('testimonial_5_quote'),
            avatar: '/assets/images/avatar-sarah.png',
          },
          {
            name: t('testimonial_6_name'),
            country: t('testimonial_6_country'),
            quote: t('testimonial_6_quote'),
            avatar: '/assets/images/avatar-james.png',
          },
        ]}
      />

      <FaqSection
        title={t('faq_title')}
        description={t('faq_description')}
        categories={faqCategories}
        items={faqItems}
        faqCtaTitle={t('faq_cta_title')}
        faqCtaDescription={t('faq_cta_description')}
        faqCtaButtonText={t('faq_cta_button_text')}
        faqCtaButtonHref={t('faq_cta_button_href')}
      />

      {/* Contact & Support */}
      <ContactAndSupport
        title={t('contact_support_title')}
        description={t('contact_support_description')}
        phone={{ label: t('contact_support_phone_label'), value: t('contact_support_phone_value') }}
        email={{ label: t('contact_support_email_label'), value: t('contact_support_email_value') }}
        line={{
          label: 'LINE',
          value: 'Instant messaging',
        }}
        footerText={t('contact_support_footer')}
        form={{
          nameLabel: t('contact_support_form_name_label'),
          namePlaceholder: t('contact_support_form_name_placeholder'),
          emailLabel: t('contact_support_form_email_label'),
          emailPlaceholder: t('contact_support_form_email_placeholder'),
          messageLabel: t('contact_support_form_message_label'),
          messagePlaceholder: t('contact_support_form_message_placeholder'),
          submitText: t('contact_support_form_submit'),
        }}
      />

      {/* join our network */}
      <JoinOurNetwork
        title={t('join_our_network_title')}
        description={t('join_our_network_description')}
        items={networkPartners}
      />
      {/* READY TO BOOK */}
      <ReadyToBook
        title={t('ready_to_book_title')}
        description={t('ready_to_book_description')}
        ctaLabel={t('ready_to_book_cta_book')}
        ctaLabelEmail={t('ready_to_book_cta_email')}
        ctaHref="https://www.bookhokkaidotaxi.com/"
      />
    </>
  );
}
