"use client";

import Link from "next/link";
import { MessageCircle, IndianRupee, Check, ArrowLeft, Fuel, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/data";
import { whatsappLink, bookingMessage } from "@/lib/site";

export default function VehicleDetailClient({ vehicle: v }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: v.name,
          image: v.image,
          description: v.description,
          offers: { "@type": "Offer", price: v.pricePerDay, priceCurrency: "INR", availability: "https://schema.org/InStock" },
        }}
      />
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6">
        <Link href="/rentals" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> All vehicles
        </Link>
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <img src={v.image} alt={`${v.name} rental in Munsiyari`} width={1024} height={768}
              className="w-full rounded-2xl object-cover shadow-lg" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{v.categoryLabel}</span>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">{v.name}</h1>
            <p className="mt-2 text-muted-foreground">{v.tagline}</p>
            <div className="mt-5 flex items-end gap-2">
              <span className="flex items-center text-4xl font-bold text-primary"><IndianRupee className="h-7 w-7" />{v.pricePerDay}</span>
              <span className="mb-1 text-muted-foreground">/ day</span>
            </div>
            <p className="mt-4 text-muted-foreground">{v.description}</p>
            <Button asChild variant="whatsapp" size="xl" className="mt-6 w-full sm:w-auto">
              <a href={whatsappLink(bookingMessage(v.name))} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Book on WhatsApp
              </a>
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold">Specifications</h2>
            <dl className="mt-4 grid grid-cols-2 gap-3">
              {v.specs.map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-card p-4">
                  <dt className="text-xs text-muted-foreground">{s.label}</dt>
                  <dd className="text-lg font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-xl font-bold">Included Features</h2>
            <ul className="mt-4 space-y-2">
              {v.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" /> {f}</li>
              ))}
            </ul>
            <div className="mt-6 space-y-3 rounded-lg border border-border bg-card p-4 text-sm">
              <p className="flex items-center gap-2"><Fuel className="h-4 w-4 text-primary" /> {v.fuelPolicy}</p>
              <p className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Refundable deposit: ₹{v.deposit.toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-xl font-bold">Rental FAQs</h2>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.slice(0, 5).map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
