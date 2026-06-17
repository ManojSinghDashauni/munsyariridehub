"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Gauge, CalendarDays, Compass, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { GlassCard } from "@/components/GlassCard";
import { hiddenGems } from "@/lib/tools";

export default function HiddenGemsClient() {
  const categories = ["All", ...Array.from(new Set(hiddenGems.map((g) => g.category)))];
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? hiddenGems : hiddenGems.filter((g) => g.category === cat);

  return (
    <>
      <PageHeader eyebrow="Hidden Gems" title="Discover Munsiyari's Secrets" subtitle="Lesser-known viewpoints, offbeat villages and quiet trails — the exclusive local spots most travellers never find." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {list.map((g, i) => (
            <motion.div key={g.name} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <GlassCard className="h-full">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"><Sparkles className="h-3.5 w-3.5" /> {g.category}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Gauge className="h-3.5 w-3.5" /> {g.difficulty}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold">{g.name}</h2>
                <p className="mt-2 italic text-muted-foreground">"{g.story}"</p>
                <p className="mt-3 text-sm"><span className="font-semibold">Why visit: </span>{g.whyVisit}</p>
                <div className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-primary" /> {g.bestTime}</span>
                  <span className="flex items-center gap-1.5"><Compass className="h-4 w-4 text-primary" /> {g.difficulty}</span>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold">Travel tips</p>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    {g.tips.map((t) => <li key={t} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{t}</li>)}
                  </ul>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5" /> Nearby:</span>
                  {g.nearby.map((n) => <span key={n} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs">{n}</span>)}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Reach them your way — <Link href="/rentals" className="font-semibold text-primary hover:underline">rent a ride</Link> and use the <Link href="/route-planner" className="font-semibold text-primary hover:underline">route planner</Link>.
        </p>
      </section>
    </>
  );
}
