import type { Metadata, Viewport } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing } from '@/libs/I18nRouting';
import { getBaseUrl } from '@/utils/Helpers';
import '@/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: 'Kaiya Taxi',
  authors: [{ name: 'Kaiya Taxi' }],
  keywords: [
    'Hokkaido Taxi',
    'Hokkaido Private Transfer',
    'New Chitose Airport Transfer',
    'Hokkaido Airport Transfer',
    'Private Taxi Hokkaido',
    'Hokkaido Transportation Service',
    'Chitose Taxi Service',
    'Hokkaido Chauffeur Service',
    'Hokkaido Car Service',
    'Hokkaido Private Driver',
    'Niseko Transfer',
    'Sapporo Airport Transfer',
    'Furano Transfer',
    'Otaru Transfer',
    'Rusutsu Transfer',
    'Kiroro Transfer',
    'Lake Toya Transfer',
    'Noboribetsu Transfer',
    'Hokkaido Ski Resort Transfer',
    'New Chitose Airport Taxi',
    'Hokkaido Sightseeing Taxi',
    'Hokkaido Day Tour Transportation',
    'Hokkaido Luxury Transfer',
    'Hokkaido English Speaking Driver',
    'Hokkaido Chinese Speaking Driver',
  ],
  description:
    'Kaiya Taxi provides professional airport transfers, private transportation, and sightseeing services across Hokkaido, connecting travelers to destinations safely, comfortably, and reliably.',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/520-520.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/520-520.png',
    },
  ],
  openGraph: {
    type: 'website',
    siteName: 'Kaiya Taxi',
    locale: 'en',
    description:
      'Kaiya Taxi provides professional airport transfers, private transportation, and sightseeing services across Hokkaido, connecting travelers to destinations safely, comfortably, and reliably.',
    images: [
      {
        url: '/assets/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kaiya — Premium Private Travel in Hokkaido',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/images/og-image.png'],
  },
  alternates: {
    canonical: baseUrl,
    languages: Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        locale === routing.defaultLocale ? baseUrl : `${baseUrl}/${locale}`,
      ]),
    ),
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider>{props.children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
