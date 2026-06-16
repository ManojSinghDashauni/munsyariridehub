"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Navigation, X } from "lucide-react";
import { SITE, whatsappLink, bookingMessage } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        href={SITE.mapsDirections}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get directions"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-lg ring-1 ring-border hover:-translate-y-0.5 transition-transform"
      >
        <Navigation className="h-5 w-5" />
      </motion.a>
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        href={`tel:${SITE.phone}`}
        aria-label="Call us"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-foreground shadow-lg ring-1 ring-border hover:-translate-y-0.5 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </motion.a>
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        href={whatsappLink(bookingMessage())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        className="flex items-center gap-2 rounded-full bg-[oklch(0.62_0.17_150)] px-4 py-3 font-medium text-white shadow-xl hover:-translate-y-0.5 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden text-sm sm:inline">Book Now</span>
        <span className="absolute -right-0.5 -top-0.5 h-3 w-3 animate-ping rounded-full bg-[oklch(0.62_0.17_150)]" />
      </motion.a>
    </div>
  );
}

export function ExitIntent() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("mrh-exit")) {
      setDismissed(true);
      return;
    }
    const onLeave = (e) => {
      if (e.clientY <= 0 && !dismissed) setShow(true);
    };
    document.addEventListener("mouseleave", onLeave);
    return () => document.removeEventListener("mouseleave", onLeave);
  }, [dismissed]);

  const close = () => {
    setShow(false);
    setDismissed(true);
    if (typeof sessionStorage !== "undefined") sessionStorage.setItem("mrh-exit", "1");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-xl bg-card p-8 text-center shadow-2xl"
          >
            <button onClick={close} aria-label="Close" className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Wait — before you go!</p>
            <h3 className="mt-2 text-2xl font-bold">Get the best rate in Munsiyari</h3>
            <p className="mt-2 text-muted-foreground">
              Message us now and lock in flexible self-drive rentals with free helmets & roadside assistance.
            </p>
            <Button asChild variant="whatsapp" size="lg" className="mt-5 w-full">
              <a href={whatsappLink(bookingMessage())} target="_blank" rel="noopener noreferrer" onClick={close}>
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
