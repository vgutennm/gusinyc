import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";
import { getBlogPost } from "@/data/posts";
import {
  applyMeta,
  restoreMeta,
  applyCanonical,
  restoreCanonical,
  applyJsonLd,
  restoreJsonLd,
  type MetaSnapshot,
  type JsonLdSnapshot,
} from "@/lib/seo";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = getBlogPost(slug);
  const url = `https://gusi.nyc/blog/${slug}`;
  const imageUrl = post ? `https://gusi.nyc${post.image}` : "";

  useEffect(() => {
    if (typeof window === "undefined" || !post) return;
    const previousTitle = document.title;
    document.title = post.metaTitle;
    const snaps: MetaSnapshot[] = [
      applyMeta('meta[name="description"]', "name", "description", post.metaDescription),
      applyMeta('meta[property="og:title"]', "property", "og:title", post.metaTitle),
      applyMeta('meta[property="og:description"]', "property", "og:description", post.metaDescription),
      applyMeta('meta[property="og:url"]', "property", "og:url", url),
      applyMeta('meta[property="og:type"]', "property", "og:type", "article"),
      applyMeta('meta[property="og:image"]', "property", "og:image", imageUrl),
      applyMeta('meta[property="og:image:alt"]', "property", "og:image:alt", post.imageAlt),
      applyMeta('meta[name="twitter:title"]', "name", "twitter:title", post.metaTitle),
      applyMeta('meta[name="twitter:description"]', "name", "twitter:description", post.metaDescription),
      applyMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl),
      applyMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt", post.imageAlt),
    ];
    const canonical = applyCanonical(url);

    const jsonLds: JsonLdSnapshot[] = [
      applyJsonLd("blogposting", {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: post.h1,
        description: post.metaDescription,
        image: imageUrl,
        author: {
          "@type": "Organization",
          name: "GUSI",
          url: "https://gusi.nyc/",
        },
        publisher: {
          "@type": "Organization",
          name: "GUSI",
          logo: {
            "@type": "ImageObject",
            url: "https://gusi.nyc/brand/gusi-goose-emblem.webp",
          },
        },
        datePublished: post.datePublished,
      }),
      applyJsonLd("faq", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }),
    ];

    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
      snaps.forEach(restoreMeta);
      restoreCanonical(canonical);
      jsonLds.forEach(restoreJsonLd);
    };
  }, [post, url, imageUrl]);

  if (!post) {
    return <NotFound />;
  }

  const Body = post.Body;

  return (
    <div className="min-h-screen bg-gusi-ivory">
      <Header />
      <main>
        <section className="bg-gusi-charcoal text-gusi-ivory bg-texture-dark pt-36 sm:pt-40 pb-14 sm:pb-16">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gusi-gold uppercase tracking-[0.25em] text-[11px] sm:text-xs mb-6 hover:text-gusi-ivory transition-colors focus:outline-none focus-visible:text-gusi-ivory"
              >
                <span aria-hidden="true">&larr;</span> The GUSI Journal
              </Link>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gusi-gold mb-6 leading-tight">
                {post.h1}
              </h1>
              <p className="text-gusi-porcelain/60 text-sm tracking-wide">
                {post.dateDisplay} &middot; {post.readTime}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-6 max-w-3xl">
          <figure className="-mt-8 sm:-mt-10 mb-12 sm:mb-16 relative z-10">
            <img
              src={post.image}
              alt={post.imageAlt}
              width={1280}
              height={720}
              loading="eager"
              className="w-full aspect-video object-cover border border-gusi-gold/20 shadow-xl"
            />
          </figure>
        </div>

        <section className="pb-20 md:pb-28 bg-gusi-ivory text-gusi-charcoal bg-texture-paper">
          <div className="container mx-auto px-6 max-w-3xl">
            <article className="blog-prose">
              <Body />
            </article>

            <div className="mt-14 sm:mt-16 border-t border-gusi-gold/25 pt-10 sm:pt-12 text-center">
              <h2 className="font-serif text-2xl sm:text-3xl text-gusi-burgundy mb-5 leading-tight">
                Taste it for yourself at GUSI
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
                <Link
                  href="/#reservations"
                  className="inline-flex items-center justify-center min-h-11 bg-gusi-burgundy text-gusi-ivory px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-charcoal transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-burgundy/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-ivory"
                >
                  Reserve a Table
                </Link>
                <Link
                  href="/#menu"
                  className="inline-flex items-center justify-center min-h-11 border border-gusi-burgundy/40 text-gusi-burgundy px-8 py-4 uppercase tracking-[0.2em] text-sm hover:bg-gusi-burgundy hover:text-gusi-ivory transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gusi-burgundy/60 focus-visible:ring-offset-2 focus-visible:ring-offset-gusi-ivory"
                >
                  Explore the Menu
                </Link>
              </div>
              <Link
                href="/blog"
                className="inline-block mt-8 text-gusi-gold uppercase tracking-[0.2em] text-[11px] hover:text-gusi-burgundy transition-colors focus:outline-none focus-visible:text-gusi-burgundy"
              >
                &larr; Back to all stories
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
