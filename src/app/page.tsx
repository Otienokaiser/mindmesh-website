import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Services } from "@/components/sections/Services";
import { SchoolaryFeature } from "@/components/sections/SchoolaryFeature";
import { Process } from "@/components/sections/Process";
import { Work } from "@/components/sections/Work";
import { WhyUs } from "@/components/sections/WhyUs";
import { TechStack } from "@/components/sections/TechStack";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { CTASection } from "@/components/sections/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <SchoolaryFeature />
      <Process />
      <Work />
      <WhyUs />
      <TechStack />
      <AboutIntro />
      <CTASection />
    </>
  );
}
