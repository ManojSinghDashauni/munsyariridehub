"use client";

import { useState } from "react";
import { Phone, Navigation, Hospital, Shield, Info, Wrench, Fuel, Landmark, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { GlassCard } from "@/components/GlassCard";
import { emergencyContacts } from "@/lib/tools";

const typeIcon = {
  Hospital,
  Police: Shield,
  "Tourist Help": Info,
  "Vehicle Repair": Wrench,
  "Fuel Station": Fuel,
  ATM: Landmark,
};

const filters = ["All", "Hospital", "Police", "Tourist Help", "Vehicle Repair", "Fuel Station", "ATM"];

export default function EmergencyClient() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? emergencyContacts : emergencyContacts.filter((c) => c.type === filter);

  return (
    <>
      <PageHeader eyebrow="Stay Safe" title="Emergency Assistance Hub" subtitle="Key contacts and directions for medical help, police, repairs, fuel and cash — all in one trusted place." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className="flex items-start gap-3 rounded-2xl border border-destructive/30 bg-destructive/10 p-5">
            <ShieldAlert className="h-6 w-6 shrink-0 text-destructive" />
            <p className="text-sm"><span className="font-semibold">In any emergency, dial 112</span> — India's all-in-one emergency number for police, fire and ambulance. For medical emergencies call 108.</p>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}>{f}</button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => {
            const Icon = typeIcon[c.type] || Phone;
            return (
              <div key={c.name} className="h-full">
                <GlassCard className="flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                    <div className="min-w-0">
                      <h2 className="truncate font-semibold">{c.name}</h2>
                      <p className="text-xs text-muted-foreground">{c.type}</p>
                    </div>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.detail}</p>
                  <div className="mt-4 flex gap-2">
                    {c.phone && (
                      <Button asChild size="sm" className="flex-1">
                        <a href={`tel:${c.phone}`}><Phone className="h-4 w-4" /> {c.phone}</a>
                      </Button>
                    )}
                    <Button asChild size="sm" variant="outline" className={c.phone ? "" : "flex-1"}>
                      <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(c.mapsQuery)}`} target="_blank" rel="noopener noreferrer"><Navigation className="h-4 w-4" /> Directions</a>
                    </Button>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
