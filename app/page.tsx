import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSelection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServiceSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import TrustedBySection from "@/components/TrustedBySection";



export default function Home() {
  return (
    <div>
<HeroSection/>
<AboutSection/>
<TrustedBySection/>
<PortfolioSection/>
<ProcessSection/>
<ServicesSection/>
<TechnologiesSection/>
<ContactSection/>
    </div>
  );
}
