"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot — precise tracking
  const dotX = useSpring(mouseX, { stiffness: 900, damping: 40, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 40, mass: 0.3 });

  // Ring — lagging with spring physics
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.6 });

  useEffect(() => {
    // Only show custom cursor on pointer-accurate devices (desktop)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);
    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);

    const addHover = () => {
      document.querySelectorAll("a, button, [data-cursor-hover], input, textarea, label").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseenter", onEnter);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    addHover();

    // Re-add on DOM changes (for dynamically rendered elements)
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <>
      {/* Precision dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: clicking ? 0.4 : hovering ? 0 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />

      {/* Lagging ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: clicking ? 0.7 : hovering ? 1.6 : 1,
          opacity: visible ? 1 : 0,
          borderColor: hovering ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.18)",
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border"
      />
    </>
  );
}
