import { ReadyToBook } from '@/components/ReadyToBook';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'TermsAndConditions' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function TermsPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const t = await getTranslations('TermsAndConditions');

  return (
    <div className="bg-white">
      {/* ── Hero Header ── */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/termsimage.jpg"
            alt="Terms & Conditions Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10 w-full px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            {t('page_title')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/80 sm:text-xl">
            {t('page_subtitle')}
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-10 text-base leading-relaxed text-slate-600">
          
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_1_title')}</h2>
            <p>{t('section_1_desc_1')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_2_title')}</h2>
            <p>{t('section_2_desc_1')}</p>
            <p>{t('section_2_desc_2')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_3_title')}</h2>
            <p>{t('section_3_desc_1')}</p>
            <p>{t('section_3_desc_2')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_4_title')}</h2>
            <p>{t('section_4_desc_1')}</p>
            <p>{t('section_4_desc_2')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_5_title')}</h2>
            <p>{t('section_5_desc_1')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>{t('section_5_li_1')}</li>
              <li>{t('section_5_li_2')}</li>
              <li>{t('section_5_li_3')}</li>
              <li>{t('section_5_li_4')}</li>
              <li>{t('section_5_li_5')}</li>
            </ul>
            <p className="pt-2">{t('section_5_desc_2')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_6_title')}</h2>
            <p>{t('section_6_desc_1')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_7_title')}</h2>
            <p>{t('section_7_desc_1')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>{t('section_7_li_1')}</li>
              <li>{t('section_7_li_2')}</li>
              <li>{t('section_7_li_3')}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_8_title')}</h2>
            <p>{t('section_8_desc_1')}</p>
            <p>{t('section_8_desc_2')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_9_title')}</h2>
            <p>{t('section_9_desc_1')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_10_title')}</h2>
            <p>{t('section_10_desc_1')}</p>
            <div className="rounded-xl bg-slate-50 p-6 shadow-sm border border-slate-100 mt-4 text-slate-700">
              <p className="font-semibold text-slate-900">{t('section_10_company')}</p>
              <p>{t('section_10_address')}</p>
              <p className="mt-2">{t('section_10_email')}<a href="mailto:c.contact@gmail.com" className="text-blue-600 hover:underline">c.contact@gmail.com</a></p>
              <p>{t('section_10_phone')}<a href="tel:+818082938862" className="text-blue-600 hover:underline">+81 80-8293-8862</a></p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_11_title')}</h2>
            <p>{t('section_11_desc_1')}</p>
            <div className="mt-6 rounded-lg bg-slate-100 p-4 text-sm text-slate-600 font-medium">
              {t('section_11_last_updated')}
            </div>
            <p className="pt-4 text-sm text-slate-500">
              {t('section_11_desc_2')}
            </p>
          </div>

        </div>
      </section>

       <ReadyToBook
              title={t('cta_title')}
              description={t('cta_desc')}
              ctaLabel={t('cta_button')}
              ctaHref="/#contact"
            />

      
    </div>
  );
}
