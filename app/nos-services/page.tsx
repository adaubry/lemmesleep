import { CTA } from "@/components/ui/cta";
import { Heading } from "@/components/heading";
import { NosServices } from "@/components/nos-services/nos-services";
import { Subheading } from "@/components/subheading";
import HeroService from "@/components/nos-services/hero-service";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-40 bg-[color:var(--background)] text-[color:var(--text-color)]">
      <HeroService
        headingText="Nos services"
        subheadingText="Définissez, trouvez et convertissez votre client idéal"
        buttonText="Prenez rendez-vous"
        lottieFile="/lottie/bundle.json"
      ></HeroService>
      <div>
        <Heading>L&apos;Essence de Notre Savoir-Faire</Heading>
        <Subheading>
          La spécificité de Lumena est et restera toujours la variété de nos
          services et notre réactivité quelle que soit la nature de votre
          organisation, pas de solution toute faite ou de discours opaque
        </Subheading>
      </div>
      <div>
        <NosServices />
        <div className="w-screen">
          <CTA
            heading="Transform your business with our cutting-edge solutions"
            description="Our platform offers innovative tools designed to accelerate your growth. Join our community of successful businesses today."
            buttonText="Schedule a demo"
          />
        </div>
      </div>
    </main>
  );
}
