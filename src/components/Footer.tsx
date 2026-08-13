import Container from "@/components/ui/Container";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#home" className="text-lg font-semibold tracking-tight text-foreground">
            {SITE.name}
          </a>
          <p className="mt-2 max-w-sm text-sm text-muted">{SITE.tagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
            >
              <Icon size={16} aria-hidden />
            </a>
          ))}
        </div>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-center text-xs text-muted sm:text-left">
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
