import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { AboutPreview } from "@/components/sections/about-preview";
import { Sectors } from "@/components/sections/sectors";
import { Vision2030 } from "@/components/sections/vision-2030";
import { Certifications } from "@/components/sections/certifications";
import { ClientsProjects } from "@/components/sections/clients-projects";
import { CTAStrip } from "@/components/sections/cta-strip";
import { GoogleMap } from "@/components/sections/google-map";

export default function Page() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesShowcase />
      <AboutPreview />
      <Sectors />
      <Vision2030 />
      <Certifications />
      <ClientsProjects />
      <CTAStrip />
      <GoogleMap />
    </main>
  );
}
