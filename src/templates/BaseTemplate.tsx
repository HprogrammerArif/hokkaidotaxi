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
              <ul className="hidden items-center gap-4 lg:gap-6 text-sm font-medium text-gray-600 sm:flex">
                {props.centerNav}
              </ul>
            </nav>
          )}

          {/* Right-side nav (auth links + locale switcher) */}
          <nav aria-label="Right navigation">
            <ul className="flex items-center gap-2 lg:gap-4 text-sm font-medium text-gray-600">
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
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-400">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
            {/* Column 1: Brand & About */}
            <div className="flex flex-col items-start gap-5">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/logo/kaiyaLogoWhite.svg"
                  alt="Kiaya Taxi Logo"
                  width={150}
                  height={35}
                 
                />
                
              </div>
              {/* Description */}
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">{t('about_text')}</p>
              {/* Social Icons */}
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/kaiyataxi/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image
                    src="/assets/icons/instagram.svg"
                    alt="Instagram"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full shadow-sm"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/kaiyainc/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image
                    src="/assets/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full shadow-sm"
                  />
                </a>

                <a
                  href="https://www.facebook.com/BookKaiyaTaxi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="transition-transform hover:scale-105 active:scale-95"
                >
                  <Image
                    src="/assets/icons/facebook.svg"
                    alt="Facebook"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full shadow-sm"
                  />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('heading_quick_links')}
              </h3>
              <ul className="flex flex-col items-start gap-3 text-sm">
                <li>
                  <Link
                    href="/#services"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_services')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_about')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('heading_legal')}
              </h3>
              <ul className="flex flex-col items-start gap-3 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_terms')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclosure"
                    className="group flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="text-slate-600 transition-colors group-hover:text-white">
                      &gt;
                    </span>
                    {t('link_disclosure')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {t('heading_contact')}
              </h3>
              <ul className="flex flex-col items-start gap-3.5 text-sm text-slate-400">
                <li className="flex items-center gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a
                    href={`tel:${t('contact_phone').replaceAll(/\s+/gu, '')}`}
                    className="transition-colors hover:text-white"
                  >
                    {t('contact_phone')}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a
                    href={`mailto:${t('contact_email')}`}
                    className="break-all transition-colors hover:text-white"
                  >
                    {t('contact_email')}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{t('contact_address')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom border copyright bar */}
          <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col  items-center justify-center gap-3 text-xs text-slate-500">
            <span>
              © {new Date().getFullYear()}{' '}
              <span className="font-semibold text-slate-400">{AppConfig.name}</span>. All rights
              reserved.
            </span>

           
          </div>
        </div>
      </footer>
    </div>
  );
};
