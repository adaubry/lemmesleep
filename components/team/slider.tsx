"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";
import { SparklesCore } from "../ui/sparkles";
import { Subheading } from "../subheading";

export const TestimonialsSlider = () => {
  return (
    <section>
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
          {/* <Image
                src="/montage.png"
                alt="Description of the image"
                width={500}
                height={300}
              /> */}
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
            {/* Text */}
            <div className="mb-10 px-8 transition-all delay-300 duration-150 ease-in-out sm:px-6">
              <Subheading>
                Collaborer avec Lumena, c'est la garantie d'obtenir une
                expertise personnalisée ainsi que des résultats mesurables.
              </Subheading>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
