"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export function DestinationCard({ destination }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}>
      <Link
        href={`/destinations/${destination.slug}`}
        className="group relative block overflow-hidden rounded-xl shadow-sm hover:shadow-xl"
      >
        <img
          src={destination.image}
          alt={`${destination.name} in Munsiyari`}
          loading="lazy"
          width={1024}
          height={768}
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div className="flex items-center gap-1 text-xs text-white/80">
            <MapPin className="h-3.5 w-3.5" /> Munsiyari
          </div>
          <h3 className="mt-1 text-xl font-bold">{destination.name}</h3>
          <p className="mt-1 text-sm text-white/85">{destination.short}</p>
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-white">
            Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
