import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  href: string;
};

export default function LinkCard({
  title,
  href,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      whileTap={{
        scale: .98
      }}
    >
      <Link
        href={href}
        className="
        block
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        py-5
        text-center
        transition-all
        duration-300
        hover:border-white/40
        hover:bg-white/10
      "
      >
        {title}
      </Link>
    </motion.div>
  );
}
