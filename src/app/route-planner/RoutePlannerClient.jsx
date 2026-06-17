"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Gauge, Mountain, Fuel, Bike, CalendarDays, Navigation, Route as RouteIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { GlassCard } from "@/components/GlassCard";
import { routePlans, startPoints, fuelVehicles } from "@/lib/tools";

function difficultyColor(d) {
  if (d === "Easy") return "bg-[oklch(0.62_0.17_150)]/15 text-[oklch(0.5_0.17_150)]";
  if (d === "Moderate") return "bg-[oklch(0.75_0.16_70)]/15 text-[oklch(0.55_0.16_70)]";
  return "bg-destructive/15 text-destructive";
}

export default function RoutePlannerClient() {
  const [start, setStart] = useState(startPoints[0]);
  const [dest, setDest] = useState(routePlans[0].slug);
  const [vehicle, setVehicle] = useState(fuelVehicles[1].name);

  const plan = routePlans.find((r) => r.slug === dest) || routePlans[0];
  const mileage = fuelVehicles.find((v) => v.name === vehicle)?.mileage ?? 35;
  const fuelLitres = +(plan.distanceKm / mileage).toFixed(2);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(start + ", Munsiyari")}&destination=${encodeURIComponent(plan.mapsQuery)}&travelmode=driving`;

  const stats = [
    { icon: RouteIcon, label: "Distance", value: `${plan.distanceKm} km` },
    { icon: Clock, label: "Travel Time", value: `${Math.floor(plan.timeMin / 60)}h ${plan.timeMin % 60}m` },
    { icon: Gauge, label: "Difficulty", value: plan.difficulty },
    { icon: Mountain, label: "Road Condition", value: plan.roadCondition },
    { icon: Fuel, label: "Fuel Estimate", value: `~${fuelLitres} L` },
    { icon: Bike, label: "Recommended", value: plan.recommendedVehicle },
    { icon: CalendarDays, label: "Best Time", value: plan.bestTime },
  ];

  return (
    <>
      <PageHeader eyebrow="Route Planner" title="Plan Your Munsiyari Ride" subtitle="Pick a start, destination and vehicle to instantly see distance, time, difficulty, fuel and the best time to go." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          <Reveal>
            <GlassCard className="space-y-5">
              <div>
                <label className="text-sm font-medium">Starting Point</label>
                <Select value={start} onValueChange={setStart}>
                  <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                  <SelectContent>{startPoints.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Destination</label>
                <Select value={dest} onValueChange={setDest}>
                  <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                  <SelectContent>{routePlans.map((r) => <SelectItem key={r.slug} value={r.slug}>{r.destination}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Vehicle Type</label>
                <Select value={vehicle} onValueChange={setVehicle}>
                  <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                  <SelectContent>{fuelVehicles.map((v) => <SelectItem key={v.name} value={v.name}>{v.name}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <Button asChild variant="default" className="w-full">
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer"><Navigation className="h-4 w-4" /> Open in Google Maps</a>
              </Button>
            </GlassCard>
          </Reveal>

          <motion.div key={dest} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <GlassCard className="h-full">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <h2 className="truncate text-2xl font-bold">{start} → {plan.destination}</h2>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyColor(plan.difficulty)}`}>{plan.difficulty}</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border/60 bg-background/40 p-4">
                    <s.icon className="h-5 w-5 text-primary" />
                    <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{s.label}</p>
                    <p className="mt-0.5 font-semibold">{s.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold">Highlights</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {plan.highlights.map((h) => <span key={h} className="rounded-full bg-secondary px-3 py-1 text-xs">{h}</span>)}
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-border/60">
                <iframe title={`Map to ${plan.destination}`} className="h-64 w-full" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(plan.mapsQuery)}&output=embed`} />
              </div>
            </GlassCard>
          </motion.div>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Ready to ride? <Link href="/rentals" className="font-semibold text-primary hover:underline">Browse rentals</Link> or check the <Link href="/weather" className="font-semibold text-primary hover:underline">live weather</Link>.
        </p>
      </section>
    </>
  );
}
