import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeatureBadges from "@/components/FeatureBadges";
import HowItWorks from "@/components/HowItWorks";
import MantarPuanStats from "@/components/MantarPuanStats";
import MascotCTA from "@/components/MascotCTA";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <FeatureBadges />
      <HowItWorks />
      <MantarPuanStats />
      <MascotCTA />
      <SiteFooter />
    </main>
  );
}
