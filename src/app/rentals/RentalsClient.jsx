"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { VehicleCard } from "@/components/VehicleCard";
import { JsonLd } from "@/components/JsonLd";
import { vehicles } from "@/lib/data";
import { whatsappLink, bookingMessage } from "@/lib/site";

const filters = [
  { key: "all", label: "All Vehicles" },
  { key: "scooter", label: "Scooter" },
  { key: "royal-enfield", label: "Royal Enfield" },
  { key: "adventure", label: "Adventure" },
  { key: "budget", label: "Budget" },
];

export default function RentalsClient() {
  const [filter, setFilter] = useState("all");
  const list = vehicles.filter((v) =>
    filter === "all" ? true : filter === "budget" ? v.budget : v.category === filter,
  );

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Vehicle Rental",
          name: "Munsiyari Ride Hub Bike & Scooty Rental",
          areaServed: "Munsiyari, Uttarakhand",
          provider: { "@type": "LocalBusiness", name: "Munsiyari Ride Hub" },
        }}
      />
      <PageHeader
        eyebrow="Rentals"
        title="Our Vehicles"
        subtitle="Well-maintained bikes & scooters for every kind of Munsiyari adventure. Fuel-efficient scooters, iconic Royal Enfields and rugged adventure machines."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((v, i) => (
            <Reveal key={v.slug} delay={i * 0.05}>
              <VehicleCard vehicle={v} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold">Not sure which vehicle to pick?</h2>
          <p className="mx-auto mt-2 max-w-xl text-primary-foreground/85">
            Tell us your plan and our local experts will recommend the perfect ride.
          </p>
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
