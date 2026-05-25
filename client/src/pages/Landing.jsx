import { motion } from "framer-motion";

const features = [
  { label: "study workspace", num: "01", color: "#cf76a5" },
  { label: "task systems", num: "02", color: "#7aaed1" },

  { label: "onedesk", isTitle: true },

  { label: "revision plans", num: "03", color: "#d59a92" },
  { label: "adaptive planning", num: "04", color: "#8fc5a8" },
  { label: "focus sessions", num: "05", color: "#c9b567" },
  { label: "unified notes", num: "06", color: "#9f88d8" },
  { label: "smart schedules", num: "07", color: "#7aa7cb" },
  { label: "goal tracking", num: "08", color: "#cb70a0" },
];

function Landing() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",

        background: "#fbfafc",

        display: "flex",

        overflow: "hidden",

        fontFamily: "Manrope, sans-serif",

        position: "relative",
      }}
    >
      {/* GRAIN TEXTURE */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          opacity: 0.03,

          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',

          mixBlendMode: "multiply",

          pointerEvents: "none",

          zIndex: 1,
        }}
      />

      {/* LEFT SIDE */}
      <div
        style={{
          width: "50%",
          minHeight: "100vh",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          padding: "0 70px",

          position: "relative",
          zIndex: 2,
        }}
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.05 + i * 0.05,
            }}
            style={{
              display: "flex",
              alignItems: "center",

              justifyContent: item.isTitle
                ? "flex-start"
                : "space-between",

              borderBottom:
                i < features.length - 1
                  ? "1px solid rgba(0,0,0,0.035)"
                  : "none",

              padding: item.isTitle
                ? "26px 0"
                : "20px 0",
            }}
          >
            {/* FEATURE TEXT */}
            <div
              style={{
                fontFamily: item.isTitle
                  ? "Geom, sans-serif"
                  : "Manrope, sans-serif",

                fontSize: item.isTitle
                  ? "clamp(4.6rem, 8vw, 7rem)"
                  : "clamp(1.45rem, 2vw, 2rem)",

                fontWeight: item.isTitle ? 700 : 650,

                letterSpacing: item.isTitle
                  ? "-0.09em"
                  : "-0.05em",

                color: item.isTitle
                  ? "#0b0b0b"
                  : item.color,

                lineHeight: item.isTitle ? 0.9 : 1.1,

                textTransform: item.isTitle
                  ? "none"
                  : "uppercase",
              }}
            >
              {item.label}
            </div>

            {/* NUMBERS */}
            {item.num && (
              <span
                style={{
                  fontSize: "0.92rem",

                  color: "rgba(0,0,0,0.18)",

                  fontWeight: 500,

                  letterSpacing: "-0.03em",
                }}
              >
                {item.num}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* CENTER DIVIDER */}
      <div
        style={{
          width: "1px",

          background: "rgba(0,0,0,0.03)",

          position: "relative",

          zIndex: 2,
        }}
      />

      {/* RIGHT SIDE */}
      <div
        style={{
          width: "50%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          position: "relative",

          padding: "0 90px",

          overflow: "hidden",

          zIndex: 2,
        }}
      >
        {/* ATMOSPHERIC GRADIENT */}
        <div
          style={{
            position: "absolute",

            inset: 0,

            overflow: "hidden",

            pointerEvents: "none",

            zIndex: 0,
          }}
        >
          {/* PEACH */}
          <div
            style={{
              position: "absolute",

              width: "420px",
              height: "420px",

              top: "-40px",
              left: "120px",

              background:
                "rgba(255, 214, 170, 0.22)",

              borderRadius: "999px",

              filter: "blur(90px)",
            }}
          />

          {/* PINK */}
          <div
            style={{
              position: "absolute",

              width: "460px",
              height: "460px",

              top: "180px",
              left: "40px",

              background:
                "rgba(255, 153, 200, 0.20)",

              borderRadius: "999px",

              filter: "blur(110px)",
            }}
          />

          {/* PURPLE */}
          <div
            style={{
              position: "absolute",

              width: "420px",
              height: "420px",

              bottom: "80px",
              left: "120px",

              background:
                "rgba(228, 193, 249, 0.18)",

              borderRadius: "999px",

              filter: "blur(110px)",
            }}
          />

          {/* CYAN */}
          <div
            style={{
              position: "absolute",

              width: "540px",
              height: "540px",

              bottom: "-140px",
              right: "-80px",

              background:
                "rgba(169, 222, 249, 0.28)",

              borderRadius: "999px",

              filter: "blur(120px)",
            }}
          />

          {/* MINT */}
          <div
            style={{
              position: "absolute",

              width: "340px",
              height: "340px",

              bottom: "40px",
              right: "120px",

              background:
                "rgba(208, 244, 222, 0.14)",

              borderRadius: "999px",

              filter: "blur(100px)",
            }}
          />
        </div>

        {/* CONTENT */}
        <div
          style={{
            maxWidth: "430px",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            textAlign: "center",

            gap: "34px",

            position: "relative",
            zIndex: 2,
          }}
        >
          {/* TOP LABEL */}
          <p
            style={{
              margin: 0,

              fontSize: "0.78rem",

              letterSpacing: "0.14em",

              color: "rgba(0,0,0,0.32)",

              textTransform: "uppercase",

              fontWeight: 500,
            }}
          >
            made by smhsneh
          </p>

          {/* MAIN TEXT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              gap: "26px",
            }}
          >
            <p
              style={{
                margin: 0,

                fontSize: "3rem",

                lineHeight: 1.34,

                letterSpacing: "-0.06em",

                color: "#141414",

                fontWeight: 500,
              }}
            >
              "one place for
              everything you need
              to learn, plan, and
              grow."
            </p>

            <p
              style={{
                margin: 0,

                fontSize: "1.08rem",

                lineHeight: 1.9,

                letterSpacing: "-0.03em",

                color: "rgba(0,0,0,0.48)",

                fontWeight: 400,
              }}
            >
              one workspace for productivity,
              planning, schedules, learning
              systems, and adaptive organization.
            </p>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.985,
            }}
            style={{
              position: "relative",

              marginTop: "8px",

              padding: "18px 42px",

              borderRadius: "999px",

              border:
                "1px solid rgba(255,255,255,0.82)",

              background: `
                linear-gradient(
                  135deg,
                  rgba(255,255,255,0.72),
                  rgba(255,255,255,0.56)
                )
              `,

              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",

              boxShadow: `
                inset 1px 1px 8px rgba(255,255,255,0.82),
                inset -1px -1px 8px rgba(255,255,255,0.45),
                0 10px 24px rgba(0,0,0,0.04)
              `,

              overflow: "hidden",

              cursor: "pointer",

              outline: "none",
            }}
          >
            {/* INNER PASTEL GLOW */}
            <div
              style={{
                position: "absolute",

                inset: "2px",

                borderRadius: "999px",

                background: `
                  linear-gradient(
                    135deg,
                    rgba(255,153,200,0.18),
                    rgba(169,222,249,0.22),
                    rgba(228,193,249,0.18),
                    rgba(208,244,222,0.14)
                  )
                `,

                filter: "blur(2px)",
              }}
            />

            {/* BUTTON TEXT */}
            <span
              style={{
                position: "relative",
                zIndex: 2,

                fontSize: "1rem",

                fontWeight: 650,

                color: "#323238",

                letterSpacing: "-0.04em",

                fontFamily: "Manrope, sans-serif",
              }}
            >
              enter workspace
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Landing;