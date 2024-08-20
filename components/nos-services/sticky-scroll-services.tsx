"use client";
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    src: React.ReactNode;
    content: React.ReactNode;
  }[];
}) => {
  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <div className="py-4 md:py-20">
      <motion.div className="relative mx-auto hidden h-full max-w-7xl flex-col justify-between p-10 lg:flex">
        {content.map((item, index) => (
          <ScrollContent key={item.title + index} item={item} index={index} />
        ))}
      </motion.div>
      <motion.div className="relative mx-auto flex max-w-7xl flex-col justify-between p-10 lg:hidden">
        {content.map((item, index) => (
          <ScrollContentMobile
            key={item.title + index}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const ScrollContent = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    src: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const translateContent = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0],
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 1, 0],
  );

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  return (
    <motion.div
      ref={ref}
      transition={{
        duration: 0.3,
      }}
      key={item.title + index}
      className="relative my-40 grid grid-cols-3 gap-8"
    >
      <div className="w-full">
        <motion.div
          style={{
            y: translate,
            opacity: opacity,
          }}
          className=""
        >
          <div className="font-hidden h-0.5 w-32 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>

          {/**WIP text scroll desktop */}
          <motion.h2 className="mt-2 inline-block text-left text-5xl font-bold text-[color:var(--text-color)]">
            {item.title}
          </motion.h2>
          {/**WIP */}
          <motion.p className="mt-2 text-left text-3xl font-normal text-[var(--text-muted)]">
            {item.description}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        key={item.title + index}
        style={{
          y: translateContent,
          opacity: index === 0 ? opacityContent : 1,
        }}
        className="col-span-2 h-full w-full self-start rounded-md"
      >
        {item.content && item.content}
      </motion.div>
    </motion.div>
  );
};

export const ScrollContentMobile = ({
  item,
  index,
}: {
  item: {
    content: any;
    title: string;
    description: string;
    src: React.ReactNode;
  };
  index: number;
}) => {
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  return (
    <motion.div
      transition={{
        duration: 0.3,
      }}
      key={item.title + index}
      className="relative my-10 flex flex-col md:flex-row md:space-x-4"
    >
      <div className="w-full">
        <motion.div className="mb-6">
          <div className="font-hidden h-0.5 w-32 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"></div>

          {/**WIP */}
          <motion.h2 className="mt-2 inline-block text-left text-3xl font-bold text-[color:var(--text-color)]">
            {item.title}
          </motion.h2>

          {/**WIP text scroll mobile*/}
          <motion.p className="mt-2 max-w-sm text-xl font-normal text-[var(--text-muted)]">
            {item.description}
          </motion.p>
          <motion.p className="">{item.src}</motion.p>
        </motion.div>
      </div>

      <motion.div
        key={item.title + index}
        className="w-full self-start rounded-md"
      >
        {item.content && item.content}
      </motion.div>
    </motion.div>
  );
};
