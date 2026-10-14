import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { LogoMark } from "./logo";

export function MobileFollowBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 p-3 backdrop-blur sm:hidden">
      <div className="flex items-center gap-3">
        <LogoMark className="size-10" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold">{site.tiktok.handle}</p>
          <p className="truncate text-xs text-muted-foreground">{site.schedule}</p>
        </div>
        <Button asChild className="h-10 rounded-full px-5 font-bold">
          <a href={site.tiktok.url} target="_blank" rel="noopener noreferrer">
            Follow
          </a>
        </Button>
      </div>
    </div>
  );
}
