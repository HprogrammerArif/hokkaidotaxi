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
              href="https://book.kaiya.taxi/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:text-slate-900 hover:after:scale-x-100"
            >
              {t('bookings_link')}
            </Link>
          </li>

          <li>
            <Link
              href="/#about"
              className="relative inline-block py-1.5 text-sm font-semibold text-slate-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-slate-900 after:transition-transform after:duration-300 after:ease-out hover:text-slate-900 hover:after:scale-x-100"
            >
              {t('about_link')}
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
              href="https://book.kaiya.taxi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-slate-950 px-3 md:px-4 lg:px-5 py-2 text-xs md:text-sm font-bold text-white shadow-xs transition-all hover:bg-slate-800 active:scale-95"
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
