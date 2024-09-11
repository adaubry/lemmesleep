import { CharacteristicService } from "@/components/nos-services/characteristic-services";
import HeroService from "@/components/nos-services/hero-service";
import Metrics from "@/components/nos-services/metrics";
import { Subheading } from "@/components/subheading";
import { CTA } from "@/components/ui/cta";

const content = [
  {
    title: "Ciblage précis",
    description:
      "Déterminez et engagez vos acheteurs idéaux avec une précision extrême grâce à des informations détaillées",
    content: (
      <Subheading className="text-left md:max-w-xl md:text-center lg:my-80">
        Atteignez les bonnes personnes, tout en offrant une intégration facile
        pour une optimisation continue de vos campagnes.
      </Subheading>
    ),
    src: <div className="hidden">Animation 1</div>,
  },
  {
    title: "Hygiène des données",
    description: "Assurez-vous que vos informations soient propres et exactes",
    content: (
      <Subheading className="text-left md:max-w-xl md:text-center lg:my-80">
        Adaptez vos stratégies en temps réel avec des informations exploitables
        sur l’intention, la réponse et le comportement d’achat
      </Subheading>
    ),
    src: <div className="hidden">Animation 2</div>,
  },
  {
    title: "Précision inégalées",
    description:
      "Bénéficiez d'une portée élargie combinée à un niveau exceptionnel de précision dans vos campagnes.",
    content: (
      <Subheading className="text-left md:max-w-xl md:text-center lg:my-80">
        Accédez à une vaste gamme de sources et contacts, avec une précision
        garantie, pour un ciblage efficace et une gestion fluide de vos
        campagnes.
      </Subheading>
    ),
    src: <div className="hidden">Animation 3</div>,
  },
];

const metricsData = [
  {
    value: "90%",
    label: "Taux de précision des données",
  },
  {
    value: "3x",
    label: "Augmentation des performances",
  },
  {
    value: "80% ",
    label: "Réduction des coûts d'acquisition",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[color:var(--background)] text-[color:var(--text-color)] ">
    <div className="pb-40">  
    <HeroService
        headingText="Identification d'audience"
        subheadingText="Atteignez vos acheteurs idéaux avec une précision exceptionnelle"
        buttonText="Prenez rendez-vous"
        lottieFile="/lottie/bundle.json"
        redirect="/contact"
      />
      </div>
      <Metrics metrics={metricsData} />
      <CharacteristicService
        heading="Maximisez vos opportunités"
        subheading="Profitez de notre expertise en génération de leads pour améliorer votre pipeline."
        content={content}
      />
      <div className="w-screen">
        <CTA
          heading="Affinez votre stratégie d'audience"
          description="Accédez aux meilleures données et optimisez vos résultats en atteignant les bons acheteurs, au bon moment, avec les bonnes informations"
          buttonText="Prenez rendez-vous"
        />
      </div>
    </main>
  );
}
