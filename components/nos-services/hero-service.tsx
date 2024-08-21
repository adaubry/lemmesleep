import React from "react";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { Button } from "../ui/button";
import LottieAnimation from "../ui/lottie-animation";
import Link from "next/link";

interface HeroServiceProps {
  headingText?: string;
  subheadingText?: string;
  buttonText?: string;
  lottieFile?: string;
  redirect?: string;
}

const HeroService: React.FC<HeroServiceProps> = ({
  headingText = "Insert Heading ",
  subheadingText = "Insert Subheading ",
  buttonText = "Insert ",
  lottieFile = "/lottie/insert-file.json",
  redirect = "/",
}) => {
  return (
    <div className="flex w-screen flex-row justify-center bg-black px-12 py-40">
      <div className="flex flex-col place-self-center md:px-56">
        <Heading className="mx-0 md:text-left">{headingText}</Heading>
        <Subheading className="md:text-left">{subheadingText}</Subheading>
        <Link href={redirect}>
          <Button className="mx-auto max-w-40 md:mx-0">{buttonText}</Button>
        </Link>
      </div>
      <div className="hidden md:flex">
        <LottieAnimation src={lottieFile} />
      </div>
    </div>
  );
};

export default HeroService;
