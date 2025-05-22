
import AIHiringTabs from "../components/AIHiringTabs";
import { AnimatedBeamMultipleOutputDemo } from "../components/AnimatedBeamM";
import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorksSection from "../components/Howitworks";
import Marquee from "../components/Marquee";
import { MarqueTestimonails } from "../components/MarqueTestimonails";
import PricingSection from "../components/Pricing";

export default function Home() {
  return (
     <>
     <Hero />
     <Marquee/>
     <AIHiringTabs/>
     <HowItWorksSection/>
     <Features/>
     
     <MarqueTestimonails/>
     <PricingSection/>
     </>
  );
}
