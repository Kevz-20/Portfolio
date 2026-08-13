import Image from "next/image";
import { FiDownload, FiMapPin } from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import { SITE } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="A little about my background"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
          <FadeIn delay={0.1} className="mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src="/images/profile.svg"
                alt={`Portrait of ${SITE.name}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 320px, 256px"
                priority={false}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-5">
            {SITE.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <FiMapPin aria-hidden /> {SITE.location}
              </span>
              <a
                href={SITE.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-surface"
              >
                <FiDownload aria-hidden /> Download Resume
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
