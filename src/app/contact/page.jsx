import { MessageCircle, Phone, MapPin, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { SITE, whatsappLink, bookingMessage } from "@/lib/site";

export const metadata = {
  title: "Contact Munsiyari Ride Hub | Book Bikes & Scooty",
  description: "Contact Munsiyari Ride Hub for bike & scooty rentals. WhatsApp, call or visit us in Munsiyari, Uttarakhand. Open 7 AM – 8 PM daily.",
  openGraph: {
    title: "Contact Munsiyari Ride Hub",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's Get You Riding"
        subtitle="Reach us instantly on WhatsApp, give us a call, or drop by our shop in Munsiyari." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: SITE.phone, href: whatsappLink(bookingMessage()) },
                { icon: Phone, label: "Call", value: SITE.phone, href: `tel:${SITE.phone}` },
                { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: MapPin, label: "Address", value: SITE.address, href: SITE.mapsDirections },
                { icon: Clock, label: "Business Hours", value: SITE.hours },
              ].map((c) => (
                <a key={c.label} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className={`flex items-start gap-4 rounded-xl border border-border bg-card p-5 ${c.href ? "hover:border-primary hover:shadow-md" : ""}`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground"><c.icon className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{c.label}</p>
                    <p className="mt-0.5 font-semibold">{c.value}</p>
                  </div>
                </a>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappLink(bookingMessage())} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
                </Button>
                <Button asChild variant="outline" size="lg"><a href={`tel:${SITE.phone}`}><Phone className="h-5 w-5" /> Call</a></Button>
                <Button asChild variant="outline" size="lg"><a href={SITE.mapsDirections} target="_blank" rel="noopener noreferrer"><Navigation className="h-5 w-5" /> Directions</a></Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe title="Munsiyari Ride Hub location" src={SITE.mapsEmbed} className="h-full w-full" style={{ minHeight: 420, border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
