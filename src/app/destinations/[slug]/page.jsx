import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, ArrowLeft, MapPin, Route as RouteIcon, CalendarClock, Bike, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { JsonLd } from "@/components/JsonLd";
import { destinations } from "@/lib/data";
import { whatsappLink } from "@/lib/site";

export async function generateStaticParams() {
  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const d = destinations.find((dest) => dest.slug === slug);
  if (!d) return {};

  return {
    title: `${d.name} — Munsiyari Travel Guide | Munsiyari Ride Hub`,
    description: d.overview,
    openGraph: {
      title: `${d.name} — Munsiyari`,
      images: [d.image],
      url: `/destinations/${d.slug}`,
    },
    alternates: {
      canonical: `/destinations/${d.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const d = destinations.find((dest) => dest.slug === slug);
  if (!d) {
    notFound();
  }

  const facts = [
    { icon: MapPin, label: "Distance", value: d.distance },
    { icon: RouteIcon, label: "Route", value: d.route },
    { icon: CalendarClock, label: "Best time to visit", value: d.bestTime },
    { icon: Bike, label: "Recommended vehicle", value: d.recommendedVehicle },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: d.name,
          description: d.overview,
          image: d.image,
          address: { "@type": "PostalAddress", addressLocality: "Munsiyari", addressRegion: "Uttarakhand", addressCountry: "IN" },
        }}
      />
      <div className="relative h-[50vh] min-h-[360px]">
        <img src={d.image} alt={`${d.name} in Munsiyari`} width={1024} height={768} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-4 pb-10 text-white sm:px-6">
          <Link href="/destinations" className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All destinations
          </Link>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{d.name}</h1>
          <p className="mt-2 max-w-xl text-white/90">{d.short}</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-muted-foreground">{d.overview}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {facts.map((f) => (
            <Reveal key={f.label}>
              <div className="flex gap-3 rounded-xl border border-border bg-card p-5">
                <f.icon className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{f.label}</p>
                  <p className="mt-0.5 font-semibold">{f.value}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <h2 className="text-2xl font-bold">Travel Tips</h2>
          <ul className="mt-4 space-y-2">
            {d.tips.map((t) => (
              <li key={t} className="flex items-center gap-2 text-muted-foreground">
                <Lightbulb className="h-4 w-4 text-primary" /> {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-12 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold">Ride to {d.name}</h2>
          <p className="mt-2 text-primary-foreground/85">Rent the recommended {d.recommendedVehicle} and head out today.</p>
          <Button asChild variant="whatsapp" size="lg" className="mt-5">
            <a href={whatsappLink(`Hi! I'd like to rent a ${d.recommendedVehicle} to visit ${d.name} in Munsiyari.`)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Book on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
