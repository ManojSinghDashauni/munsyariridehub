"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Snowflake, Mountain, Users, Footprints, ThermometerSun } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { GlassCard } from "@/components/GlassCard";
import { months, monthCategories } from "@/lib/tools";

function Score({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-1.5 text-muted-foreground"><Icon className="h-4 w-4" /> {label}</span>
      <span className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`h-1.5 w-3 rounded-full ${i < value ? "bg-primary" : "bg-border"}`} />
        ))}
      </span>
    </div>
  );
}

export default function BestTimeClient() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? months : months.filter((m) => m.tags.includes(filter));

  return (
    <>
      <PageHeader eyebrow="Best Time to Visit" title="Month-by-Month Munsiyari Planner" subtitle="Compare weather, crowds and activity scores for every month, then filter by what you love most." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {["All", ...monthCategories].map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${filter === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((m, i) => (
            <motion.div key={m.month} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
              <GlassCard className="h-full">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{m.month}</h2>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${m.crowd === "High" ? "bg-destructive/15 text-destructive" : m.crowd === "Medium" ? "bg-[oklch(0.75_0.16_70)]/15 text-[oklch(0.55_0.16_70)]" : "bg-[oklch(0.62_0.17_150)]/15 text-[oklch(0.5_0.17_150)]"}`}>{m.crowd} crowd</span>
                </div>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><ThermometerSun className="h-4 w-4" /> {m.tempRange} · {m.weather}</p>
                <div className="mt-4 space-y-2">
                  <Score icon={Camera} value={m.photography} label="Photography" />
                  <Score icon={Snowflake} value={m.snowfall} label="Snowfall" />
                  <Score icon={Mountain} value={m.adventure} label="Adventure" />
                  <Score icon={Footprints} value={m.trekking} label="Trekking" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{m.note}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {m.tags.map((t) => <span key={t} className="flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs"><Users className="h-3 w-3" />{t}</span>)}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Found your month? <Link href="/rentals" className="font-semibold text-primary hover:underline">Book a ride</Link> or check the <Link href="/weather" className="font-semibold text-primary hover:underline">weather</Link>.
        </p>
      </section>
    </>
  );
}
