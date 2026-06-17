"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Clock, Gauge, MapPin, Aperture, CalendarDays, Navigation } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { GlassCard } from "@/components/GlassCard";
import { photoSpots, photoCategories } from "@/lib/tools";

export default function PhotographyClient() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? photoSpots : photoSpots.filter((s) => s.category === cat);

  return (
    <>
      <PageHeader eyebrow="Photography" title="Munsiyari Photography Spot Finder" subtitle="Where to shoot the golden Panchachuli sunrise, the Milky Way and sweeping Himalayan landscapes." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {["All", ...photoCategories].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${cat === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <motion.div key={s.name} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
              <GlassCard className="h-full">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">{s.category}</span>
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <h2 className="mt-3 text-lg font-bold">{s.name}</h2>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {s.bestTime}</li>
                  <li className="flex items-center gap-2"><Gauge className="h-4 w-4 text-primary" /> {s.difficulty}</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {s.coordinates}</li>
                  <li className="flex items-center gap-2"><Aperture className="h-4 w-4 text-primary" /> {s.lens}</li>
                  <li className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" /> {s.season}</li>
                </ul>
                <p className="mt-3 rounded-lg bg-secondary/60 p-3 text-sm"><span className="font-semibold">Tip: </span>{s.tip}</p>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(s.name + ", Munsiyari")}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"><Navigation className="h-4 w-4" /> Directions</a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Plan your shoot with the <Link href="/best-time" className="font-semibold text-primary hover:underline">best-time planner</Link> and <Link href="/weather" className="font-semibold text-primary hover:underline">weather center</Link>.
        </p>
      </section>
    </>
  );
}
