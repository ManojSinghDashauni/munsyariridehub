import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { DestinationCard } from "@/components/DestinationCard";
import { destinations } from "@/lib/data";

export const metadata = {
  title: "Top Places to Visit in Munsiyari | Destinations Guide",
  description: "Discover the best places to visit in Munsiyari — Panchachuli View Point, Khaliya Top, Birthi Falls, Darkot Village & Kalamuni Temple. Routes, best time & travel tips.",
  openGraph: {
    title: "Top Places to Visit in Munsiyari",
    url: "/destinations",
  },
  alternates: {
    canonical: "/destinations",
  },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Destinations"
        title="Explore Munsiyari"
        subtitle="Snow peaks, alpine meadows, thundering waterfalls and heritage villages — all within an easy ride. Tap any destination for routes, best time to visit and travel tips."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.05}>
              <DestinationCard destination={d} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
