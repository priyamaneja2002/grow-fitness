import Hero from "@/sections/hero/Hero";
import { AboutSection } from "@/sections/about/About";
import JoinMovementSection from "@/sections/joinTheMovement/JoinTheMovement";
import { PricingSection } from "@/sections/membershipPlans/Memberships";
import ClassesSection from "@/sections/classes/Classes";
import { FacilitiesSection } from "@/sections/facilities/Facilities";
import JoinNowBanner from "@/sections/joinNowBanner/JoinNowBanner";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PricingSection />
      <JoinMovementSection />
      <ClassesSection />
      <FacilitiesSection />
      <JoinNowBanner />
      <Footer />
    </>
  );
}
