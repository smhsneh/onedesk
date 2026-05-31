
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      style={{
        background: "#fbfafc",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* Noise */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.025,
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      {/* Pink */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "rgba(255,182,212,0.18)",
          filter: "blur(220px)",
          top: "-250px",
          left: "-150px",
        }}
      />

      {/* Blue */}
      <div
        style={{
          position: "absolute",
          width: 650,
          height: 650,
          borderRadius: "50%",
          background: "rgba(180,220,255,0.16)",
          filter: "blur(220px)",
          top: "5%",
          right: "-180px",
        }}
      />

      {/* Purple */}
      <div
        style={{
          position: "absolute",
          width: 650,
          height: 650,
          borderRadius: "50%",
          background: "rgba(225,210,255,0.16)",
          filter: "blur(220px)",
          bottom: "-180px",
          left: "20%",
        }}
      />

      {/* Yellow */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(255,236,180,0.12)",
          filter: "blur(220px)",
          bottom: "10%",
          right: "10%",
        }}
      />

      {/* Soft Ambient Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          width: 760,
          height: 500,
          borderRadius: 50,
          overflow: "hidden",
          background:
            "linear-gradient(135deg,#ffe7f1,#e6f3ff,#efe8ff,#fff5d8)",
          filter: "blur(85px)",
          opacity: 0.22,
          transform: "rotate(-6deg)",
        }}
      />

      {/* Dashboard Mockup */}
      <div
        className="absolute"
        style={{
          width: 720,
          height: 460,
          borderRadius: 42,
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transform: "rotate(-6deg)",
          opacity: 0.18,
          overflow: "hidden",
        }}
      >
        <div className="p-6 flex gap-4 h-full">
          <div className="w-48 rounded-3xl bg-white/40" />
          <div className="flex-1 flex flex-col gap-4">
            <div className="h-28 rounded-3xl bg-white/40" />
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div className="rounded-3xl bg-white/40" />
              <div className="rounded-3xl bg-white/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Auth Card */}
      <motion.div
        layout
        className="relative z-10 w-full max-w-lg p-10 rounded-[40px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.82), rgba(255,255,255,0.42))",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          border: "1px solid rgba(255,255,255,0.95)",
          boxShadow: `
            0 40px 100px rgba(0,0,0,0.04),
            inset 1px 1px 8px rgba(255,255,255,0.8)
          `,
        }}
      >
        <div className="text-center mb-8">
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: "-0.07em",
              color: "#111",
            }}
          >
            OneDesk
          </h2>

          <p className="text-zinc-500 text-sm mt-1">
            Your all-in-one student workspace
          </p>
        </div>

        {/* Tabs */}
        <div className="flex mb-10">
          <button
            onClick={() => setIsLogin(true)}
            className="flex-1 pb-4 font-semibold transition"
            style={{
              color: isLogin ? "#cf76a5" : "#a1a1aa",
              borderBottom: isLogin
                ? "2px solid #cf76a5"
                : "2px solid transparent",
            }}
          >
            Log in
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className="flex-1 pb-4 font-semibold transition"
            style={{
              color: !isLogin ? "#cf76a5" : "#a1a1aa",
              borderBottom: !isLogin
                ? "2px solid #cf76a5"
                : "2px solid transparent",
            }}
          >
            Sign up
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? "login" : "signup"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h1 className="text-4xl font-bold text-center text-zinc-900">
              {isLogin ? "Welcome back" : "Create account"}
            </h1>

            <p className="text-center text-zinc-500 mt-2 mb-8">
              {isLogin
                ? "Continue your workspace"
                : "Start building your workspace"}
            </p>

            <form className="space-y-5">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full h-14 px-4 rounded-2xl border border-white/60 bg-white/55 backdrop-blur-md outline-none focus:ring-4 focus:ring-pink-100"
                />
              )}

              <input
                type="email"
                placeholder="Email"
                className="w-full h-14 px-4 rounded-2xl border border-white/60 bg-white/55 backdrop-blur-md outline-none focus:ring-4 focus:ring-pink-100"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full h-14 px-4 rounded-2xl border border-white/60 bg-white/55 backdrop-blur-md outline-none focus:ring-4 focus:ring-pink-100"
              />

              <button
                type="submit"
                className="w-full h-14 rounded-2xl font-semibold text-zinc-800 transition-all duration-300 hover:scale-[1.01]"
                style={{
                  background:
                    "linear-gradient(135deg,#fff7fb,#f7fbff,#faf8ff)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.04)",
                }}
              >
                {isLogin ? "Log in" : "Create account"}
              </button>
            </form>

            <p className="text-center text-zinc-500 mt-6">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}

              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 font-semibold"
                style={{ color: "#cf76a5" }}
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Auth;
