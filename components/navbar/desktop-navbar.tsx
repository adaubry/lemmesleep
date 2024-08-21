"use client";

import { Button } from "../ui/button";
import { NavBarItem } from "./navbar-item";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  navItems: {
    link: string;
    title: string;
    target?: "_blank";
  }[];
};

export const DesktopNavbar = ({ navItems }: Props) => {
  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });
  return (
    <motion.div
      className={cn(
        "relative mx-auto mt-4 flex w-full justify-between rounded-xl bg-transparent px-4 py-3 transition duration-200",
      )}
      animate={{
        width: showBackground ? "80%" : "100%",
        background: showBackground ? "var(--card-foreground)" : "transparent",
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <AnimatePresence>
        {showBackground && (
          <motion.div
            key={String(showBackground)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="pointer-events-none absolute inset-0 h-full w-screen rounded-full"
          />
        )}
      </AnimatePresence>
      <div className="flex flex-row items-center gap-2">
        <Link href={"/"}>
          <Image src="/svg/logo.svg" alt="t" height="100" width="100" />
        </Link>

        <div className="ml-4 mt-2 flex items-center gap-1.5">
          {navItems.map((item) => (
            <NavBarItem href={item.link} key={item.title} target={item.target}>
              {item.title}
            </NavBarItem>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button>Prenez rendez-vous</Button>
      </div>
    </motion.div>
  );
};
