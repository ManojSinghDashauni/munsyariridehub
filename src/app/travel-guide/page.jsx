import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Munsiyari Travel Guide & Blog | Tips, Itineraries & Bike Guides",
  description: "Munsiyari travel guide: best places to visit, 2-day itinerary, bike rental guide, Khaliya Top & Panchachuli guides. Expert local tips for your Himalayan road trip.",
  openGraph: {
    title: "Munsiyari Travel Guide & Blog",
    url: "/travel-guide",
  },
  alternates: {
    canonical: "/travel-guide",
  },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Travel Guide"
        title="Munsiyari Travel Guide"
        subtitle="Local insights, itineraries and bike guides to help you plan the perfect Munsiyari adventure."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link href={`/travel-guide/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-xl">
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={1024} height={768}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">{p.category}</span>
                  <h2 className="mt-2 text-lg font-bold">{p.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground"><Clock className="h-4 w-4" /> {p.readTime}</span>
                    <span className="inline-flex items-center gap-1 font-medium text-primary">Read <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
