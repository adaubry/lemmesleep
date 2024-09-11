import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";

export const ContactForm = () => {
  return (
    <Container className="grid grid-cols-1 gap-10 px-6 py-40 md:grid-cols-2 md:py-60">
      <div>
        <div className="flex"></div>
        <Heading className="text-left">Faisons connaissance</Heading>
        <Subheading className="text-left text-neutral-400">
          Nous serons toujours à votre service, Contactez nous et faites nous
          savoir comment nous pourrions vous aider.
        </Subheading>

        <div className="mt-10 text-sm">
          <p className="text-sm text-neutral-200">Email</p>
          <p className="text-xl text-neutral-200">
            contact@lumena-marketing.com
          </p>
        </div>
        <div className="mt-4 text-sm">
          <p className="text-sm text-neutral-200">N° Téléphone</p>
          <p className="text-xl text-neutral-200">+33 7 89 12 34 56</p>
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-[var(--foreground)] to-[var(--card-foreground)] p-4 md:p-10">
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-300"
            htmlFor="name"
          >
            Nom et prénom
          </label>
          <input
            id="name"
            type="text"
            placeholder="Pierre Dupont"
            className="h-10 w-full rounded-md bg-[var(--card-foreground)] pl-4 text-sm text-white placeholder-neutral-500 outline-none focus:outline-none focus:ring-2 active:outline-none"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-300"
            htmlFor="email"
          >
            Addresse email
          </label>
          <input
            id="email"
            type="email"
            placeholder="contact@lumena-marketing.com"
            className="h-10 w-full rounded-md bg-[var(--card-foreground)] pl-4 text-sm text-white placeholder-neutral-500 outline-none focus:outline-none focus:ring-2 active:outline-none"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-300"
            htmlFor="company"
          >
            Entreprise
          </label>
          <input
            id="company"
            type="text"
            placeholder="Lumena"
            className="h-10 w-full rounded-md bg-[var(--card-foreground)] pl-4 text-sm text-white placeholder-neutral-500 outline-none focus:outline-none focus:ring-2 active:outline-none"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-300"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="J'aimerai avoir des renseignements sur ..."
            className="w-full rounded-md bg-[var(--card-foreground)] pl-4 pt-2 text-sm text-white placeholder-neutral-500 outline-none focus:outline-none focus:ring-2 active:outline-none"
          />
        </div>
        <Button>Envoyer</Button>
      </div>
    </Container>
  );
};
