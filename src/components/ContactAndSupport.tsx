'use client';

import * as React from 'react';
import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

type ContactInfo = {
  label: string;
  value: string;
};

type ContactAndSupportProps = {
  title: string;
  description: string;
  phone: ContactInfo;
  email: ContactInfo;
  line: ContactInfo;
  footerText: string;
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitText: string;
  };
};

/**
 * Contact & Support section matching the provided design.
 * @param props - Component properties
 * @returns The rendered component
 */
export const ContactAndSupport = (props: ContactAndSupportProps): React.ReactNode => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formsubmit.co/ajax/c.contact@kaiya.taxi', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <ScrollReveal animation="up">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
              {props.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {props.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Info */}
          <ScrollReveal animation="left" delay={100}>
            <div className="flex flex-col justify-center">
              <div className="mb-10 space-y-4">
                {/* Phone Card */}
                <a
                  href={`tel:${props.phone.value.replaceAll(/\s+/gu, '')}`}
                  className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:-translate-y-0.5 hover:border-[#2B7FFF]/20 hover:bg-[#2B7FFF]/5 hover:shadow-sm"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-sm transition-transform group-hover:scale-110 group-hover:border-[#2B7FFF]/30 group-hover:bg-[#2B7FFF]/5">
                    <svg
                      className="size-5 text-slate-700 transition-colors group-hover:text-[#2B7FFF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.87l1.292-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{props.phone.label}</h3>
                    <p className="text-sm text-slate-600">{props.phone.value}</p>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${props.email.value}`}
                  className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:-translate-y-0.5 hover:border-[#2B7FFF]/20 hover:bg-[#2B7FFF]/5 hover:shadow-sm"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-sm transition-transform group-hover:scale-110 group-hover:border-[#2B7FFF]/30 group-hover:bg-[#2B7FFF]/5">
                    <svg
                      className="size-5 text-slate-700 transition-colors group-hover:text-[#2B7FFF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.909A2.25 2.25 0 0 1 2.25 8.993V6.75m19.5 0-7.5 4.615"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{props.email.label}</h3>
                    <p className="text-sm text-slate-600">{props.email.value}</p>
                  </div>
                </a>

                {/* LINE Card */}
                <a
                  href="https://line.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:-translate-y-0.5 hover:border-[#06C755]/20 hover:bg-[#06C755]/5 hover:shadow-sm"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-sm transition-transform group-hover:scale-110 group-hover:border-[#06C755]/30 group-hover:bg-[#06C755]/5">
                    {/* LINE Icon */}
                    <svg
                      className="size-5 text-slate-700 transition-colors group-hover:text-[#06C755]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.038 9.608.391.084.922.258 1.057.592.122.303.04.773.018 1.054l-.168 1.011c-.052.32-.241 1.181 1.037.643 1.278-.538 6.903-4.07 9.426-6.953 1.704-1.854 2.592-3.868 2.592-5.955z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{props.line.label}</h3>
                    <p className="text-sm text-slate-600">{props.line.value}</p>
                  </div>
                </a>
              </div>

              <div className="inline-flex items-center gap-2.5 self-start rounded-full bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-700 ring-1 ring-emerald-600/20 ring-inset">
                <span className="relative flex size-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
                </span>
                {props.footerText}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Form */}
          <ScrollReveal animation="right" delay={150}>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.05)] sm:p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* FormSubmit Configuration */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission from Kaiya"
                />
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    {props.form.nameLabel}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={props.form.namePlaceholder}
                      className="block w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-slate-100 transition-all ring-inset placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:ring-inset sm:text-sm sm:leading-6"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    {props.form.emailLabel}
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={props.form.emailPlaceholder}
                      className="block w-full rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-slate-100 transition-all ring-inset placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:ring-inset sm:text-sm sm:leading-6"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    {props.form.messageLabel}
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={props.form.messagePlaceholder}
                      className="block w-full resize-y rounded-xl border-0 bg-slate-50 px-4 py-3 text-slate-900 ring-1 ring-slate-100 transition-all ring-inset placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900 focus:ring-inset sm:text-sm sm:leading-6"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:scale-105 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto"
                  >
                    {(() => {
                      if (status === 'loading') {
                        return 'Sending...';
                      }
                      if (status === 'success') {
                        return 'Sent Successfully! ✓';
                      }
                      return props.form.submitText;
                    })()}
                  </button>
                  {status === 'error' && (
                    <p className="mt-3 text-sm font-medium text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
