"use client";
import { motion, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { StickyScroll } from "./ui/sticky-scroll";
import { useScroll } from "framer-motion";
import LottieAnimation from "./ui/lottie-animation";

export const Process = () => {
  const content = [
    {
      title: "Révision de vos données",
      description: "Actualisation et renforcement de vos base de données",
      content: <LottieAnimation src="/lottie/donnees.json" />,
    },
    {
      title: "Génération de Pipeline",
      description:
        "Développement de nouvelles opportunités pour enrichir et dynamiser votre pipeline",
      content: <LottieAnimation src="/lottie/pipeline.json" />,
    },
    {
      title: "Identification des stakeholders",
      description:
        "Analyse et repérage des parties prenantes clés pour assurer l'alignement stratégique de vos projets",
      content: (
        <LottieAnimation src="/lottie/identification-stakeholder.json" />
      ),
    },
    {
      title: "Génération de rendez-vous",
      description:
        "Ciblage et prise de rendez-vous avec des prospects qualifiés pour maximiser votre taux de conversion.",
      content: <LottieAnimation src="/lottie/identificationaudience.json" />,
    },
    {
      title: "Qualification sur mesure",
      description:
        "Qualification des prospects selon les besoins et objectifs mutuels.",
      content: <LottieAnimation src="/lottie/business-people.json" />,
    },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgrounds = [
    "var(--background)",
    "var(--background)",
    "var(--card-foreground)",
  ];
  const index = Math.round(scrollYProgress.get() * (backgrounds.length - 1));

  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / content.length);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });
  return (
    <motion.div
      animate={{
        background: gradient,
      }}
      transition={{
        duration: 0.5,
      }}
      ref={ref}
      className="relative h-full w-full pt-20 md:pt-40"
    >
      <div className="px-6">
        <Heading className="mt-4">Notre processus</Heading>
        <Subheading>
          Une méthode rigoureuse et structurée pour atteindre vos objectifs avec
          succès.
        </Subheading>
      </div>
      <StickyScroll content={content} />
    </motion.div>
  );
};
