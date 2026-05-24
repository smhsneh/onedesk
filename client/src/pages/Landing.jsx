import { motion } from "framer-motion";

const floatPositions = [
  // top-left area
  { top: "8%", left: "2%", rotate: -6 },
  // top-right area
  { top: "6%", right: "3%", rotate: 5 },
  // mid-left
  { top: "42%", left: "1%", rotate: -3 },
  // mid-right
  { top: "44%", right: "2%", rotate: 4 },
];

const floatAnims = [
  { y: [0, -12, 0], duration: 6 },
  { y: [0, -8, 0], duration: 7.5 },
  { y: [0, -14, 0], duration: 5.5 },
  { y: [0, -10, 0], duration: 8 },
];

function Landing() {
  const cards = [
    {
      title: "study workspace",
      text: "manage notes, revision plans, mock tests, schedules, and learning resources in one organized environment.",
      gradient: "from-[#ff99c8]/60 via-[#fec8c3]/40 to-[#ffffff]/10",
    },
    {
      title: "task systems",
      text: "track assignments, deadlines, goals, routines, and productivity workflows without clutter.",
      gradient: "from-[#a9def9]/60 via-[#d0f4de]/40 to-[#ffffff]/10",
    },
    {
      title: "adaptive planning",
      text: "build focus sessions, schedules, and intelligent planning systems designed for modern learners.",
      gradient: "from-[#e4c1f9]/60 via-[#cdb4db]/40 to-[#ffffff]/10",
    },
    {
      title: "unified organization",
      text: "bring together tasks, schedules, notes, planning, and productivity tools seamlessly.",
      gradient: "from-[#fcf6bd]/60 via-[#fec8c3]/40 to-[#ffffff]/10",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#f7f4fb] px-6 py-6 overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="flex-1"
              style={{
                background:
                  i % 4 === 0
                    ? "linear-gradient(to bottom, rgba(255,153,200,0.12), rgba(255,255,255,0.01), rgba(169,222,249,0.12))"
                    : i % 4 === 1
                    ? "linear-gradient(to bottom, rgba(228,193,249,0.1), rgba(255,255,255,0.01), rgba(205,180,219,0.1))"
                    : i % 4 === 2
                    ? "linear-gradient(to bottom, rgba(169,222,249,0.1), rgba(255,255,255,0.01), rgba(208,244,222,0.1))"
                    : "linear-gradient(to bottom, rgba(255,200,195,0.1), rgba(255,255,255,0.01), rgba(228,193,249,0.1))",
                borderLeft: "1px solid rgba(255,255,255,0.04)",
                borderRight: "1px solid rgba(255,255,255,0.015)",
              }}
            />
          ))}
        </div>
        <div className="absolute left-[-10%] top-[0%] h-[420px] w-[420px] rounded-full bg-[#ff99c8]/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#a9def9]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[35%] h-[380px] w-[380px] rounded-full bg-[#e4c1f9]/10 blur-[120px]" />
      </div>

      {/* MAIN CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative mx-auto w-full max-w-[1500px] rounded-[42px] border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.05)]"
        style={{ minHeight: "88vh" }}
      >
        {/* FLOATING CARDS — absolutely positioned around the hero */}
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: 1,
              y: floatAnims[index].y,
            }}
            transition={{
              opacity: { duration: 0.8, delay: index * 0.15 },
              y: {
                duration: floatAnims[index].duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              },
            }}
            whileHover={{ scale: 1.03, zIndex: 20 }}
            className="absolute w-[210px] group overflow-hidden rounded-[26px] border border-black/5 bg-white/70 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] cursor-default"
            style={{
              ...floatPositions[index],
              rotate: floatPositions[index].rotate,
              zIndex: 10,
            }}
          >
            {/* CARD GRADIENT */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
            {/* GLASS OVERLAY */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[40px]" />
            {/* SOFT GLOW */}
            <div className="absolute left-[10%] top-[10%] h-[60px] w-[60px] rounded-full bg-white/25 blur-2xl" />
            {/* CONTENT */}
            <div className="relative z-10">
              <h2 className="font-manrope text-[0.95rem] font-semibold tracking-[-0.03em] text-[#2f2938]">
                {card.title}
              </h2>
              <p className="mt-2 font-manrope text-[0.75rem] leading-relaxed text-[#5f5868]">
                {card.text}
              </p>
            </div>
          </motion.div>
        ))}

        {/* HERO — centered */}
        <div className="flex flex-col items-center justify-center text-center px-10 py-24" style={{ minHeight: "88vh" }}>
          {/* TOP PILL */}
          <div className="w-fit rounded-full border border-black/5 bg-white px-4 py-2 shadow-[0_4px_18px_rgba(0,0,0,0.03)]">
            <p className="font-manrope text-[0.75rem] tracking-wide text-[#7b7287]">
              made by smhsneh
            </p>
          </div>

          {/* TITLE */}
          <h1 className="mt-6 font-geom text-[7.5rem] font-bold leading-[0.9] tracking-[-0.09em] text-[#2f2938]">
            onedesk
          </h1>

          {/* SUBTEXT */}
          <p className="mt-5 max-w-xl font-manrope text-[0.92rem] leading-relaxed text-[#5f5868]">
            one workspace for productivity, planning, schedules, learning systems, and adaptive organization.
          </p>

          {/* BUTTON */}
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex h-[54px] items-center justify-center overflow-hidden rounded-full px-9 font-manrope text-[0.9rem] font-medium text-[#2f2938] transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(255,153,200,0.35) 0%, rgba(228,193,249,0.3) 50%, rgba(169,222,249,0.35) 100%)",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 4px 20px rgba(228,193,249,0.25), inset 0 1px 0 rgba(255,255,255,0.7)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* shimmer on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-600 group-hover:translate-x-full" />
              <span className="relative z-10">enter workspace</span>
            </motion.button>
          </div>

          {/* LOWER QUOTE */}
          <p className="mt-10 font-manrope text-[0.8rem] leading-relaxed text-[#b0a8bb]">
            designed for calm productivity, intelligent workflows, and seamless organization.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Landing;