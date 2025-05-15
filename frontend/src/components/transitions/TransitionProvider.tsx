"use client";

import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

export default function TransitionProvider({ children }: { children: ReactNode }) {

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      {children}
    </AnimatePresence>
  );
}
