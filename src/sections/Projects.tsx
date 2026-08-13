import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few projects that show how I approach product, design, and engineering problems."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
