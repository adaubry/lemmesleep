"use client";
import React, { useState } from "react";
import { BlurImage } from "./blur-image";

export const Flags = () => {
  let [logos, setLogos] = useState([
    {
      title: "belgique",
      src: "/svg/belgique.svg",
    },

    {
      title: "suisse",
      src: "/svg/suisse.svg",
    },
    {
      title: "france",
      src: "/svg/france.svg",
    },
    {
      title: "canada",
      src: "/svg/canada.svg",
    },
    {
      title: "luxembourg",
      src: "/svg/luxembourg.svg",
    },
  ]);
  return (
    <div className="flex h-40 flex-row flex-wrap justify-center space-x-8">
      {logos.map((logo, idx) => (
        <BlurImage
          key={logo.title + idx}
          src={logo.src}
          alt={logo.title}
          width={50}
          height={50}
        />
      ))}
    </div>
  );
};
