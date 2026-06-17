import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { GlassCard } from "@/components/GlassCard";
import { JsonLd } from "@/components/JsonLd";
import { knowledgeGuides } from "@/lib/tools";

export const metadata = {
  title: "Munsiyari Travel Knowledge Hub | Complete Destination Guides",
  description: "In-depth Munsiyari travel guides — Panchachuli, Khaliya Top, Birthi Falls, Darkot, Kalamuni. Overview, history, attractions, tips, best time, routes and FAQs.",
  openGraph: {
    title: "Munsiyari Travel Knowledge Hub",
    url: "/travel-knowledge",
  },
  alternates: {
    canonical: "/travel-knowledge",
  },
};

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Munsiyari Travel Knowledge Hub",
    hasPart: knowledgeGuides.map((g) => ({
      "@type": "Article",
      headline: g.title,
      description: g.summary
    }))
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <PageHeader eyebrow="Knowledge Hub" title="Munsiyari Travel Guides" subtitle="Deep, SEO-rich guides to every corner of Munsiyari — written by locals who ride these roads daily." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {knowledgeGuides.map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.05}>
              <Link href={`/travel-knowledge/${g.slug}`}>
                <GlassCard className="flex h-full flex-col">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <h2 className="mt-3 text-lg font-bold">{g.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{g.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4" /></span>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
