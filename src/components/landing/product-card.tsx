import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Product } from "@/data/products";
import { LogoMark } from "./logo";

export function ProductCard({ product }: { product: Product }) {
  const { tiktokShop } = product.links;

  return (
    <Card id={`sp-${product.id}`} className="scroll-mt-20 gap-3 pt-0">
      <div className="relative aspect-square bg-secondary">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <LogoMark className="size-16 opacity-30" />
          </div>
        )}
        <Badge className="absolute left-2 top-2 bg-background/90 text-foreground">
          {product.category}
        </Badge>
      </div>
      <CardContent className="flex flex-1 flex-col gap-2">
        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.tags.map((tag) => (
              <Badge
                key={tag}
                className={
                  tag === "Kênh đang dùng"
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground"
                }
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <h3 className="font-bold leading-snug">{product.name}</h3>
        <p className="font-semibold text-primary">{product.priceRange}</p>
        <p className="text-muted-foreground">{product.note}</p>
      </CardContent>
      <CardFooter className="border-t bg-muted/40 py-3">
        {tiktokShop && (
          <Button asChild className="w-full">
            <a href={tiktokShop} target="_blank" rel="sponsored noopener noreferrer">
              Mua trên TikTok Shop <ExternalLink />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
