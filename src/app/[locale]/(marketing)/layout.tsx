import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { Link } from '@/libs/I18nNavigation';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <BaseTemplate
      centerNav={
        <>
          <li>
            <Link
              href="/"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:text-slate-900 hover:after:scale-x-100"
            >
              {t('home_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/#services"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:text-slate-900 hover:after:scale-x-100"
            >
              {t('services_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/#popular_routes"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:text-slate-900 hover:after:scale-x-100"
            >
              {t('popular_routes_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/#sightseeing_tours"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:text-slate-900 hover:after:scale-x-100"
            >
              {t('sightseeing_tours_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/#contact"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:text-slate-900 hover:after:scale-x-100"
            >
              {t('contact_link')}
            </Link>
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <LocaleSwitcher />
          </li>

          <li>
            <a
              href="https://book.hokkaido.taxi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-0.2 inline-block rounded-lg bg-gradient-to-r from-[#2B7FFF] to-[#4A90E2] px-3 py-2 text-xs font-bold text-white shadow-md transition-all duration-300 hover:from-[#1A66FF] hover:to-[#357ABD] hover:shadow-[0_0_20px_rgba(43,127,255,0.4)] active:scale-95 md:px-4 md:text-sm lg:px-5"
            >
              {t('book_now_link')}
            </a>
          </li>
        </>
      }
    >
      {props.children}
    </BaseTemplate>
  );
}
