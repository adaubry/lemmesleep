"use client";
import { Heading } from "@/components/heading";
import HeroService from "@/components/nos-services/hero-service";
import { Subheading } from "@/components/subheading";
import { SVGGrid } from "@/components/team/grid";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
import Image from "next/image";
import { FeatureIconContainer } from "@/components/feature-icon-container";
import {
  GiArcheryTarget,
  GiChessKnight,
  GiPalette,
  GiRocket,
} from "react-icons/gi";

const page = () => {
  return (
    <div className="bg-[var(--background)]">
      <div className="flex flex-col gap-40">
        <div className="mb-20"></div>

        <div className="mx-auto max-w-96 md:max-w-xl">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <GiArcheryTarget className="h-6 w-6 text-white" />
          </FeatureIconContainer>
          <Heading>Votre réussite est notre mission.</Heading>
          <Subheading>
            Fondée en 2024, <br />
            Lumena est une agence de communication-marketing 360
            <br />
            dédiée à transformer votre entreprise <br />
            <br />
            en optimisant vos stratégies de communication et marketing.
          </Subheading>
        </div>
        <div className="mx-auto max-w-96 md:max-w-xl">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <GiChessKnight className="h-6 w-6 text-white" />
          </FeatureIconContainer>
          <Heading>Plus qu&apos;une agence, un partenaire stratégique.</Heading>
          <Subheading>
            Chez Lumena, nous comprenons que chaque entreprise est unique.
            <br />
            <br /> C’est pourquoi nous nous engageons à offrir des solutions sur
            mesure, taillées pour répondre aux besoins spécifiques de votre
            organisation.
            <br />
            <br /> Pas de modèles tout faits
            <br /> Ni de discours opaques
          </Subheading>
        </div>
        <div className="mx-auto max-w-96 md:max-w-xl">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <GiPalette className="h-6 w-6 text-white" />
          </FeatureIconContainer>
          <Heading>Personnalisation et réactivité.</Heading>
          <Subheading>
            La spécificité de Lumena repose sur la diversité de nos services et
            notre réactivité face à vos besoin. <br />
            <br />
            Nous sommes là pour aider les entreprises à faire une différence au
            sein de leur communauté.
            <br />
            <br /> TPE-PME ou ETI, nous adaptons nos stratégies à votre réalité,
            garantissant des expériences personnalisées qui résonnent avec votre
            marché cible.
          </Subheading>
        </div>
        <div className="mx-auto max-w-96 md:max-w-xl">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <GiRocket className="h-6 w-6 text-white" />
          </FeatureIconContainer>
          <Heading>Notre expertise</Heading>
          <Subheading>
            Nous mettons en place des stratégies qui génèrent des leads
            <br />
            <br />
            facilitent des conversations pertinentes <br />
            <br />
            et vous permettent d’atteindre vos objectifs plus rapidement.
          </Subheading>
        </div>

        <div>
          <div className="relative">
            <div className="">
              <Heading className="">Notre expertise</Heading>
              <Subheading>
                Des années de performances à votre service
              </Subheading>
            </div>

            <div className="relative py-60">
              <div className="absolute inset-0 h-full w-full bg-[var(--background)] opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_90%)]">
                <SVGGrid />
              </div>
              <div>
                <div className="relative z-40 mx-auto h-80 max-w-3xl">
                  <div className="relative pb-12 md:pb-20">
                    {/* Particles animation */}
                    <div className="absolute -top-2 left-1/2 -z-10 -mt-6 h-20 w-80 -translate-x-1/2">
                      <SparklesCore
                        id="new-particles"
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={100}
                        className="h-full w-full"
                        particleColor="#FFFFFF"
                      />
                    </div>

                    <div className="text-center">
                      {/* Testimonial image */}
                      <div className="relative h-60 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
                        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full before:absolute before:inset-0 before:-z-20 before:rounded-full before:bg-gradient-to-b before:from-neutral-400/20 before:to-transparent before:to-20% after:absolute after:inset-0 after:-z-20 after:m-px after:rounded-full after:bg-[var(--foreground)]">
                          <div className="absolute inset-0 -z-10 h-full w-full pb-16">
                            <Image
                              src="/montage.png"
                              alt="Description of the image"
                              width={1400}
                              height={759}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
