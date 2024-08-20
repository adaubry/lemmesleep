"use client";
import React from "react";
import { TestimonialsSlider } from "./slider";
import { FeatureIconContainer } from "../services/feature-icon-container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { TbLocationBolt } from "react-icons/tb";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SVGGrid } from "./grid";

export const Team = () => {
  return (
    <div className="relative">
      <div className="">
        <Heading className="">Notre expertise</Heading>
        <Subheading>Des années de performances à votre service</Subheading>
      </div>

      <div className="relative py-60">
        <div className="absolute inset-0 h-full w-full bg-[var(--background)] opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_90%)]">
          <SVGGrid />
        </div>
        <TestimonialsSlider />
      </div>
    </div>
  );
};
