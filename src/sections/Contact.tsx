"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";
import { SITE, SOCIAL_LINKS } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <FadeIn>
            <span className="text-sm font-medium uppercase tracking-widest text-accent">
              Contact
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Let&apos;s build something great together
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Have a project in mind, an opportunity to discuss, or just want
              to say hi? My inbox is always open.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex w-fit items-center gap-2 text-foreground transition-colors hover:text-accent-2"
              >
                <FiMail aria-hidden /> {SITE.email}
              </a>
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.filter((s) => s.label !== "Email").map(
                  ({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
                    >
                      <Icon size={18} aria-hidden />
                    </a>
                  )
                )}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent-2 focus:outline-none"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent-2 focus:outline-none"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent-2 focus:outline-none"
                  placeholder="Tell me a bit about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.02]"
              >
                <FiSend aria-hidden /> Send Message
              </motion.button>

              <p role="status" aria-live="polite" className="min-h-5 text-sm text-muted">
                {status === "sent"
                  ? "Your email client should be opening now — thanks for reaching out!"
                  : ""}
              </p>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
