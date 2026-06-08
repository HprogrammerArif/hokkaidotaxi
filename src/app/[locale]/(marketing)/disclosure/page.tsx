import { ReadyToBook } from '@/components/ReadyToBook';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: 'CommercialDisclosure' });
  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function DisclosurePage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const t = await getTranslations('CommercialDisclosure');

  return (
    <div className="bg-white">
      {/* ── Hero Header ── */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/termsimage.jpg"
            alt="Commercial Disclosure Background"
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
            <div className="rounded-xl bg-slate-50 p-6 shadow-sm border border-slate-100 mt-4 text-slate-700">
              <p><span className="font-semibold text-slate-900">{t('section_1_company_label')}</span> {t('section_1_company')}</p>
              <p className="mt-2"><span className="font-semibold text-slate-900">{t('section_1_location_label')}</span> {t('section_1_location')}</p>
              <p className="mt-4 font-semibold text-slate-900">{t('section_1_contact_label')}</p>
              <p>{t('section_1_email')}<a href="mailto:c.contact@gmail.com" className="text-blue-600 hover:underline">c.contact@gmail.com</a></p>
              <p>{t('section_1_phone')}<a href="tel:+818082938862" className="text-blue-600 hover:underline">+81 80-8293-8862</a></p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_2_title')}</h2>
            <p>{t('section_2_desc')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong className="text-slate-800">{t('section_2_li_1_strong')}</strong>{t('section_2_li_1_text')}</li>
              <li><strong className="text-slate-800">{t('section_2_li_2_strong')}</strong>{t('section_2_li_2_text')}</li>
              <li><strong className="text-slate-800">{t('section_2_li_3_strong')}</strong>{t('section_2_li_3_text')}</li>
              <li><strong className="text-slate-800">{t('section_2_li_4_strong')}</strong>{t('section_2_li_4_text')}</li>
              <li><strong className="text-slate-800">{t('section_2_li_5_strong')}</strong>{t('section_2_li_5_text')}</li>
              <li><strong className="text-slate-800">{t('section_2_li_6_strong')}</strong>{t('section_2_li_6_text')}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_3_title')}</h2>
            <p>{t('section_3_desc')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>{t('section_3_li_1')}</li>
              <li>{t('section_3_li_2')}</li>
            </ul>
            <p className="pt-2">{t('section_3_footer')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_4_title')}</h2>
            <p>{t('section_4_desc_1')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>{t('section_4_li_1')}</li>
              <li>{t('section_4_li_2')}</li>
              <li>{t('section_4_li_3')}</li>
            </ul>
            <p className="pt-2">{t('section_4_desc_2')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>{t('section_4_li_4')}</li>
              <li>{t('section_4_li_5')}</li>
              <li>{t('section_4_li_6')}</li>
              <li>{t('section_4_li_7')}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_5_title')}</h2>
            <p>{t('section_5_desc')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>{t('section_5_li_1')}</li>
              <li>{t('section_5_li_2')}</li>
              <li>{t('section_5_li_3')}</li>
              <li>{t('section_5_li_4')}</li>
              <li>{t('section_5_li_5')}</li>
              <li>{t('section_5_li_6')}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_6_title')}</h2>
            <p>{t('section_6_desc')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>{t('section_6_li_1')}</li>
              <li>{t('section_6_li_2')}</li>
              <li>{t('section_6_li_3')}</li>
              <li>{t('section_6_li_4')}</li>
              <li>{t('section_6_li_5')}</li>
            </ul>
            <p className="pt-2">{t('section_6_footer')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_7_title')}</h2>
            <p>{t('section_7_desc')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong className="text-slate-800">{t('section_7_li_1_strong')}</strong>{t('section_7_li_1_text')}</li>
              <li><strong className="text-slate-800">{t('section_7_li_2_strong')}</strong>{t('section_7_li_2_text')}</li>
              <li><strong className="text-slate-800">{t('section_7_li_3_strong')}</strong>{t('section_7_li_3_text')}</li>
              <li><strong className="text-slate-800">{t('section_7_li_4_strong')}</strong>{t('section_7_li_4_text')}</li>
              <li><strong className="text-slate-800">{t('section_7_li_5_strong')}</strong>{t('section_7_li_5_text')}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_8_title')}</h2>
            <p>{t('section_8_desc')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>{t('section_8_li_1')}</li>
              <li>{t('section_8_li_2')}</li>
              <li>{t('section_8_li_3')}</li>
              <li>{t('section_8_li_4')}</li>
              <li>{t('section_8_li_5')}</li>
            </ul>
            <p className="pt-2">{t('section_8_footer')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_9_title')}</h2>
            <p>{t('section_9_desc')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong className="text-slate-800">{t('section_9_li_1_strong')}</strong>{t('section_9_li_1_text')}</li>
              <li><strong className="text-slate-800">{t('section_9_li_2_strong')}</strong>{t('section_9_li_2_text')}</li>
              <li><strong className="text-slate-800">{t('section_9_li_3_strong')}</strong>{t('section_9_li_3_text')}</li>
              <li><strong className="text-slate-800">{t('section_9_li_4_strong')}</strong>{t('section_9_li_4_text')}</li>
            </ul>
            <p className="pt-2">{t('section_9_footer')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_10_title')}</h2>
            <p>{t('section_10_desc')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>{t('section_10_li_1')}</li>
              <li>{t('section_10_li_2')}</li>
              <li>{t('section_10_li_3')}</li>
              <li>{t('section_10_li_4')}</li>
            </ul>
            <p className="pt-2">{t('section_10_footer')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_11_title')}</h2>
            <p>{t('section_11_desc')}</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>{t('section_11_li_1')}</li>
              <li>{t('section_11_li_2')}</li>
              <li>{t('section_11_li_3')}</li>
              <li>{t('section_11_li_4')}</li>
            </ul>
            <p className="pt-2">{t('section_11_footer')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_12_title')}</h2>
            <p>{t('section_12_desc')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{t('section_13_title')}</h2>
            <p>{t('section_13_desc')}</p>
            <div className="rounded-xl bg-slate-50 p-6 shadow-sm border border-slate-100 mt-4 text-slate-700">
              <p className="font-semibold text-slate-900">{t('section_13_company')}</p>
              <p>{t('section_13_address')}</p>
              <p className="mt-2">{t('section_13_email')}<a href="mailto:c.contact@gmail.com" className="text-blue-600 hover:underline">c.contact@gmail.com</a></p>
              <p>{t('section_13_phone')}<a href="tel:+818082938862" className="text-blue-600 hover:underline">+81 80-8293-8862</a></p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Help / Contact CTA ── */}
      <ReadyToBook
        title={t('cta_title')}
        description={t('cta_desc')}
        ctaLabel={t('cta_button')}
        ctaHref="/#contact"
      />
    </div>
  );
}
