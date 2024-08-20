"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { HiArrowRight } from "react-icons/hi2";
import { Container } from "../container";

export const CTABundle = () => {
  return (
    <div className="relative">
      <Container className="flex w-full flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <motion.h2 className="max-w-xl text-left text-xl font-bold text-white md:mx-0 md:text-3xl">
            Pack Croissance
          </motion.h2>
          <p className="mx-auto mt-8 max-w-md text-left text-sm text-neutral-400 md:mx-0 md:text-base">
            Un ensemble complet de nos services pour créer des opportunités,
            qualifier vos prospects et dynamiser votre pipeline afin d’accélérer
            votre croissance.
          </p>
        </div>
        <Button className="group flex space-x-2 !text-lg">
          <span>Book a demo</span>
          <HiArrowRight className="mt-0.5 h-3 w-3 stroke-[1px] text-black transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </Container>
    </div>
  );
};

/* WIP title+description

<CardTitle>Pack Croissance Commerciale</CardTitle>
            <CardDescription>
              Un ensemble complet de nos services pour créer des opportunités,
              qualifier vos prospects et dynamiser votre pipeline afin
              d’accélérer votre croissance.
            </CardDescription>


*/
