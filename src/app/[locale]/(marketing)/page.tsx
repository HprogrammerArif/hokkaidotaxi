import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { AboutKaiya } from '@/components/AboutKaiya';
import { AccessibilitySpecialRequests } from '@/components/AccessibilitySpecialRequests';
import { AirportPickup } from '@/components/AirportPickup';
import { BeforeYouBook } from '@/components/BeforeYouBook';
import { ChangesDelaysWaitingTime } from '@/components/ChangesDelaysWaitingTime';
import { CoreValues } from '@/components/CoreValues';
import { FaqSection } from '@/components/FaqSection';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { JoinOurNetwork } from '@/components/JoinOurNetwork';
import { JsonLd } from '@/components/JsonLd';
import { SafetyServiceStandards } from '@/components/SafetyServiceStandards';
import { TravelOptions } from '@/components/TravelOptions';
import { VehicleJourney } from '@/components/VehicleJourney';
import { WhyChooseKaiya } from '@/components/WhyChooseKaiya';
import { HeroBookingForm } from '@/components/HeroBookingForm';
import { ReadyToBook } from '@/components/ReadyToBook';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { ContactAndSupport } from '@/components/ContactAndSupport';


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
      icon: '/assets/icons/location.svg',
      title: t('feature_3_title'),
      description: t('feature_3_description'),
    },
    {
      icon: '/assets/icons/stopwatch.svg',
      title: t('feature_4_title'),
      description: t('feature_4_description'),
    },
  ] as const;

  const travelOptions = [
    {
      icon: '/assets/icons/planeIcon.svg',
      title: t('travel_option_1_title'),
      description: t('travel_option_1_description'),
      bullets: [
        t('travel_option_1_bullet_1'),
        t('travel_option_1_bullet_2'),
        t('travel_option_1_bullet_3'),
      ],
    },
    {
      icon: '/assets/icons/hotelIcon.svg',
      title: t('travel_option_2_title'),
      description: t('travel_option_2_description'),
      bullets: [
        t('travel_option_2_bullet_1'),
        t('travel_option_2_bullet_2'),
        t('travel_option_2_bullet_3'),
      ],
    },
    {
      icon: '/assets/icons/pointIcon.svg',
      title: t('travel_option_3_title'),
      description: t('travel_option_3_description'),
      bullets: [
        t('travel_option_3_bullet_1'),
        t('travel_option_3_bullet_2'),
        t('travel_option_3_bullet_3'),
      ],
    },
    {
      icon: '/assets/icons/fixIcon.svg',
      title: t('travel_option_4_title'),
      description: t('travel_option_4_description'),
      bullets: [
        t('travel_option_4_bullet_1'),
        t('travel_option_4_bullet_2'),
        t('travel_option_4_bullet_3'),
      ],
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

  const howItWorksSteps = [
    {
      title: t('how_it_works_step_1_title'),
      description: t('how_it_works_step_1_description'),
    },
    {
      title: t('how_it_works_step_2_title'),
      description: t('how_it_works_step_2_description'),
    },
    {
      title: t('how_it_works_step_3_title'),
      description: t('how_it_works_step_3_description'),
    },
    {
      title: t('how_it_works_step_4_title'),
      description: t('how_it_works_step_4_description'),
    },
    {
      title: t('how_it_works_step_5_title'),
      description: t('how_it_works_step_5_description'),
    },
  ] as const;

  const airportPickupItems = [
    {
      icon: 'tracking',
      title: t('airport_pickup_tracking_title'),
      description: t('airport_pickup_tracking_description'),
    },
    {
      icon: 'driver',
      title: t('airport_pickup_meeting_title'),
      description: t('airport_pickup_meeting_description'),
    },
    {
      icon: 'luggage',
      title: t('airport_pickup_luggage_title'),
      description: t('airport_pickup_luggage_description'),
    },
  ] as const;

  const beforeYouBookCards = [
    {
      icon: 'pricing',
      title: t('before_you_book_pricing_title'),
      description: t('before_you_book_pricing_description'),
    },
    {
      icon: 'included',
      title: t('before_you_book_included_title'),
      description: t('before_you_book_included_description'),
      items: [
        t('before_you_book_included_item_1'),
        t('before_you_book_included_item_2'),
        t('before_you_book_included_item_3'),
        t('before_you_book_included_item_4'),
        t('before_you_book_included_item_5'),
      ],
      itemStyle: 'check',
    },
    {
      icon: 'extra',
      title: t('before_you_book_extra_title'),
      description: t('before_you_book_extra_description'),
      items: [
        t('before_you_book_extra_item_1'),
        t('before_you_book_extra_item_2'),
        t('before_you_book_extra_item_3'),
        t('before_you_book_extra_item_4'),
      ],
      itemStyle: 'bullet',
    },
    {
      icon: 'transparency',
      title: t('before_you_book_transparency_title'),
      description: t('before_you_book_transparency_description'),
    },
  ] as const;

  const beforeYouBookPoints = [
    {
      title: t('before_you_book_point_transparent_title'),
      description: t('before_you_book_point_transparent_description'),
    },
    {
      title: t('before_you_book_point_flexible_title'),
      description: t('before_you_book_point_flexible_description'),
    },
    {
      title: t('before_you_book_point_secure_title'),
      description: t('before_you_book_point_secure_description'),
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

  const accessibilitySpecialRequestsCards = [
    {
      icon: 'childSeat',
      title: t('accessibility_special_requests_child_seats_title'),
      description: t('accessibility_special_requests_child_seats_description'),
    },
    {
      icon: 'wheelchair',
      title: t('accessibility_special_requests_wheelchair_title'),
      description: t('accessibility_special_requests_wheelchair_description'),
    },
    {
      icon: 'pet',
      title: t('accessibility_special_requests_pet_title'),
      description: t('accessibility_special_requests_pet_description'),
    },
    {
      icon: 'language',
      title: t('accessibility_special_requests_language_title'),
      description: t('accessibility_special_requests_language_description'),
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

  const aboutKaiyaParagraphs = [
    t('about_kaiya_paragraph_1'),
    t('about_kaiya_paragraph_2'),
  ] as const;

  const coreValues = [
    {
      icon: '/assets/icons/philosofy.svg',
      title: t('core_values_philosophy_title'),
      description: t('core_values_philosophy_description'),
    },
    {
      icon: '/assets/icons/relailability.svg',
      title: t('core_values_reliability_title'),
      description: t('core_values_reliability_description'),
    },
    {
      icon: '/assets/icons/customer-first.svg',
      title: t('core_values_customer_title'),
      description: t('core_values_customer_description'),
    },
    {
      icon: '/assets/icons/quality.svg',
      title: t('core_values_quality_title'),
      description: t('core_values_quality_description'),
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
      <section id="bookings" className="relative flex min-h-[85vh] items-center justify-center overflow-hidden py-20 sm:py-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/bacggroundOverlayImage.jpg"
            alt="Premium Private Travel Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <h1 className="mb-10 mt-4  max-w-5xl mx-auto  text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight">
            {t('hero_title')}
          </h1>

          {/* Booking Widget */}
          <div className="flex justify-center w-full">
            <HeroBookingForm />
          </div>

          {/* Subtext */}
          <p className="xl:mt-24 mt-48 md:mt-68 lg:mt-60
           text-center text-sm text-white/80 sm:text-base  max-w-5xl mx-auto ">
            {t('hero_subtext')}
          </p>

          {/* Features Pill Bar */}
          <div className="mt-6 mb:4 md:mb-12 flex justify-center  max-w-5xl mx-auto ">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-full border border-white/20 bg-black/30 px-4 py-2 md:px-6 md:py-3 text-sm font-medium text-white backdrop-blur-md">
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
      <Features title={t('features_title')} description={t('features_body_text')} items={features} />

      {/* ── TRAVEL OPTIONS ── */}
      <TravelOptions title={t('travel_options_title')} description={t('travel_options_description')} items={travelOptions} />

      <VehicleJourney title={t('vehicle_journey_title')} description={t('vehicle_journey_description')} items={vehicleJourney} />

      <HowItWorks
        eyebrow={t('how_it_works_eyebrow')}
        title={t('how_it_works_title')}
        image="/assets/newImages/YourJourney.png"
        imageAlt={t('how_it_works_image_alt')}
        steps={howItWorksSteps}
        confirmationLabel={t('how_it_works_confirmation_label')}
        confirmationDescription={t('how_it_works_confirmation_description')}
      />

      <AirportPickup
        title={t('airport_pickup_title')}
        description={t('airport_pickup_description')}
        image="/assets/newImages/AirportPickup.png"
        imageAlt={t('airport_pickup_image_alt')}
        arrowImage="/assets/images/errow.png"
        items={airportPickupItems}
      />

      <BeforeYouBook
        title={t('before_you_book_title')}
        description={t('before_you_book_description')}
        cards={beforeYouBookCards}
        points={beforeYouBookPoints}
      />

      <ChangesDelaysWaitingTime
        title={t('changes_delays_waiting_time_title')}
        description={t('changes_delays_waiting_time_description')}
        cards={changesDelaysWaitingTimeCards}
        supportTitle={t('changes_delays_waiting_time_support_title')}
        supportDescription={t('changes_delays_waiting_time_support_description')}
      />

      <AccessibilitySpecialRequests
        title={t('accessibility_special_requests_title')}
        description={t('accessibility_special_requests_description')}
        cards={accessibilitySpecialRequestsCards}
        uniqueTitle={t('accessibility_special_requests_unique_title')}
        uniqueDescription={t.rich('accessibility_special_requests_unique_description', {
          email: (chunks) => (
            <a
              href={`mailto:${t('accessibility_special_requests_contact_email')}`}
              className="font-extrabold text-white underline underline-offset-4"
            >
              {chunks}
            </a>
          ),
        })}
        commitment={t('accessibility_special_requests_commitment')}
      />

      <SafetyServiceStandards
        title={t('safety_service_standards_title')}
        description={t('safety_service_standards_description')}
        cards={safetyServiceStandardsCards}
        termsLabel={t('safety_service_standards_terms_label')}
        termsDescription={t('safety_service_standards_terms_description')}
      />

      <FaqSection
        title={t('faq_title')}
        description={t('faq_description')}
        categories={faqCategories}
        items={faqItems}
      />

      <AboutKaiya
        title={t('about_kaiya_title')}
        paragraphs={aboutKaiyaParagraphs}
        image="/assets/images/aboutKaiya.jpg"
        imageAlt={t('about_kaiya_image_alt')}
      />

      <CoreValues 
        title={t('core_values_title')} 
        description={t('core_values_description')}
        items={coreValues} 
      />

      {/* ── Why Choose Kaiya ── */}
      <WhyChooseKaiya
        title={t('why_choose_title')}
        description={t('why_choose_description')}
        image1="/assets/images/whyChooseKaiya1.jpg"
        image1Alt={t('why_choose_image_1_alt')}
        image2="/assets/images/whyChooseKaiya2.jpeg"
        image2Alt={t('why_choose_image_2_alt')}
        topItems={[
          { title: t('why_choose_item_1_title'), description: t('why_choose_item_1_description') },
          { title: t('why_choose_item_2_title'), description: t('why_choose_item_2_description') },
          { title: t('why_choose_item_3_title'), description: t('why_choose_item_3_description') },
        ]}
        bottomItems={[
          { title: t('why_choose_item_4_title'), description: t('why_choose_item_4_description') },
          { title: t('why_choose_item_5_title'), description: t('why_choose_item_5_description') },
          { title: t('why_choose_item_6_title'), description: t('why_choose_item_6_description') },
        ]}
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


      {/* Contact & Support */}
      <ContactAndSupport
        title={t('contact_support_title')}
        description={t('contact_support_description')}
        phone={{ label: t('contact_support_phone_label'), value: t('contact_support_phone_value') }}
        email={{ label: t('contact_support_email_label'), value: t('contact_support_email_value') }}
        location={{ label: t('contact_support_location_label'), value: t('contact_support_location_value') }}
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
      <JoinOurNetwork title={t('join_our_network_title')} description={t('join_our_network_description')} items={networkPartners} />
      {/* READY TO BOOK */}
      <ReadyToBook
        title={t('ready_to_book_title')}
        description={t('ready_to_book_description')}
        ctaLabel={t('ready_to_book_cta')}
        ctaHref="https://book.kaiya.taxi/"
      />

    </>
  );
}
