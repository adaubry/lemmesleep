import { CharacteristicService } from "@/components/nos-services/characteristic-services";
import HeroService from "@/components/nos-services/hero-service";
import Metrics from "@/components/nos-services/metrics";
import { Subheading } from "@/components/subheading";
import { CTA } from "@/components/ui/cta";

const content = [
  {
    title: "Une approche multicanaux",
    description:
      "Nous générons des leads de haute qualité en utilisant une combinaison de stratégies toutes testées sur le terrain",
    content: (
      <Subheading className="text-left md:max-w-xl md:text-center lg:my-80">
        Nos campagnes sont conçues pour atteindre vos clients idéaux, avec une
        qualification rigoureuse des leads pour garantir qu&apos;ils répondent
        parfaitement à vos critères.
      </Subheading>
    ),
    src: <div className="hidden">Animation 1</div>,
  },
  {
    title: "Segmentation et ciblage sur mesure",
    description:
      "Accédez à des segments d’audience affinés pour une syndication de contenu et un ciblage précis.",
    content: (
      <Subheading className="text-left md:max-w-xl md:text-center lg:my-80">
        Utilisez des données d&apos;intention pour optimiser l’efficacité de vos
        campagnes et atteindre les acheteurs les plus pertinents avec un
        engagement ciblé.
      </Subheading>
    ),
    src: <div className="hidden">Animation 2</div>,
  },
  {
    title: "Analyse et optimisation",
    description:
      "Nous analysons et optimisons les performances de vos compagnes grâce à des outils avancés constamment.",
    content: (
      <Subheading className="text-left md:max-w-xl md:text-center lg:my-80">
        Nous vous offrons une meilleure segmentation et une gestion efficace de
        vos campagnes, tout en obtenant des insights précieux pour affiner vos
        stratégies
      </Subheading>
    ),
    src: <div className="hidden">Animation 3</div>,
  },
];

const metricsData = [
  {
    value: "20%",
    label: "D'augmentation des lead de votre site",
  },
  {
    value: "2x",
    label: "Visibilité sur vos clients ",
  },
  {
    value: "28%",
    label: "De taux de coversion des MQL",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-40 bg-[color:var(--background)] text-[color:var(--text-color)] md:gap-80">
      <HeroService
        headingText="Génération de leads"
        subheadingText="Définir, identifier, localiser et engager vos futurs clients est essentiel pour développer un pipeline efficace."
        buttonText="Prenez rendez-vous"
        lottieFile="/lottie/bundle.json"
        redirect="/contact"
      />
      <CharacteristicService
        heading="Maximisez vos opportunités"
        subheading="Profitez de notre expertise en génération de leads pour améliorer votre pipeline."
        content={content}
      />
      <Metrics metrics={metricsData} />
      <div className="w-screen">
        {" "}
        <CTA
          heading="Transformez votre génération de leads"
          description="Maximisez l’efficacité de vos campagnes et développez votre activité avec des prospects véritablement intéressés. "
          buttonText="Prenez rendez-vous"
        />
      </div>
    </main>
  );
}
