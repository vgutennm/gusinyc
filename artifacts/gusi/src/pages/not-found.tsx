import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gusi-charcoal text-gusi-ivory bg-texture-dark flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gusi-gold/80 mb-4">
            404 — Page Not Found
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gusi-gold leading-tight mb-6">
            This table isn&apos;t set.
          </h1>
          <p className="text-gusi-porcelain/80 text-base sm:text-lg font-light leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved. Join us back at the front of the house.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="border border-gusi-gold text-gusi-gold px-10 py-3.5 uppercase tracking-[0.25em] text-xs sm:text-sm hover:bg-gusi-gold hover:text-gusi-charcoal transition-colors duration-300"
            >
              Back to Home
            </Link>
            <Link
              href="/blog"
              className="text-gusi-porcelain/70 hover:text-gusi-gold underline underline-offset-4 decoration-gusi-gold/40 text-sm uppercase tracking-[0.2em] transition-colors duration-300"
            >
              Visit the Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
