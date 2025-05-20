
import Features from "../components/Features";
import Hero from "../components/Hero";
import HowItWorksSection from "../components/Howitworks";
import Marquee from "../components/Marquee";
import PricingSection from "../components/Pricing";

export default function Home() {
  return (
     <>
     <Hero />
     <Marquee/>
     <HowItWorksSection/>
     <Features/>
     <PricingSection/>
     </>
  );
}
