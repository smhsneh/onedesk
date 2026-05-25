import { useState } from "react";
import { ChevronDown } from "lucide-react";

const modes = [
  "college",
  "competitive",
  "online",
  "placement",
];

function DashboardHeader() {
  const [activeMode, setActiveMode] =
    useState("college");

  return (
    <header className="w-full flex items-center justify-between px-8 py-6">
      {/* LOGO */}
      <div
        className="
          text-4xl
          font-bold
          tracking-[-0.08em]
          text-[#111]
        "
        style={{
          fontFamily: "Geom, sans-serif",
        }}
      >
        onedesk
      </div>

      {/* MODE PILLS */}
      <div className="flex items-center gap-3">
        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => setActiveMode(mode)}
            className={`
              px-5 py-2.5
              rounded-full
              text-sm
              capitalize
              transition-all duration-300
              border

              ${
                activeMode === mode
                  ? `
                    bg-white/70
                    border-white/60
                    shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  `
                  : `
                    bg-transparent
                    border-transparent
                    text-black/45
                  `
              }
            `}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* USER */}
      <button
        className="
          w-12 h-12
          rounded-full
          bg-white/70
          border border-white/50
          flex items-center justify-center
          shadow-[0_4px_20px_rgba(0,0,0,0.04)]
        "
      >
        <ChevronDown
          size={18}
          className="text-black/60"
        />
      </button>
    </header>
  );
}

export default DashboardHeader;