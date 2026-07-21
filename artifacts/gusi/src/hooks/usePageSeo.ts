import { useEffect } from "react";
import {
  applyMeta,
  restoreMeta,
  applyCanonical,
  restoreCanonical,
  applyJsonLd,
  restoreJsonLd,
  type MetaSnapshot,
  type CanonicalSnapshot,
  type JsonLdSnapshot,
} from "@/lib/seo";

export type PageFaq = { question: string; answer: string };

type PageSeoOptions = {
  title: string;
  description: string;
  /** Path portion of the canonical URL, e.g. "/story" */
  canonicalPath: string;
  faq?: PageFaq[];
};

export function usePageSeo({ title, description, canonicalPath, faq }: PageSeoOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const canonicalUrl = `https://gusi.nyc${canonicalPath}`;
    const pageUrl = `${window.location.origin}${canonicalPath}`;

    const snapshots: MetaSnapshot[] = [
      applyMeta('meta[name="description"]', "name", "description", description),
      applyMeta('meta[property="og:title"]', "property", "og:title", title),
      applyMeta(
        'meta[property="og:description"]',
        "property",
        "og:description",
        description,
      ),
      applyMeta('meta[property="og:type"]', "property", "og:type", "website"),
      applyMeta('meta[property="og:url"]', "property", "og:url", pageUrl),
      applyMeta(
        'meta[name="twitter:card"]',
        "name",
        "twitter:card",
        "summary_large_image",
      ),
      applyMeta('meta[name="twitter:title"]', "name", "twitter:title", title),
      applyMeta(
        'meta[name="twitter:description"]',
        "name",
        "twitter:description",
        description,
      ),
    ];

    const canonicalSnap: CanonicalSnapshot = applyCanonical(canonicalUrl);

    const jsonLds: JsonLdSnapshot[] = [];
    if (faq && faq.length > 0) {
      jsonLds.push(
        applyJsonLd("faq", {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }),
      );
    }

    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      document.title = previousTitle;
      snapshots.forEach(restoreMeta);
      restoreCanonical(canonicalSnap);
      jsonLds.forEach(restoreJsonLd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
