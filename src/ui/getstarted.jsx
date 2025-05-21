"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function GetStartedUI() {
  const [isAnimated, setIsAnimated] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
      controls.start("visible");
    }, 500);

    return () => clearTimeout(timer);
  }, [controls]);

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  const rotatingAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 0.9, 0.7],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="w-full mx-auto max-w-5xl grid md:grid-cols-2 gap-6 rounded-3xl my-8 overflow-hidden bg-white shadow-xl">
      {/* Left Panel */}
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 p-8 flex flex-col justify-between min-h-[550px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/10 z-0"></div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-[5%] left-[10%] w-[150px] h-[150px] rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-[10%] right-[5%] w-[100px] h-[100px] rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl"
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          />

          <motion.div
            className="absolute top-[10%] left-[15%] z-10"
            initial={{ rotate: 25, x: -20 }}
            animate={
              isAnimated
                ? {
                    ...floatingAnimation,
                    rotate: 0,
                    x: 0,
                  }
                : {}
            }
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-[80px] h-[80px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 rounded-lg shadow-lg transform skew-x-12" />
          </motion.div>

          <motion.div
            className="absolute top-[20%] right-[20%] z-10"
            initial={{ rotate: -15, y: -30 }}
            animate={
              isAnimated
                ? {
                    rotate: 0,
                    y: 0,
                    ...rotatingAnimation,
                  }
                : {}
            }
          >
            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 opacity-80 shadow-lg" />
          </motion.div>

          <motion.div
            className="absolute bottom-[30%] left-[25%] z-10"
            initial={{ rotate: 35, scale: 0.9 }}
            animate={
              isAnimated
                ? {
                    rotate: 0,
                    scale: 1,
                    ...pulseAnimation,
                  }
                : {}
            }
          >
            <div
              className="w-[120px] h-[120px] rounded-full border-[15px] opacity-80"
              style={{
                background: "linear-gradient(135deg, #4169e1, #9370db, #00bfff)",
                borderRadius: "50%",
              }}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-[20%] right-[15%] z-10"
            initial={{ rotate: -25, y: 20 }}
            animate={
              isAnimated
                ? {
                    rotate: 0,
                    y: 0,
                    ...floatingAnimation,
                  }
                : {}
            }
          >
            <div
              className="w-[70px] h-[140px] bg-gradient-to-r from-blue-400 via-purple-300 to-cyan-200 opacity-70"
              style={{
                borderRadius: "40%",
                transform: "skew(-10deg, 5deg)",
              }}
            />
          </motion.div>

          <motion.div
            className="absolute top-[40%] left-[40%] z-10"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="w-[40px] h-[40px] bg-gradient-to-r from-cyan-400 to-blue-500 opacity-80 rounded-full shadow-lg" />
          </motion.div>

          <motion.div
            className="absolute top-[60%] left-[10%] z-10"
            animate={{
              x: [0, 15, 0, -15, 0],
              rotate: [0, 180],
            }}
            transition={{
              x: { duration: 10, repeat: Infinity, repeatType: "reverse" },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            }}
          >
            <div className="w-[30px] h-[30px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 rounded-md shadow-lg" />
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Open the
            <br />
            world of magic!
          </h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
            Get started
          </Button>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="bg-white p-8 flex flex-col">
         <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Button variant="ghost" size="sm" className="mb-6 text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Get started
          </Button>

          <motion.h1
            className="text-4xl font-bold text-slate-900 mb-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Open the
            <br />
            world of music
          </motion.h1>

          <div className="space-y-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                variant="outline"
                className="w-full py-6 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:shadow-md"
              >
                 <Link to="/signup">Sign in </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Button className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:shadow-md">
               <Link to="/login"> Login</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center gap-4 my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="h-[1px] flex-1 bg-slate-200"></div>
            <span className="text-slate-500 text-sm">or continue with</span>
            <div className="h-[1px] flex-1 bg-slate-200"></div>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Button
                variant="outline"
                className="w-full py-6 flex items-center justify-center gap-2 hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="ml-2">Continue with Google</span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Button
                variant="outline"
                className="w-full py-6 bg-black text-white hover:bg-slate-800 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="ml-2">Continue with Apple</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
