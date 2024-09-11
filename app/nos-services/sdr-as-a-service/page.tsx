import { CharacteristicService } from "@/components/nos-services/characteristic-services";
import HeroService from "@/components/nos-services/hero-service";
import Metrics from "@/components/nos-services/metrics";
import { Subheading } from "@/components/subheading";
import { CTA } from "@/components/ui/cta";

const content = [
  {
    title: "Gestion complète du cycle de prospection",
    description:
      "Nous prenons en charge chaque étape de la prospection, de la qualification des leads à l'opportunité concrète.",
    content: (
      <Subheading className="md:max-w-xl lg:my-80">
        Réduisez vos coûts d&apos;acquisition tout en augmentant vos chances de
        closing avec nos experts SDR/BDR dédiés, qui optimisent votre processus
        de vente pour des résultats concrets.
      </Subheading>
    ),
    src: <div className="hidden">Animation 1</div>,
  },
  {
    title: "Portée Internationale",
    description:
      "Nos SDR sont formés pour prospecter sur tout le marché francophone",
    content: (
      <Subheading className="md:max-w-xl lg:my-80">
        Nous garantissons des prospects de haute qualité adaptés à vos
        objectifs, dans toute la francophonie.
      </Subheading>
    ),
    src: <div className="hidden">Animation 2</div>,
  },
  {
    title: "Un modèle flexible, économique et évolutif",
    description:
      "Adaptez votre force de prospection en fonction de vos cycles de vente et contraintes budgétaires.",
    content: (
      <Subheading className="md:max-w-xl lg:my-80">
        Renforcez ponctuellement ou durablement votre équipe sans les
        contraintes de recrutement.
      </Subheading>
    ),
    src: <div className="hidden">Animation 3</div>,
  },
];

const metricsData = [
  {
    value: "85%",
    label:
      "Ses entreprises sont préoccupées par la pénurie de talents commerciaux",
  },
  {
    value: "36%",
    label: "Des contrats d'emploiement sont rompus dès la première année",
  },
  {
    value: "12%",
    label: "Des entreprises disposent de méthodes de prospection formalisées",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[color:var(--background)] text-[color:var(--text-color)] ">
    <div className="pb-40"> 
    <HeroService
        headingText="SDR/BDR en qualité de service"
        subheadingText="Concentrez-vous sur votre activité tout en laissant nos experts SDR/BDR gérer la phase cruciale de la prospection."
        buttonText="Prenez rendez-vous"
        lottieFile="/lottie/bundle.json"
        redirect="/contact"
      />
      </div>
        <Metrics metrics={metricsData} />
      <CharacteristicService
        heading="Transformez votre stratégie de vente"
        subheading="Nous transformons votre processus de vente en améliorant votre prospection, augmentant votre efficacité et réduisant vos coûts."
        content={content}
      />
      <div className="mx-auto">
      </div>
      <div className="w-screen">
        <CTA
          heading="Révolutionnez votre stratégie de vente dès aujourd'hui"
          description="Bénéficiez d'une approche sur-mesure pour la prospection commerciale. Réduisez vos coûts d'acquisition, maximisez vos performances "
          buttonText="Prenez rendez-vous"
        />
      </div>
    </main>
  );
}
