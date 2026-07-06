"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-50 bg-[#090909]" />

      {/* Top Glow */}
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-40, 20, -40],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        fixed
        top-[-180px]
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        rounded-full
        blur-[180px]
        bg-white/10
        -z-40
      "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [40, -30, 40],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        fixed
        bottom-[-250px]
        right-[-150px]
        w-[500px]
        h-[500px]
        rounded-full
        blur-[180px]
        bg-white/5
        -z-40
      "
      />

      {/* Noise */}
      <div
        className="
        pointer-events-none
        fixed
        inset-0
        opacity-[0.03]
        mix-blend-soft-light
        -z-30
      "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </>
  );
}
