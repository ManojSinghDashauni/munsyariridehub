"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { destinations, vehicles } from "@/lib/data";

const images = [
  ...destinations.map((d) => ({ src: d.image, alt: d.name, cat: "Destinations" })),
  ...vehicles.map((v) => ({ src: v.image, alt: v.name, cat: "Vehicles" })),
];
const cats = ["All", "Destinations", "Vehicles"];

export default function GalleryClient() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(null);
  const list = images.filter((i) => cat === "All" || i.cat === cat);

  return (
    <>
      <PageHeader eyebrow="Gallery" title="Munsiyari in Pictures"
        subtitle="A glimpse of the peaks, trails and rides waiting for you." />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-accent"
              }`}>{c}</button>
          ))}
        </div>
        <div className="mt-8 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {list.map((img, i) => (
            <Reveal key={i}>
              <motion.img whileHover={{ scale: 1.02 }} src={img.src} alt={img.alt} loading="lazy"
                onClick={() => setActive(img.src)}
                className="w-full cursor-pointer rounded-xl object-cover shadow-sm" />
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <button className="absolute right-5 top-5 text-white" aria-label="Close"><X className="h-7 w-7" /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={active} alt="" className="max-h-[85vh] max-w-full rounded-xl object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
