'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/libs/I18nNavigation';
import { AppConfig } from '@/utils/AppConfig';

/**
 * Root layout shell for all marketing pages.
 * Renders a sticky navbar, main content area, and footer.
 * @param props Layout slot props: leftNav, centerNav, rightNav, and page children
 * @returns React.ReactNode representing the full page shell
 */
export const BaseTemplate = (props: {
  leftNav?: React.ReactNode;
  centerNav?: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('Footer');

  const serviceAreas = [
    { key: 'area_sapporo' as const },
    { key: 'area_niseko' as const },
    { key: 'area_furano' as const },
    { key: 'area_airport' as const },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
      {/* ── Sticky Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white backdrop-blur-md">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / app name */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/" className="transition-transform hover:scale-105 active:scale-100">
              <Image
                src={AppConfig.logo}
                alt="Kiaya Taxi Logo"
                width={160}
                height={34}
                className="h-auto w-24 sm:w-32 lg:w-40"
              />
            </Link>

            {props.leftNav && (
              <nav aria-label="Left navigation">
                <ul className="hidden items-center gap-6 text-sm font-medium text-gray-600 sm:flex">
                  {props.leftNav}
                </ul>
              </nav>
            )}
          </div>

          {/* Center-side nav */}
          {props.centerNav && (
            <nav
              aria-label="Center navigation "
              className="absolute left-1/2 -translate-x-1/2 transform"
            >
              <ul className="hidden items-center gap-4 text-sm font-medium text-gray-600 sm:flex lg:gap-6">
                {props.centerNav}
              </ul>
            </nav>
          )}

          {/* Right-side nav (auth links + locale switcher) */}
          <nav aria-label="Right navigation">
            <ul className="flex items-center gap-2 text-sm font-medium text-gray-600 lg:gap-4">
              {props.rightNav}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Page content ── */}
      <main className="flex-1 overflow-x-hidden">{props.children}</main>

      {/* ── Floating WhatsApp Button ── */}
      <a
        id="whatsapp-float-btn"
        href="https://wa.me/818082938862"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={[
          'fixed bottom-12 right-10 z-50',
          'flex h-12 w-12 items-center justify-center',
          'rounded-full bg-[#25D366] shadow-lg',
          'transition-transform duration-200 hover:scale-110 active:scale-95',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]',
          // pulse ring
          'before:absolute before:inset-0 before:rounded-full before:bg-[#25D366] before:opacity-60',
          'before:animate-ping',
        ].join(' ')}
      >
        {/* WhatsApp SVG logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="relative z-10 h-8 w-8"
          fill="white"
        >
          <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.37.638 4.591 1.75 6.512L2.667 29.333l6.98-1.724A13.267 13.267 0 0 0 16.004 29.333c7.368 0 13.329-5.969 13.329-13.333S23.372 2.667 16.004 2.667Zm0 24.267a11.04 11.04 0 0 1-5.618-1.535l-.402-.24-4.143 1.024 1.055-3.991-.263-.41A10.948 10.948 0 0 1 5.001 16c0-6.075 4.928-11.004 11.003-11.004S27.007 9.925 27.007 16c0 6.076-4.928 11.004-11.003 11.004Zm6.03-8.24c-.33-.165-1.95-.962-2.253-1.072-.303-.11-.524-.165-.744.165-.22.33-.854 1.072-1.047 1.292-.193.22-.385.248-.715.083-.33-.165-1.395-.514-2.657-1.64-.982-.875-1.645-1.956-1.838-2.286-.193-.33-.021-.509.145-.673.15-.148.33-.385.495-.578.166-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.793-1.02-2.455-.268-.644-.541-.556-.744-.566l-.633-.011c-.22 0-.578.083-.88.413-.303.33-1.155 1.127-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.327 3.554 5.64 4.986.788.34 1.403.543 1.882.694.79.252 1.51.216 2.079.131.634-.094 1.95-.797 2.225-1.567.275-.77.275-1.43.193-1.567-.083-.138-.303-.22-.633-.385Z" />
        </svg>
      </a>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-800 bg-[#1A1C1E] text-slate-400">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
            {/* Column 1: Brand & About */}
            <div className="flex flex-col items-start gap-5 lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logo/hokkaidoWhite.png"
                  alt="Kiaya Taxi Logo"
                  width={150}
                  height={35}
                />
              </div>
              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{t('description')}</p>
              {/* Social Icons */}
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://line.me"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LINE"
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#06C755]/10 hover:shadow-lg hover:shadow-[#06C755]/20 active:scale-95"
                >
                  <div className="absolute inset-0 rounded-full border border-slate-700/50 transition-colors duration-300 group-hover:border-[#06C755]/30" />
                  <Image
                    src="/assets/icons/line.png"
                    alt="LINE"
                    width={40}
                    height={40}
                    className="h-8 w-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
                <a
                  href="https://wa.me/818082938862"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366]/10 hover:shadow-lg hover:shadow-[#25D366]/20 active:scale-95"
                >
                  <div className="absolute inset-0 rounded-full border border-slate-700/50 transition-colors duration-300 group-hover:border-[#25D366]/30" />
                  <Image
                    src="/assets/icons/whatsapp.png"
                    alt="WhatsApp"
                    width={40}
                    height={40}
                    className="h-8 w-8 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              </div>
            </div>

            {/* Column 2: Service Areas */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('service_areas_title')}
              </h3>
              <ul className="flex flex-col items-start gap-4 text-sm">
                {serviceAreas.map((area) => (
                  <li
                    key={area.key}
                    className="group flex cursor-default items-center gap-3 transition-transform duration-300 hover:translate-x-0.5"
                  >
                    <svg
                      className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span className="text-slate-300 transition-colors duration-300 group-hover:text-white">
                      {t(area.key)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{t('custom_services')}</p>
            </div>

            {/* Column 3: Contact */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('contact_title')}
              </h3>
              <ul className="flex flex-col items-start gap-6 text-sm text-slate-300">
                <li className="group flex items-start gap-3 transition-transform duration-300 hover:translate-x-0.5">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-colors duration-300 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.87l1.292-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">{t('phone_label')}</span>
                    <a
                      href="tel:+818082938862"
                      className="mt-0.5 transition-colors group-hover:text-white hover:text-[#2B7FFF]"
                    >
                      {t('contact_phone')}
                    </a>
                  </div>
                </li>
                <li className="group flex items-start gap-3 transition-transform duration-300 hover:translate-x-0.5">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-colors duration-300 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">{t('email_label')}</span>
                    <a
                      href={`mailto:${t('contact_email')}`}
                      className="mt-0.5 break-all transition-colors group-hover:text-white hover:text-[#2B7FFF]"
                    >
                      {t('contact_email')}
                    </a>
                  </div>
                </li>
                <li className="group flex items-start gap-3 transition-transform duration-300 hover:translate-x-0.5">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-colors duration-300 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">{t('hours_label')}</span>
                    <span className="mt-0.5 transition-colors duration-300 group-hover:text-white">
                      {t('hours_value')}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('legal_title')}
              </h3>
              <ul className="flex flex-col items-start gap-4 text-sm text-slate-300">
                <li>
                  <Link
                    href="/privacy"
                    className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-0.5 hover:text-white"
                  >
                    <svg
                      className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    {t('legal_privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-0.5 hover:text-white"
                  >
                    <svg
                      className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                    {t('legal_terms')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclosure"
                    className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-0.5 hover:text-white"
                  >
                    <svg
                      className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z"
                      />
                    </svg>
                    {t('legal_disclosure')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Ready to Book Card */}
            <div className="lg:col-span-1">
              <div className="group rounded-2xl border border-slate-800 bg-[#141618] p-6 shadow-xl transition-all duration-500 hover:border-slate-700 hover:shadow-2xl hover:shadow-[#2B7FFF]/10">
                <h3 className="mb-2 text-sm font-bold text-white transition-colors duration-300">
                  {t('booking_title')}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-400">{t('booking_desc')}</p>
                <Link
                  href="https://book.kaiya.taxi/"
                  target="_blank"
                  className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#2B7FFF] to-[#4A90E2] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-[#1A66FF] hover:to-[#357ABD] hover:shadow-lg hover:shadow-[#2B7FFF]/30 focus:ring-2 focus:ring-[#2B7FFF] focus:ring-offset-2 focus:ring-offset-[#141618] focus:outline-none active:scale-95 active:bg-[#1A4B99]"
                >
                  {t('booking_btn')}
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom border copyright bar */}
          <div className="mt-16 flex flex-col items-center justify-center border-t border-slate-800 pt-8 text-sm text-slate-400">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
