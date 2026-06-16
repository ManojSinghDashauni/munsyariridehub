import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/data";
import { whatsappLink, bookingMessage } from "@/lib/site";

export const metadata = {
  title: "FAQ | Bike & Scooty Rental in Munsiyari",
  description: "Frequently asked questions about renting bikes & scooty in Munsiyari — documents, deposit, fuel policy, helmets, roadside assistance and booking.",
  openGraph: {
    title: "Munsiyari Ride Hub FAQ",
    url: "/faq",
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHeader eyebrow="FAQ" title="Frequently Asked Questions"
        subtitle="Everything you need to know before renting in Munsiyari. Still have a question? Just message us." />
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <div className="mt-10 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="mt-2 text-primary-foreground/85">Our local team replies within minutes on WhatsApp.</p>
          <Button asChild variant="whatsapp" size="lg" className="mt-5">
            <a href={whatsappLink(bookingMessage())} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Ask on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
