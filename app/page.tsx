"use client";

import { motion } from "framer-motion";

import Logo from "@/components/Logo";
import LinkCard from "@/components/LinkCard";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090909]">

      <AnimatedBackground />

      <motion.section
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-md
          flex-col
          items-center
          justify-center
          px-6
          py-16
        "
      >

        {/* Logo */}
        <Logo />

        {/* Links */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-14 w-full space-y-5"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <LinkCard
              title="🛍 Shopee"
              href="https://shopee.co.id/"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <LinkCard
              title="📷 Instagram"
              href="https://instagram.com/"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <LinkCard
              title="🎵 TikTok"
              href="https://tiktok.com/"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <LinkCard
              title="💬 WhatsApp"
              href="https://wa.me/6281234567890"
            />
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="mt-16 text-center text-sm text-white/40"
        >
          © 2k26 NathanFits
        </motion.footer>

      </motion.section>

    </main>
  );
}
