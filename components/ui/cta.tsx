"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Container } from "../container";
import { Subheading } from "../subheading";
import { Heading } from "../heading";
import Link from "next/link";

interface CTAProps {
  heading?: string;
  description?: string;
  buttonText?: string;
}

export const CTA: React.FC<CTAProps> = ({
  heading = "Get started today with Proactiv to kickstart your marketing efforts",
  description = "Proactiv houses the best in class software tools to kickstart your marketing journey. Join 127,000+ other users to get started.",
  buttonText = "Prenez rendez-vous",
}) => {
  return (
    <div className="relative bg-gradient-to-r from-[var(--card-foreground)] to-[var(--foreground)] py-8 md:py-16">
      <Container className="flex w-full flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <Heading className="font-bold text-[var(--text-color)]">
            {heading}
          </Heading>
          <div className="mx-auto mt-2 max-w-md text-center md:mx-0 md:mt-8 md:text-left md:text-base">
            <Subheading className="text-[var(--text-color)]">
              {description}
            </Subheading>
          </div>
        </div>
        <Link href={"/contact"}>
          <Button className="group flex items-center space-x-2 !text-lg">
            <span>{buttonText}</span>
            <HiArrowRight className="mt-0.5 h-3 w-3 stroke-[1px] text-black transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Link>
      </Container>
    </div>
  );
};
