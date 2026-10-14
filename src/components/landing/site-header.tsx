import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { Logo } from "./logo";

const nav = [
  { href: "#video", label: "Video" },
  { href: "#do-cau-long", label: "Đồ cầu lông" },
  { href: "#ve-kenh", label: "Về kênh" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#" aria-label={site.name}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild size="lg" className="hidden px-4 sm:inline-flex">
          <a href={site.tiktok.url} target="_blank" rel="noopener noreferrer">
            Follow TikTok
          </a>
        </Button>
      </div>
    </header>
  );
}
