import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: .8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: .8
      }}
      className="flex flex-col items-center"
    >
      <div
        className="
        w-24
        h-24
        rounded-full
        border
        border-white/15
        flex
        items-center
        justify-center
        text-4xl
        font-semibold
        bg-white/5
        backdrop-blur-xl
        shadow-2xl
      "
      >
        NF
      </div>

      <h1 className="mt-8 text-4xl font-semibold tracking-wide">
        NathanFits
      </h1>

      <p className="text-white/55 mt-2">
        Pilih kebutuhan Anda di sini.
      </p>
    </motion.div>
  );
}
