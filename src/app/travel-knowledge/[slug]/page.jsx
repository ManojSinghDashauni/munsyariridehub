import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Clock, Camera, History, Lightbulb, Compass, CalendarDays, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion";
import { GlassCard } from "@/components/GlassCard";
import { JsonLd } from "@/components/JsonLd";
import { knowledgeGuides } from "@/lib/tools";
import { whatsappLink, bookingMessage } from "@/lib/site";

export async function generateStaticParams() {
  return knowledgeGuides.map((g) => ({
    slug: g.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = knowledgeGuides.find((guide) => guide.slug === slug);
  if (!g) return {};

  return {
    title: `${g.title} | Munsiyari Ride Hub`,
    description: g.summary,
    openGraph: {
      title: g.title,
      description: g.summary,
      url: `/travel-knowledge/${g.slug}`,
    },
    alternates: {
      canonical: `/travel-knowledge/${g.slug}`,
    },
  };
}

function Section({ icon: Icon, title, children }) {
  return (
    <Reveal>
      <GlassCard>
        <h2 className="flex items-center gap-2 text-xl font-bold"><Icon className="h-5 w-5 text-primary" /> {title}</h2>
        <div className="mt-3 text-muted-foreground">{children}</div>
      </GlassCard>
    </Reveal>
  );
}

export default async function Page({ params }) {
  const { slug } = await params;
  const g = knowledgeGuides.find((guide) => guide.slug === slug);
  if (!g) {
    notFound();
  }

  const topicName = g.title.replace(" Guide", "").replace("Complete ", "");

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: g.title, description: g.summary, about: g.attractions, mainEntityOfPage: `/travel-knowledge/${g.slug}` }} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <div className="bg-secondary/40 pt-28 pb-12 sm:pt-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Link href="/travel-knowledge" className="text-sm font-medium text-primary hover:underline">← All guides</Link>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{g.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{g.summary}</p>
        </div>
      </div>

      <article className="mx-auto max-w-4xl space-y-6 px-4 py-12 sm:px-6">
        <Section icon={Compass} title="Overview"><p>{g.overview}</p></Section>
        <Section icon={History} title="History"><p>{g.history}</p></Section>
        <Section icon={MapPin} title="Attractions">
          <ul className="grid gap-2 sm:grid-cols-2">{g.attractions.map((a) => <li key={a} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{a}</li>)}</ul>
        </Section>
        <Section icon={Lightbulb} title="Travel Tips">
          <ul className="space-y-2">{g.travelTips.map((t) => <li key={t} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{t}</li>)}</ul>
        </Section>
        <Section icon={CalendarDays} title="Best Time to Visit"><p>{g.bestTime}</p></Section>
        <Section icon={Camera} title="Photography Tips">
          <ul className="space-y-2">{g.photographyTips.map((t) => <li key={t} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{t}</li>)}</ul>
        </Section>
        <Section icon={Clock} title="Route Information"><p>{g.routeInfo}</p></Section>
        <Section icon={MapPin} title="Nearby Attractions">
          <div className="flex flex-wrap gap-2">{g.nearby.map((n) => <span key={n} className="rounded-full bg-secondary px-3 py-1 text-sm text-foreground">{n}</span>)}</div>
        </Section>

        <Reveal>
          <GlassCard>
            <h2 className="text-xl font-bold">FAQs</h2>
            <Accordion type="single" collapsible className="mt-2 w-full">
              {g.faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </Reveal>

        <div className="rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold">Ready to explore {topicName}?</h2>
          <p className="mt-2 text-primary-foreground/85">Grab a well-maintained ride and head out today.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button asChild variant="whatsapp" size="lg">
              <a href={whatsappLink(bookingMessage())} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> Book on WhatsApp</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/route-planner">Plan the route</Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
