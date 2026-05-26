import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  gradient = "",
}) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.005,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        relative

        h-full
        min-h-0

        flex
        flex-col

        overflow-hidden

        rounded-[34px]

        border border-white/35

        bg-gradient-to-br
        ${gradient}

        shadow-[0_12px_45px_rgba(0,0,0,0.08)]

        backdrop-blur-[22px]

        p-6

        transition-all
        duration-300

        group

        ${className}
      `}
    >
      {/* base glass */}
      <div
        className="
          absolute
          inset-0

          bg-white/[0.14]

          pointer-events-none
        "
      />

      {/* top gloss */}
      <div
        className="
          absolute

          inset-x-0
          top-0

          h-[120px]

          bg-gradient-to-b
          from-white/25
          to-transparent

          pointer-events-none
        "
      />

      {/* subtle edge light */}
      <div
        className="
          absolute
          inset-0

          rounded-[34px]

          border border-white/15

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100

          pointer-events-none
        "
      />

      {/* soft ambient glow */}
      <div
        className="
          absolute

          -top-10
          right-[-20px]

          h-[140px]
          w-[140px]

          rounded-full

          bg-white/12

          blur-[60px]

          opacity-0

          transition-all
          duration-500

          group-hover:opacity-100

          pointer-events-none
        "
      />

      {/* ultra subtle noise */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.018]

          mix-blend-overlay

          pointer-events-none
        "
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />

      {/* inner highlight */}
      <div
        className="
          absolute
          inset-0

          rounded-[34px]

          shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]

          pointer-events-none
        "
      />

      {/* content */}
      <div
        className="
          relative
          z-10

          flex
          flex-col

          h-full
          min-h-0
        "
      >
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;