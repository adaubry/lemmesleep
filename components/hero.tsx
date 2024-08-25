import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { FlipWords } from "./ui/flip-words";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {
  const words = ["Définissez", "Trouvez", "Convertissez"];
  return (
    <div className="bg- flex h-[40rem] w-screen overflow-hidden antialiased md:items-center md:justify-center">
      <Spotlight
        className="-top-10 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl pt-20 md:pt-0">
        <div className="bold mx-auto w-fit text-5xl font-bold md:text-9xl">
          <FlipWords words={words} />
        </div>
        <Heading className="pt-4">votre client idéal</Heading>
        <div className="flex flex-col gap-2">
          <Subheading className="my-0 mt-8 max-w-72 md:max-w-96">
            Rafraichissez votre base de données
          </Subheading>
          <Subheading className="my-0 max-w-64 md:max-w-96">
            Développez votre pipeline
          </Subheading>
          <Subheading className="my-0 max-w-72 md:max-w-96">
            Remplissez vos objectifs
          </Subheading>
          <div className="flex flex-col">
            <Subheading className="my-0 max-w-72 md:max-w-96">
              Augmentez votre retour sur investissement
            </Subheading>
            <Link href="/contact" className="mx-auto my-2">
              <Button className="mx-auto">Prendre rendez-vous</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
