'use client';

import { useLocale, useTranslations } from 'next-intl';
import type { ChangeEventHandler } from 'react';
import { usePathname, useRouter } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';

export const LocaleSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const newLocale = event.target.value;

    if (newLocale === locale) {
      return;
    }

    const { search } = window.location;
    router.push(`${pathname}${search}`, { locale: newLocale, scroll: false });
  };

  return (
    <div className="relative flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-xs font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-100/50 hover:text-slate-900">
      {/* Left Chevron Down */}
      <svg
        className="h-3 w-3 text-slate-500 transition-transform group-hover:translate-y-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>

      {/* Globe Icon */}
      <svg
        className="h-3.5 w-3.5 text-slate-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
        />
      </svg>

      {/* Locale text */}
      <span className="tracking-wide uppercase text-xs md:text-sm font-bold">{locale}</span>

      {/* Invisible native select overlay */}
      <select
        defaultValue={locale}
        onChange={handleChange}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        aria-label={t('change_language')}
      >
        {routing.locales.map((elt) => (
          <option key={elt} value={elt}>
            {elt.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};
