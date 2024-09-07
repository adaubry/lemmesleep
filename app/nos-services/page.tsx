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
        redirect="/contact"
      ></HeroService>
      <div>
        <Heading>L&apos;Essence de Notre Savoir-Faire</Heading>
        <Subheading>
        Grâce à notre expertise et notre approche proactive, nous garantissons des solutions dynamiques et personnalisées, toujours orientées vers l'atteinte de vos objectifs commerciaux, avec une communication claire et des actions concrètes.
	</Subheading>
      </div>
      <div>
        <NosServices />
        <div className="w-screen">
          <CTA
            heading="Révolutionnez votre stratégie de vente dès aujourd'hui"
            description="Bénéficiez d'une approche sur-mesure pour la prospection commerciale. Réduisez vos coûts d'acquisition, maximisez vos performances"
            buttonText="Prenez rendez-vous"
          />
        </div>
      </div>
    </main>
  );
}
