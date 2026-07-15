import { getBaseUrl } from '@/utils/Helpers';

type JsonLdProps = {
  locale: string;
};

/**
 * Renders multiple JSON-LD structured data scripts for the Hokkaido Taxi service.
 * Includes TaxiService, Organization, WebSite (with SearchAction), and
 * BreadcrumbList schemas to maximize rich result visibility in Google Search.
 * @param props - The component props containing the current locale.
 * @returns Multiple script elements with JSON-LD structured data.
 */
export const JsonLd = (props: JsonLdProps): React.ReactNode => {
  const baseUrl = getBaseUrl();

  // Primary business schema — TaxiService (most specific type for this business)
  const taxiServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    '@id': `${baseUrl}/#taxiservice`,
    name: 'Hokkaido Taxi | Kaiya Taxi',
    alternateName: 'Hokkaido Taxi',
    url: baseUrl,
    logo: `${baseUrl}/assets/logo/kaiyaLogoBlack.svg`,
    image: `${baseUrl}/assets/images/og-image.png`,
    description:
      'Kaiya Hokkaido Taxi is a licensed private transfer and taxi company based in Chitose, Hokkaido. We provide safe, comfortable, and reliable airport transfers, private transportation, and sightseeing services throughout Hokkaido with professional drivers and premium vehicles.',
    telephone: '+81-80-8293-8862',
    email: 'c.contact@hokkaido.taxi',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chitose',
      addressRegion: 'Hokkaido',
      addressCountry: 'JP',
      streetAddress: 'Shinano 4-11-4-2F-C',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.8215,
      longitude: 141.6505,
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Hokkaido',
        containedInPlace: { '@type': 'Country', name: 'Japan' },
      },
      {
        '@type': 'City',
        name: 'Sapporo',
        containedInPlace: { '@type': 'State', name: 'Hokkaido' },
      },
      {
        '@type': 'City',
        name: 'Chitose',
        containedInPlace: { '@type': 'State', name: 'Hokkaido' },
      },
      {
        '@type': 'City',
        name: 'Niseko',
        containedInPlace: { '@type': 'State', name: 'Hokkaido' },
      },
      {
        '@type': 'City',
        name: 'Furano',
        containedInPlace: { '@type': 'State', name: 'Hokkaido' },
      },
      {
        '@type': 'City',
        name: 'Otaru',
        containedInPlace: { '@type': 'State', name: 'Hokkaido' },
      },
    ],
    serviceType: [
      'Taxi Service',
      'Airport Shuttle Service',
      'Transportation Service',
      'Tour Operator',
      'Chauffeur Service',
      'Airport Transfer',
      'Hotel Transfer',
      'Hourly Charter',
      'Point-to-Point Transfer',
      'Day Trip',
    ],
    priceRange: '$$',
    currenciesAccepted: 'JPY',
    paymentAccepted: 'Credit Card, Bank Transfer, Cash',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.book.hokkaido.taxi/',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'Reservation',
        name: 'Book a Taxi',
      },
    },
    sameAs: [],
    inLanguage: props.locale,
  };

  // Organization schema — helps build the Google Knowledge Panel
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Hokkaido Taxi | Kaiya Taxi',
    alternateName: 'Hokkaido Taxi',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/assets/logo/kaiyaLogoBlack.svg`,
      width: 520,
      height: 520,
    },
    image: `${baseUrl}/assets/images/og-image.png`,
    description:
      'Hokkaido Taxi by Kaiya is a licensed private transfer and taxi company based in Chitose, Hokkaido, Japan. We provide premium airport transfers, private transportation, and sightseeing services throughout Hokkaido.',
    telephone: '+81-80-8293-8862',
    email: 'c.contact@hokkaido.taxi',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shinano 4-11-4-2F-C',
      addressLocality: 'Chitose',
      addressRegion: 'Hokkaido',
      postalCode: '066-0062',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.8215,
      longitude: 141.6505,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+81-80-8293-8862',
      contactType: 'customer service',
      email: 'c.contact@hokkaido.taxi',
      availableLanguage: ['English', 'Chinese', 'Korean', 'Thai', 'Vietnamese', 'French'],
    },
    sameAs: [],
  };

  // WebSite schema — enables sitelinks search box in Google
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Hokkaido Taxi | Kaiya Taxi',
    url: baseUrl,
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: props.locale,
  };

  // BreadcrumbList schema — shows breadcrumb trail in search results
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
