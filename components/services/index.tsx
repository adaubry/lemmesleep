import React from "react";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from "./card";
import LottieAnimation from "../ui/lottie-animation";
import Link from "next/link";

export const Services = () => {
  return (
    <Container className="relative z-40 mx-auto max-w-7xl py-20">
      <Heading className="pt-4">Nos services</Heading>
      <Subheading>
        Des services sur mesure, réalisés par des experts chevronnés pour
        atteindre vos objectifs.
      </Subheading>

      <div className="grid grid-cols-1 gap-2 py-10 lg:grid-cols-3">
        <Card>
	<Link
            href="/nos-services/audience-identification"
            className="text-[var(--button)] hover:text-[var(--button-hover)]"
          >
          <CardSkeletonContainer showGradient={false} className="mx-auto">
            <LottieAnimation src="/lottie/bundle.json" />
          </CardSkeletonContainer>
	  </Link>
          <CardTitle>Identification de votre audience</CardTitle>
          <CardDescription>
            Définissez, identifiez, localisez et faites vous connaitre auprès de
            vos prochain clients. Nous pouvons vous aider à personnaliser la
            meilleure approche
          </CardDescription>

          <Link
            href="/nos-services/audience-identification"
            className="text-[var(--button)] hover:text-[var(--button-hover)]"
          >
            En savoir plus
          </Link>
        </Card>
	<Card className="border border-[var(--button)]">
	<Link
            href="/nos-services/sdr-as-a-service"
            className="text-[var(--button)] hover:text-[var(--button-hover)]"
          >
          <CardSkeletonContainer showGradient={false} className="mx-auto">
            <LottieAnimation src="/lottie/srdservice.json" />
          </CardSkeletonContainer>

	  </Link>
          <CardTitle>BDR/SDR en qualité de service</CardTitle>
          <CardDescription>
            Boostez vos ventes avec des BDR et SDR experts. De la prospection
            jusqu&apos;à la conclusion auprès des décideurs clés.
          </CardDescription>
          <Link
            href="/nos-services/sdr-as-a-service"
            className="text-[var(--button)] hover:text-[var(--button-hover)]"
          >
            En savoir plus
          </Link>
        </Card>

	<Card>
        <Link
            href="/nos-services/lead-generation"
            className="text-[var(--button)] hover:text-[var(--button-hover)]"
          >
          <CardSkeletonContainer showGradient={false} className="mx-auto">
            <LottieAnimation src="/lottie/leadgen.json" />
          </CardSkeletonContainer>
	</Link>
          <CardTitle>Generation de lead</CardTitle>
          <CardDescription>
            Un marketing complet pour engager des prospects sur le marché et
            développer votre pipeline sur tous les canaux. Nos données, nos
            solutions et notre assistance seront adaptées à tous vos besoins.
          </CardDescription>
          <Link
            href="/nos-services/lead-generation"
            className="text-[var(--button)] hover:text-[var(--button-hover)]"
          >
            En savoir plus
          </Link>
        </Card>
      </div>
    </Container>
  );
};
