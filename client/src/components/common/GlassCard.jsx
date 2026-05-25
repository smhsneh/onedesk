import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  gradient = "",
}) => {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        relative
        overflow-hidden

        rounded-[34px]

        border border-white/35

        bg-gradient-to-br
        ${gradient}

        shadow-[0_10px_40px_rgba(0,0,0,0.05)]

        backdrop-blur-xl

        p-6

        transition-all
        duration-300

        ${className}
      `}
    >
      {/* soft gloss overlay */}
      <div
        className="
          absolute
          inset-0

          bg-white/10

          pointer-events-none
        "
      />

      {/* subtle inner gradient */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-white/20
          to-transparent

          pointer-events-none
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;