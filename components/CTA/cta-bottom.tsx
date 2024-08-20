"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { HiArrowRight } from "react-icons/hi2";
import { Container } from "../container";
import { Subheading } from "../subheading";

export const CTA = () => {
  return (
    <div className="relative mx-4">
      <Container className="flex w-full flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <Subheading className="mx-auto max-w-xl text-center text-xl font-bold text-white md:mx-0 md:text-left md:text-3xl">
            Get started today with Proactiv to kickstart your marketing efforts
          </Subheading>
          <p className="mx-auto mt-8 max-w-md text-center text-sm text-neutral-400 md:mx-0 md:text-left md:text-base">
            Proactiv houses the best in class software tools to kickstart your
            marketing journey. Join 127,000+ other users to get started.
          </p>
        </div>
        <Button className="group flex items-center space-x-2 !text-lg">
          <span>Book a demo</span>
          <HiArrowRight className="mt-0.5 h-3 w-3 stroke-[1px] text-black transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </Container>
    </div>
  );
};
