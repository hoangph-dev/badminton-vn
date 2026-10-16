import { About } from "@/components/landing/about";
import { Faq } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { LevelGuide } from "@/components/landing/level-guide";
import { MobileFollowBar } from "@/components/landing/mobile-follow-bar";
import { ProductSection } from "@/components/landing/product-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProductSection />
        <LevelGuide />
        <About />
        <Faq />
      </main>
      <SiteFooter />
      <MobileFollowBar />
    </>
  );
}
