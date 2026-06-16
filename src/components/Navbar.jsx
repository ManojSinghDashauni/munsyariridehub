"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, MessageCircle, Mountain, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme";
import { whatsappLink, bookingMessage } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/rentals", label: "Rentals" },
  { to: "/destinations", label: "Destinations" },
  { to: "/travel-guide", label: "Travel Guides" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
]; s

export const toolLinks = [
  { to: "/route-planner", label: "Route Planner" },
  { to: "/weather", label: "Weather Center" },
  { to: "/fuel-calculator", label: "Fuel Calculator" },
  { to: "/best-time", label: "Best Time to Visit" },
  { to: "/photography", label: "Photography Spots" },
  { to: "/food-culture", label: "Food & Culture" },
  { to: "/hidden-gems", label: "Hidden Gems" },
  { to: "/emergency", label: "Emergency Hub" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled ? "text-foreground/80" : "text-white/90 drop-shadow";

  const isActive = (to) => {
    if (to === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(to);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Mountain className="h-5 w-5" />
          </span>
          <span className={scrolled ? "text-foreground" : "text-white drop-shadow"}>
            Munsiyari Ride Hub
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive(l.to) ? "text-primary" : linkClass
                }`}
            >
              {l.label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none ${linkClass}`}>
              Travel Tools <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              {toolLinks.map((t) => (
                <DropdownMenuItem key={t.to} asChild>
                  <Link href={t.to}>{t.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle dark mode"
            onClick={toggle}
            className={scrolled ? "" : "text-white hover:text-white hover:bg-white/15"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild variant="whatsapp" size="sm" className="hidden sm:inline-flex">
            <a href={whatsappLink(bookingMessage())} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${scrolled ? "" : "text-white hover:text-white hover:bg-white/15"}`}
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto px-4 py-3">
              {[...links, ...toolLinks].map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2.5 text-sm font-medium ${isActive(l.to)
                      ? "text-primary bg-accent"
                      : "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                      }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Button asChild variant="whatsapp" className="mt-2">
                <a href={whatsappLink(bookingMessage())} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
