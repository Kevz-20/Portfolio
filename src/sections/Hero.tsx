"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="animate-float-slow absolute -left-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-[110px]"
      />
      <div
        aria-hidden
        className="animate-float-slower absolute -bottom-32 -right-16 h-[28rem] w-[28rem] rounded-full bg-accent-2/20 blur-[110px]"
      />

      <Container className="relative py-32">
        <motion.div
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "show"}
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted"
          >
            Available for new opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            {SITE.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-gradient mt-4 text-2xl font-medium sm:text-3xl"
          >
            {SITE.role}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg text-muted">
            {SITE.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-105"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-surface"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-foreground sm:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  );
}
