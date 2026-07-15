type FaqItem = {
  question: string;
  answer: string;
};

type FaqJsonLdProps = {
  items: readonly FaqItem[];
};

/**
 * Renders a FAQPage JSON-LD structured data script.
 * This enables FAQ rich results in Google Search — questions and answers
 * appear as expandable dropdowns directly in search results, increasing
 * click-through rates and occupying more search result real estate.
 * @param props - The component props containing FAQ items.
 * @returns A script element with FAQPage JSON-LD structured data.
 */
export const FaqJsonLd = (props: FaqJsonLdProps): React.ReactNode => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: props.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
};
