import Image from "next/image";
import { FiAward } from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/motion/Stagger";
import { CERTIFICATIONS } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-border bg-surface/30 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications & Training"
          description="Credentials and hands-on training that back up the skills above."
        />

        <StaggerContainer className="mt-12 flex flex-wrap gap-6">
          {CERTIFICATIONS.map((cert) => {
            const thumbnail = (
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-background">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted">
                    <FiAward size={24} aria-hidden />
                  </div>
                )}
              </div>
            );

            const details = (
              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-snug text-foreground">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent-2">
                  {cert.date}
                </p>
              </div>
            );

            const viewHref = cert.credentialUrl ?? cert.image;

            return (
              <StaggerItem key={cert.id} className="w-full sm:w-[22rem]">
                {viewHref ? (
                  <a
                    href={viewHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${cert.name} certificate (opens in a new tab)`}
                    className="flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
                  >
                    {thumbnail}
                    {details}
                  </a>
                ) : (
                  <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-5">
                    {thumbnail}
                    {details}
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
