import Link from "next/link";
import { UtensilsCrossed, Drama, ShoppingBag, Lightbulb } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { GlassCard } from "@/components/GlassCard";
import { JsonLd } from "@/components/JsonLd";
import { localFoods, cultureItems, shoppingItems } from "@/lib/tools";

export const metadata = {
  title: "Munsiyari Food & Culture Guide | Kumaoni Cuisine & Crafts",
  description: "Explore Munsiyari's local food, Kumaoni cuisine, festivals, folk culture and handwoven woollens. A local guide to dishes, traditions and the best souvenirs to bring home.",
  openGraph: {
    title: "Munsiyari Local Food & Culture Guide",
    url: "/food-culture",
  },
  alternates: {
    canonical: "/food-culture",
  },
};

function Group({ icon: Icon, title, intro, items }) {
  return (
    <div>
      <Reveal>
        <h2 className="flex items-center gap-2 text-2xl font-bold"><Icon className="h-6 w-6 text-primary" /> {title}</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">{intro}</p>
      </Reveal>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.name} delay={i * 0.05}>
            <GlassCard className="h-full">
              <h3 className="text-lg font-semibold">{it.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.description}</p>
              <p className="mt-3 flex gap-2 rounded-lg bg-secondary/60 p-3 text-sm"><Lightbulb className="h-4 w-4 shrink-0 text-primary" /> {it.tip}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Munsiyari Food & Culture Guide",
    about: ["Kumaoni cuisine", "Bhotiya culture", "Handicrafts"],
    description: "A local guide to Munsiyari food, culture and shopping."
  };

  return (
    <>
      <JsonLd data={schemaData} />
      <PageHeader eyebrow="Food & Culture" title="Local Food & Culture Guide" subtitle="Taste Kumaoni cuisine, meet the Bhotiya heritage and shop authentic mountain crafts — guided by locals who live it." />
      <section className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6">
        <Group icon={UtensilsCrossed} title="Local Food & Cuisine" intro="Hearty, high-altitude Kumaoni dishes, regional snacks and chai with a view." items={localFoods} />
        <Group icon={Drama} title="Culture & Traditions" intro="Festivals, folk music and the pastoral rhythm of Himalayan village life." items={cultureItems} />
        <Group icon={ShoppingBag} title="Shopping & Souvenirs" intro="Handwoven woollens, wild honey and famous Munsiyari rajma to carry home." items={shoppingItems} />
        <p className="text-center text-sm text-muted-foreground">
          Pair culture with the road — explore <Link href="/destinations" className="font-semibold text-primary hover:underline">destinations</Link> or <Link href="/hidden-gems" className="font-semibold text-primary hover:underline">hidden gems</Link>.
        </p>
      </section>
    </>
  );
}
