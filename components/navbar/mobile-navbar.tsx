"use client";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from "framer-motion";

export const MobileNavbar = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

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
    <div
      className={cn(
        "flex w-full items-center justify-between rounded-md bg-transparent px-4 py-2 transition duration-200",
        showBackground && "bg-[var(--card-foreground)]",
      )}
    >
      <Link href={"/"}>
        <Image src="/svg/logov2.svg" alt="t" height="100" width="100" />
      </Link>
      <IoIosMenu
        className="h-6 w-6 text-white"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-start justify-start space-y-10 bg-black pt-5 text-xl text-zinc-600 transition duration-200 hover:text-zinc-800">
          <div className="flex w-full items-center justify-between px-5">
            <Link href={"/"}>
              <Image src="/svg/logov2.svg" alt="t" height="100" width="100" />
            </Link>
            <div className="flex items-center space-x-2">
              <IoIosClose
                className="h-8 w-8 text-white"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[14px] px-8">
            {navItems.map((navItem: any, idx: number) => (
              <>
                {navItem.children && navItem.children.length > 0 ? (
                  <>
                    {navItem.children.map((childNavItem: any, idx: number) => (
                      <Link
                        key={`link=${idx}`}
                        href={childNavItem.link}
                        onClick={() => setOpen(false)}
                        className="relative max-w-[15rem] text-left text-2xl"
                      >
                        <span className="block text-white">
                          {childNavItem.title}
                        </span>
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="relative"
                  >
                    <span className="block text-[26px] text-white">
                      {navItem.title}
                    </span>
                  </Link>
                )}
              </>
            ))}
          </div>
          <div className="flex w-full flex-row items-start gap-2.5 px-8 py-4">
            <Link href={"/contact"}>
              <Button>Prenez rendez-vous</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
