import React from "react";
import { GradientContainer } from "../gradient-container";
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

export const Services = () => {
  return (
    <GradientContainer className="">
      <Container className="relative z-40 mx-auto max-w-7xl py-20">
        <Heading className="pt-4">Nos services</Heading>
        <Subheading>
          Des services sur mesure, réalisés par des experts chevronnés pour
          atteindre vos objectifs.
        </Subheading>

        <div className="grid grid-cols-1 gap-2 py-10 lg:grid-cols-3">
          <Card>
            <CardSkeletonContainer showGradient={false} className="mx-auto">
              <LottieAnimation src="/lottie/bundle.json" />
            </CardSkeletonContainer>
            <CardTitle>Identification de votre audience</CardTitle>
            <CardDescription>
              Définissez, identifiez, localisez et faites vous connaitre auprès
              de vos prochain clients. Nous pouvons vous aider à personnaliser
              la meilleure approche
            </CardDescription>
            <div>test</div>
          </Card>
          <Card>
            <CardSkeletonContainer showGradient={false} className="mx-auto">
              <LottieAnimation src="/lottie/leadgen.json" />
            </CardSkeletonContainer>
            <CardTitle>Generation de lead</CardTitle>
            <CardDescription>
              Un marketing complet pour engager des prospects sur le marché et
              développer votre pipeline sur tous les canaux. Nos données, nos
              solutions et notre assistance seront adaptées à tous vos besoins.
            </CardDescription>
            <div>test</div>
          </Card>
          <Card>
            <CardSkeletonContainer showGradient={false} className="mx-auto">
              <LottieAnimation src="/lottie/srdservice.json" />
            </CardSkeletonContainer>
            <CardTitle>BDR/SDR en tant que service</CardTitle>
            <CardDescription>
              Boostez vos ventes avec des BDR et SDR experts. De la prospection
              jusqu'à la conclusion auprès des décideurs clés.
            </CardDescription>
            <div>test</div>
          </Card>
        </div>
      </Container>
    </GradientContainer>
  );
};
