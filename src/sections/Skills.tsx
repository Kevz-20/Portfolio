import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface/30 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies I work with"
          description="A snapshot of the languages, frameworks, and platforms I reach for most."
        />

        <div className="mt-14 space-y-12">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
                {group.category}
              </h3>
              <StaggerContainer className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {group.skills.map(({ name, icon: Icon }) => (
                  <StaggerItem key={name}>
                    <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface px-4 py-6 text-center transition-colors hover:border-border-strong hover:bg-surface-hover">
                      <Icon
                        aria-hidden
                        size={28}
                        className="text-muted transition-colors group-hover:text-accent-2"
                      />
                      <span className="text-sm font-medium text-foreground">
                        {name}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
