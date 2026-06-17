"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fuel, IndianRupee, Gauge, Lightbulb } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { GlassCard } from "@/components/GlassCard";
import { fuelVehicles } from "@/lib/tools";

export default function FuelCalculatorClient() {
  const [distance, setDistance] = useState(70);
  const [vehicle, setVehicle] = useState(fuelVehicles[1].name);
  const [mileage, setMileage] = useState(fuelVehicles[1].mileage);
  const [fuelPrice, setFuelPrice] = useState(105);

  const litres = distance > 0 && mileage > 0 ? distance / mileage : 0;
  const fuelCost = litres * fuelPrice;
  const total = Math.round(fuelCost);

  const recommendation =
    distance > 60
      ? "For longer routes like Birthi Falls, the Royal Enfield Himalayan offers better comfort and stability."
      : distance > 25
        ? "The Royal Enfield Classic 350 balances comfort and mileage for mid-range rides."
        : "For short local sightseeing, the Honda Activa scooty is the most fuel-efficient choice.";

  function onVehicle(v) {
    setVehicle(v);
    const m = fuelVehicles.find((x) => x.name === v)?.mileage;
    if (m) setMileage(m);
  }

  const outputs = [
    { icon: Fuel, label: "Fuel Consumption", value: `${litres.toFixed(2)} L` },
    { icon: IndianRupee, label: "Fuel Cost", value: `₹${total}` },
    { icon: Gauge, label: "Cost per km", value: `₹${distance > 0 ? (fuelCost / distance).toFixed(1) : 0}` },
  ];

  return (
    <>
      <PageHeader eyebrow="Fuel Calculator" title="Estimate Your Trip Fuel Cost" subtitle="Instant fuel and budget estimates for any Munsiyari ride." />
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <GlassCard className="space-y-5">
              <div>
                <label className="text-sm font-medium">Distance (km)</label>
                <Input type="number" min={1} value={distance} onChange={(e) => setDistance(+e.target.value)} className="mt-1.5" />
              </div>
              <div>
                <label className="text-sm font-medium">Vehicle Type</label>
                <Select value={vehicle} onValueChange={onVehicle}>
                  <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                  <SelectContent>{fuelVehicles.map((v) => <SelectItem key={v.name} value={v.name}>{v.name}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Mileage (km/l)</label>
                <Input type="number" min={1} value={mileage} onChange={(e) => setMileage(+e.target.value)} className="mt-1.5" />
              </div>
              <div>
                <label className="text-sm font-medium">Fuel Price (₹/l)</label>
                <Input type="number" min={1} value={fuelPrice} onChange={(e) => setFuelPrice(+e.target.value)} className="mt-1.5" />
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              {outputs.map((o) => (
                <motion.div key={o.label} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
                  <GlassCard className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><o.icon className="h-6 w-6" /></span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{o.label}</p>
                      <p className="text-2xl font-bold">{o.value}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
              <GlassCard className="bg-primary/5">
                <div className="flex gap-3">
                  <Lightbulb className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Tip: </span>{recommendation}</p>
                </div>
              </GlassCard>
            </div>
          </Reveal>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Compare vehicles on the <Link href="/rentals" className="font-semibold text-primary hover:underline">rentals page</Link> or plan a route in the <Link href="/route-planner" className="font-semibold text-primary hover:underline">route planner</Link>.
        </p>
      </section>
    </>
  );
}
