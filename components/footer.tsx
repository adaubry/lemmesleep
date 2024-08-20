import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export const Footer = () => {
  const links = [
    {
      name: "Service SDR/BDR",
      href: "/nos-services/sdr-as-a-service",
    },
    {
      name: "Identification d&apos;audience",
      href: "/nos-services/audience-identification",
    },
    {
      name: "Lead Generation",
      href: "/nos-services/lead-generation",
    },
  ];
  const legal = [
    {
      name: "Mentions légales",
      href: "/mentions-legales",
    },
    {
      name: "A propos",
      href: "/notre-equipe",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="relative">
      <div className="h-0.5 w-screen bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>

      <div className="relative border-t border-neutral-900 bg-[var(--background)] px-8 pb-32 pt-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row">
          <div className="flex flex-row md:flex-col">
            <div className="mb-4 mr-4 flex flex-col md:flex">
              <div className="m-4">
                <Image src="svg/logo.svg" height="100" width="100" alt="t" />
              </div>
              <Button>Appelez nous</Button>
            </div>
            <div className="my-auto">
              <div>Copyright &copy; 2024 Proactiv INC</div>
              <div className="mt-2">All rights reserved</div>
            </div>
          </div>
          <div className="mt-10 hidden grid-cols-3 items-start gap-10 md:mt-0 md:grid">
            <div className="mt-4 flex flex-col justify-center space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  className="dark:text-muted-dark text-xs text-muted transition-colors hover:text-black dark:hover:text-neutral-400 sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col justify-center space-y-4">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  className="dark:text-muted-dark text-xs text-muted transition-colors hover:text-black dark:hover:text-neutral-400 sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
