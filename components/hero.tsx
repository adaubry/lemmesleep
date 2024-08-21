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
        <Subheading className="max-w-64 md:max-w-96">
          Atteignez vos objectifs
          <br />
          Développez votre pipeline
          <br />
          Augmentez votre retour sur investissement
          <br />
          <Link href="/contact">
            <Button className="my-4">Prendre rendez-vous</Button>
          </Link>
        </Subheading>
      </div>
    </div>
  );
}
