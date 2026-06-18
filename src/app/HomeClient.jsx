"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import { FaWhatsapp } from "react-icons/fa";

import {
  Star, MapPin, ShieldCheck, IndianRupee, Wrench, Clock,
  Zap, Award, ArrowRight, Quote, ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-mountain.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "@/components/motion";
import { Counter } from "@/components/Counter";
import { VehicleCard } from "@/components/VehicleCard";
import { DestinationCard } from "@/components/DestinationCard";
import { JsonLd } from "@/components/JsonLd";
import { vehicles, destinations, testimonials, faqs } from "@/lib/data";
import { whatsappLink, bookingMessage } from "@/lib/site";

const reasons = [
  { icon: MapPin, title: "Local Experts", text: "Born-and-raised guides who know every viewpoint, route and hidden gem." },
  { icon: IndianRupee, title: "Best Rates", text: "Honest, transparent pricing — the best value bike rental in Munsiyari." },
  { icon: Wrench, title: "Well-Maintained Vehicles", text: "Serviced, road-tested machines ready for Himalayan terrain." },
  { icon: ShieldCheck, title: "Roadside Assistance", text: "Ride worry-free with regional roadside support included." },
  { icon: Clock, title: "Flexible Duration", text: "Hourly, daily or multi-day rentals to suit your itinerary." },
  { icon: Zap, title: "Quick WhatsApp Booking", text: "Confirm your vehicle in minutes — no paperwork hassle." },
];

export default function HomeClient() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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

      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] overflow-hidden">
        <motion.img
          src={heroImg.src || heroImg}
          alt="Royal Enfield rider on a Munsiyari mountain road with Panchachuli peaks at sunrise"
          width={1920}
          height={1080}
          style={{ y }}
          className="absolute inset-0 h-[120%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <motion.div
          style={{ opacity }}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 sm:px-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
          >
            ⛰️ Ride Beyond Roads — Munsiyari, Uttarakhand
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Bike & Scooty Rental in Munsiyari
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-xl text-lg text-white/90"
          >
            Self-drive Royal Enfields, Himalayans & scooters to explore Panchachuli, Khaliya Top & Birthi Falls — at the best rates in town.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink(bookingMessage())} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-5 w-5" /> Book on WhatsApp
              </a>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-white/60 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white">
              <Link href="/rentals">View Vehicles</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-3"
          >
            {[
              { n: 4.9, s: "★", l: "Avg. rating" },
              { n: 1200, s: "+", l: "Happy riders" },
              { n: 6, s: "+", l: "Top destinations" },
            ].map((stat) => (
              <div key={stat.l} className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
                <div className="text-2xl font-bold">
                  {stat.n === 4.9 ? "4.9" : <Counter to={stat.n} suffix={stat.s} />}
                  {stat.n === 4.9 ? stat.s : ""}
                </div>
                <div className="text-xs text-white/80">{stat.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80">
          <ChevronDown className="h-7 w-7 animate-bounce" />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Why Choose Us</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Munsiyari's most trusted ride partner</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="h-full rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <r.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED VEHICLES */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Featured Vehicles</p>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Pick your perfect ride</h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/rentals">All vehicles <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v, i) => (
              <Reveal key={v.slug+v.color} delay={i * 0.05}>
                <VehicleCard vehicle={v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Popular Destinations</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Where will Munsiyari take you?</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(0, 6).map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.05}>
              <DestinationCard destination={d} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <CostCalculator />

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Rider Reviews</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Loved by riders across India</h2>
          <div className="mt-3 flex items-center justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            <span className="ml-2 text-sm text-muted-foreground">4.9 / 5 from 1,200+ riders</span>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
                <Quote className="h-7 w-7 text-accent" />
                <div className="mt-2 flex text-primary">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">"{t.text}"</p>
                <div className="mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Your questions, answered</h2>
          </Reveal>
          <Reveal className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to ride beyond roads?</h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
              Book your bike or scooty in minutes. Limited vehicles during peak season — reserve yours today.
            </p>
            <Button asChild variant="whatsapp" size="xl" className="mt-6">
              <a href={whatsappLink(bookingMessage())} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-5 w-5" /> Book on WhatsApp Now
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <TravelTools />
    </>
  );
}

const tools = [
  { to: "/route-planner", title: "Route Planner", desc: "Distance, time, difficulty & fuel for every ride." },
  { to: "/weather", title: "Weather Center", desc: "Live mountain conditions & smart travel advice." },
  { to: "/fuel-calculator", title: "Fuel Calculator", desc: "Estimate fuel cost & total trip budget instantly." },
  { to: "/best-time", title: "Best Time to Visit", desc: "Month-by-month weather, crowds & activity scores." },
  { to: "/photography", title: "Photography Spots", desc: "Sunrise, Milky Way & drone locations with tips." },
  { to: "/food-culture", title: "Food & Culture", desc: "Kumaoni cuisine, traditions & local shopping." },
  { to: "/hidden-gems", title: "Hidden Gems", desc: "Secret viewpoints & offbeat places locals love." },
  { to: "/emergency", title: "Emergency Hub", desc: "Hospitals, police, fuel & help — click to call." },
];

function TravelTools() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Plan Smarter</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Free Munsiyari Travel Tools</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Everything you need to plan the perfect Himalayan ride — built by locals, free to use.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t, i) => (
            <Reveal key={t.to} delay={i * 0.05}>
              <Link
                href={t.to}
                className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-lg font-bold">{t.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{t.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Open tool <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CostCalculator() {
  const [slug, setSlug] = useState(vehicles[0].slug);
  const [days, setDays] = useState(2);
  const vehicle = vehicles.find((v) => v.slug === slug);
  const discount = days >= 5 ? 0.1 : days >= 3 ? 0.05 : 0;
  const base = vehicle.pricePerDay * days;
  const total = Math.round(base * (1 - discount));

  return (
    <section className="bg-accent/40 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Plan Your Budget</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Rental Cost Calculator</h2>
          <p className="mt-3 text-muted-foreground">
            Estimate your rental instantly. Longer trips unlock automatic discounts — then confirm on WhatsApp.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" /> 5% off for 3+ days</li>
            <li className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" /> 10% off for 5+ days</li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
            <label className="text-sm font-medium">Choose your vehicle</label>
            <Select value={slug} onValueChange={setSlug}>
              <SelectTrigger className="mt-1.5 w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {vehicles.map((v) => (
                  <SelectItem key={v.slug+v.color} value={v.slug}>
                    {v.name} — ₹{v.pricePerDay}/day
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <label className="mt-4 block text-sm font-medium">Number of days: {days}</label>
            <input
              type="range"
              min={1}
              max={14}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="mt-2 w-full accent-primary"
            />

            <div className="mt-6 rounded-xl bg-secondary/60 p-5">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{vehicle.name} × {days} days</span>
                <span>₹{base.toLocaleString("en-IN")}</span>
              </div>
              {discount > 0 && (
                <div className="mt-1 flex items-center justify-between text-sm text-primary">
                  <span>Discount ({discount * 100}%)</span>
                  <span>−₹{(base - total).toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                <span className="font-semibold">Estimated total</span>
                <span className="flex items-center text-2xl font-bold text-primary">
                  <IndianRupee className="h-5 w-5" />{total.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">*Excludes fuel & refundable deposit (₹{vehicle.deposit.toLocaleString("en-IN")}).</p>
            </div>

            <Button asChild variant="whatsapp" className="mt-4 w-full">
              <a
                href={whatsappLink(
                  `Hi Munsiyari Ride Hub! I'd like to book the ${vehicle.name} for ${days} day(s) (est. ₹${total}). Please confirm availability.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-4 w-4" /> Book this on WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
