"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {IndianRupee, ArrowRight } from "lucide-react";
import { whatsappLink, bookingMessage } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { FaWhatsapp } from "react-icons/fa";

export function VehicleCard({ vehicle }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-xl"
    >
      <Link href={`/rentals/${vehicle.slug}`} className="relative block overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.name} for rent in Munsiyari`}
          loading="lazy"
          width={1024}
          height={768}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">{vehicle.categoryLabel}</Badge>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold">{vehicle.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{vehicle.tagline}</p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {vehicle.specs.slice(0, 3).map((s) => (
            <li key={s.label}>
              <span className="font-medium text-foreground">{s.value}</span> {s.label}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="flex items-center text-2xl font-bold text-primary">
              <IndianRupee className="h-5 w-5" />
              {vehicle.pricePerDay}
            </span>
            <span className="text-xs text-muted-foreground">per day</span>
          </div>
          <Link
            href={`/rentals/${vehicle.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Button asChild variant="whatsapp" className="mt-4">
          <a
            href={whatsappLink(bookingMessage(vehicle.name))}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="h-4 w-4" /> Book on WhatsApp
          </a>
        </Button>
      </div>
    </motion.article>
  );
}
