"use client";

import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}) {
  return (
    <section className="bg-secondary/40 pt-28 pb-12 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
          )}
          <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
