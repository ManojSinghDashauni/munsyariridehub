"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Thermometer, Wind, Droplets, Sunrise, Sunset, CloudRain, Sun, CloudDrizzle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { GlassCard } from "@/components/GlassCard";
import { getSeasonalWeather, weatherDestinationTips } from "@/lib/tools";

export default function WeatherClient() {
  const w = getSeasonalWeather();
  const metrics = [
    { icon: Thermometer, label: "Temperature", value: `${w.tempC}°C` },
    { icon: w.rainProb > 50 ? CloudRain : Sun, label: "Condition", value: w.condition },
    { icon: Wind, label: "Wind Speed", value: `${w.windKmh} km/h` },
    { icon: Droplets, label: "Humidity", value: `${w.humidity}%` },
    { icon: Sunrise, label: "Sunrise", value: w.sunrise },
    { icon: Sunset, label: "Sunset", value: w.sunset },
    { icon: CloudDrizzle, label: "Rain Probability", value: `${w.rainProb}%` },
    { icon: Sun, label: "UV Index", value: `${w.uvIndex}` },
  ];

  return (
    <>
      <PageHeader eyebrow="Weather Intelligence" title="Munsiyari Weather Center" subtitle="Current mountain conditions with smart travel recommendations so you ride at the perfect time." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className={`relative overflow-hidden rounded-3xl border border-border/60 p-8 ${w.positive ? "bg-gradient-to-br from-primary/15 to-accent/20" : "bg-gradient-to-br from-muted to-secondary"}`}>
            <motion.div animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 6, repeat: Infinity }} className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Munsiyari, Uttarakhand</p>
            <div className="mt-2 flex items-end gap-4">
              <span className="text-6xl font-extrabold">{w.tempC}°C</span>
              <span className="pb-2 text-lg text-muted-foreground">{w.condition}</span>
            </div>
            <div className={`mt-5 rounded-xl border p-4 text-sm font-medium ${w.positive ? "border-primary/30 bg-background/50" : "border-destructive/30 bg-destructive/10 text-destructive"}`}>
              {w.advisory}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.04}>
              <GlassCard>
                <m.icon className="h-6 w-6 text-primary" />
                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">{m.label}</p>
                <p className="mt-1 text-2xl font-bold">{m.value}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <h2 className="mt-14 text-2xl font-bold">Weather-based destination picks</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {weatherDestinationTips.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.06}>
              <GlassCard>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.tip}</p>
                <Link href="/route-planner" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">Plan this route →</Link>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Conditions are seasonal estimates for trip planning. Always confirm live forecasts before high-altitude treks.</p>
      </section>
    </>
  );
}
