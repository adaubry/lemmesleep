// Accordion.js

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ i, expanded, setExpanded, title, description }: any) => {
  const isOpen = i === expanded;

  return (
    <div className="">
      <motion.div
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="relative flex cursor-pointer flex-col overflow-hidden rounded-xl bg-[color:var(--card-foreground)] p-4 text-base font-bold"
      >
        {title}
        <AnimatePresence initial={false} mode="popLayout">
          {isOpen && (
            <motion.p
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-4 text-base font-normal text-[color:var(--text-muted)]"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Accordion;
