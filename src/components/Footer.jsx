import Link from "next/link";
import { Mountain, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SITE, whatsappLink, bookingMessage } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-sidebar text-sidebar-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Mountain className="h-5 w-5" />
            </span>
            Munsiyari Ride Hub
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {SITE.tagline}. Premium bike & scooty rentals in Munsiyari for your Himalayan adventure.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link href="/rentals" className="hover:text-primary">Rentals</Link></li>
            <li><Link href="/destinations" className="hover:text-primary">Destinations</Link></li>
            <li><Link href="/travel-guide" className="hover:text-primary">Travel Guides</Link></li>
            <li><Link href="/route-planner" className="hover:text-primary">Route Planner</Link></li>
            <li><Link href="/weather" className="hover:text-primary">Weather Center</Link></li>
            <li><Link href="/best-time" className="hover:text-primary">Best Time to Visit</Link></li>
            <li><Link href="/photography" className="hover:text-primary">Photography Spots</Link></li>
            <li><Link href="/food-culture" className="hover:text-primary">Food & Culture</Link></li>
            <li><Link href="/hidden-gems" className="hover:text-primary">Hidden Gems</Link></li>
            <li><Link href="/emergency" className="hover:text-primary">Emergency Hub</Link></li>
            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-primary" /> {SITE.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-primary" /> <a href={`tel:${SITE.phone}`} className="hover:text-primary">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-primary" /> <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-primary" /> {SITE.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Ready to ride?</h3>
          <p className="mt-3 text-sm text-muted-foreground">Book your vehicle in minutes on WhatsApp.</p>
          <a
            href={whatsappLink(bookingMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-[oklch(0.62_0.17_150)] px-4 py-2.5 text-sm font-medium text-white shadow hover:brightness-105"
          >
            <MessageCircle className="h-4 w-4" /> Book on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-sidebar-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Munsiyari Ride Hub. All rights reserved. Made for the mountains.
      </div>
    </footer>
  );
}
