"use client";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "framer-motion";

const navItems = [
  {
    title: "Nos services",
    link: "/nos-services",
  },
  {
    title: "A propos",
    link: "/a-propos",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export function NavBar() {
  return (
    <motion.nav
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        ease: [0.6, 0.05, 0.1, 0.9],
        duration: 0.8,
      }}
      className="fixed inset-x-0 z-50 mx-auto w-screen lg:w-full"
    >
      <div className="hidden w-full lg:block">
        <DesktopNavbar navItems={navItems} />
      </div>
      <div className="flex h-full w-screen flex-col items-center lg:hidden">
        <MobileNavbar navItems={navItems} />
        <div className="h-0.5 w-screen bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>
      </div>
    </motion.nav>
  );
}

{
  /* <div className="hidden md:block ">
        <DesktopNavbar />
      </div>
      <div className="flex h-full w-full items-center md:hidden ">
        <MobileNavbar navItems={navItems} />
      </div> */
}
