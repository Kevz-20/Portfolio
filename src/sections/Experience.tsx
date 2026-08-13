import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/motion/FadeIn";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked & studied"
        />

        <ol className="mt-14 list-none">
          {EXPERIENCE.map((exp, i) => {
            const isLast = i === EXPERIENCE.length - 1;
            return (
              <li key={exp.id} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <span
                    aria-hidden
                    className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full border-2 border-accent bg-background"
                  />
                  {!isLast && (
                    <span aria-hidden className="w-px flex-1 bg-border" />
                  )}
                </div>

                <FadeIn delay={0.05 * (i % 4)} className="flex-1 pb-12">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-accent-2">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 flex flex-wrap items-center gap-2 text-sm font-medium text-muted">
                    {exp.org} · {exp.location}
                    <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted">
                      {exp.type === "work" ? "Work" : "Education"}
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {exp.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex gap-2 text-sm text-muted">
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
