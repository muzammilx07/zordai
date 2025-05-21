"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"
import { LockIcon } from "lucide-react"
import { Link } from "react-router-dom";

export default function FuturisticAuthUI() {
  const [mounted, setMounted] = useState(false)

  // Only run animations after component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Resume keywords that will float in the background
  const resumeKeywords = [
    "Experience",
    "Skills",
    "Education",
    "Leadership",
    "Projects",
    "Achievements",
    "Certifications",
    "Languages",
    "References",
    "Portfolio",
    "Expertise",
    "Qualifications",
  ]

  // Google icon component
  function GoogleIcon() {
    return (
      <svg
        className="mr-2 h-4 w-4"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="google"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
      >
        <path
          fill="currentColor"
          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
        ></path>
      </svg>
    )
  }

  return (
    <div className="flex min-h-screen max-w-7xl mx-auto w-screen items-center justify-center p-4 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]">
      <div className="w-full max-w-[450px] bg-white ">
        <div className="w-full h-48 relative mb-4 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-lg overflow-hidden ">
          {/* Futuristic Grid Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "center center",
            }}
          ></div>

          {/* Glowing Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            {mounted &&
              [...Array(8)].map((_, i) => (
                <div
                  key={`orb-${i}`}
                  className="absolute rounded-full"
                  style={{
                    width: `${20 + Math.random() * 40}px`,
                    height: `${20 + Math.random() * 40}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    background: `radial-gradient(circle, rgba(${
                      Math.random() > 0.5 ? "96, 165, 250" : "139, 92, 246"
                    }, 0.8), rgba(${Math.random() > 0.5 ? "96, 165, 250" : "139, 92, 246"}, 0))`,
                    boxShadow: `0 0 15px 5px rgba(${Math.random() > 0.5 ? "96, 165, 250" : "139, 92, 246"}, 0.3)`,
                    animation: `pulse-glow ${3 + Math.random() * 4}s infinite alternate ease-in-out`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                ></div>
              ))}
          </div>

          {/* Floating Resume Keywords */}
          <div className="absolute inset-0 overflow-hidden">
            {mounted &&
              resumeKeywords.map((keyword, i) => (
                <div
                  key={`keyword-${i}`}
                  className="absolute text-xs font-mono opacity-70 text-blue-200"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 40 - 20}deg)`,
                    animation: `float-keyword ${8 + Math.random() * 7}s infinite alternate ease-in-out`,
                    animationDelay: `${Math.random() * 5}s`,
                    textShadow: "0 0 5px rgba(96, 165, 250, 0.7)",
                  }}
                >
                  {keyword}
                </div>
              ))}
          </div>

          {/* Digital Circuit Lines */}
          <svg
            className="absolute w-full h-full opacity-30"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circuit Paths */}
            {[...Array(10)].map((_, i) => {
              const points = []
              let x = 0
              let y = 10 + Math.random() * 80

              // Generate a path with right angles (circuit-like)
              while (x < 100) {
                points.push(`${x},${y}`)
                x += 10 + Math.random() * 20
                points.push(`${x},${y}`)
                y = Math.max(5, Math.min(95, y + (Math.random() * 30 - 15)))
                points.push(`${x},${y}`)
              }

              return (
                <polyline
                  key={`circuit-${i}`}
                  points={points.join(" ")}
                  fill="none"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="0.3"
                  className={mounted ? `animate-draw-${i % 5}` : ""}
                />
              )
            })}

            {/* Circuit Nodes */}
            {[...Array(15)].map((_, i) => (
              <circle
                key={`node-${i}`}
                cx={10 + Math.random() * 80}
                cy={10 + Math.random() * 80}
                r={0.8}
                fill="white"
                className={mounted ? `animate-pulse-${i % 3}` : ""}
                style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.8))" }}
              />
            ))}
          </svg>

          {/* Futuristic Resume UI Elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
            {/* Holographic Resume */}
            <div
              className={`w-24 h-32 relative mx-3 ${mounted ? "animate-float-slow" : ""}`}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "4px",
                boxShadow: "0 0 20px rgba(96, 165, 250, 0.4)",
              }}
            >
              {/* Resume Header */}
              <div className="w-full h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-sm"></div>

              {/* Resume Lines */}
              <div className="p-2 space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={`line-${i}`}
                    className={`h-1 rounded ${i === 0 ? "w-3/4" : "w-full"}`}
                    style={{
                      background: "rgba(255, 255, 255, 0.3)",
                      animation: mounted ? `pulse-line ${2 + i * 0.5}s infinite alternate` : "",
                    }}
                  ></div>
                ))}
              </div>

              {/* Scanning Effect */}
              {mounted && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(96, 165, 250, 0) 0%, rgba(96, 165, 250, 0.3) 50%, rgba(96, 165, 250, 0) 100%)",
                    backgroundSize: "100% 200%",
                    animation: "scan-effect 2s linear infinite",
                    height: "100%",
                  }}
                ></div>
              )}

              {/* AI Processing Indicator */}
              <div
                className={`absolute -right-2 -bottom-2 w-6 h-6 rounded-full flex items-center justify-center ${
                  mounted ? "animate-pulse" : ""
                }`}
                style={{
                  background: "radial-gradient(circle, rgba(96, 165, 250, 1) 0%, rgba(79, 70, 229, 1) 100%)",
                  boxShadow: "0 0 10px rgba(96, 165, 250, 0.8)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            {/* AI Brain Core */}
            <div
              className={`w-14 h-14 rounded-full relative mx-3 flex items-center justify-center ${
                mounted ? "animate-pulse-slow" : ""
              }`}
              style={{
                background: "radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(79, 70, 229, 0.8) 100%)",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
              }}
            >
              {/* Brain Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white opacity-80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              {/* Orbiting Particles */}
              {mounted && (
                <>
                  <div
                    className="absolute w-2 h-2 rounded-full bg-blue-300"
                    style={{
                      animation: "orbit 3s linear infinite",
                      transformOrigin: "7px 7px",
                      left: "calc(50% - 1px)",
                      top: "calc(50% - 1px)",
                      boxShadow: "0 0 5px rgba(96, 165, 250, 0.8)",
                    }}
                  ></div>
                  <div
                    className="absolute w-1.5 h-1.5 rounded-full bg-indigo-300"
                    style={{
                      animation: "orbit 4s linear infinite",
                      animationDelay: "0.5s",
                      transformOrigin: "7px 7px",
                      left: "calc(50% - 0.75px)",
                      top: "calc(50% - 0.75px)",
                      boxShadow: "0 0 5px rgba(139, 92, 246, 0.8)",
                    }}
                  ></div>
                </>
              )}
            </div>

            {/* Data Analysis Visualization */}
            <div
              className={`w-16 h-24 relative mx-3 ${mounted ? "animate-float-fast" : ""}`}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "4px",
                boxShadow: "0 0 15px rgba(139, 92, 246, 0.4)",
              }}
            >
              {/* Chart Bars */}
              <div className="absolute bottom-2 left-2 right-2 flex items-end justify-around h-16">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={`bar-${i}`}
                    className="w-1.5 bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t"
                    style={{
                      height: mounted ? `${30 + Math.random() * 70}%` : "30%",
                      transition: "height 1s ease-in-out",
                      animation: mounted ? `bar-height-${i} 3s infinite alternate` : "",
                      boxShadow: "0 0 5px rgba(96, 165, 250, 0.5)",
                    }}
                  ></div>
                ))}
              </div>

              {/* Header */}
              <div className="w-full h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-sm"></div>
            </div>
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <h1
              className="text-white text-3xl font-bold mb-1 text-center"
              style={{
                textShadow: "0 0 10px rgba(96, 165, 250, 0.8)",
                letterSpacing: "1px",
              }}
            >
              AI Resume
            </h1>
            <p
              className="text-blue-200 text-sm"
              style={{
                textShadow: "0 0 5px rgba(96, 165, 250, 0.5)",
                letterSpacing: "0.5px",
              }}
            >
              Next-Gen Recruitment Platform
            </p>
          </div>
        </div>

       

<Card className="w-full border border-black shadow-lg">
  <CardHeader className="space-y-1">
    <CardTitle className="text-2xl font-semibold tracking-tight text-black">
      Welcome back
    </CardTitle>
    <CardDescription className="text-sm text-black">
      Enter your credentials to access your account
    </CardDescription>
  </CardHeader>

  <CardContent className="space-y-4">
    {/* Email */}
    <div className="space-y-1">
      <label htmlFor="email" className="text-sm font-medium text-black">
        Email
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 flex items-center justify-center w-4 h-4">
          @
        </span>
        <Input
          type="email"
          name="email"
          placeholder="name@example.com"
          className="pl-10 h-11"
        />
      </div>
    </div>

    {/* Password */}
    <div className="space-y-1">
      <label htmlFor="password" className="text-sm font-medium text-black">
        Password
      </label>
      <div className="relative">
        <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
        <Input
          type="password"
          name="password"
          placeholder="••••••••"
          className="pl-10 h-11"
        />
      </div>
    </div>

    {/* Login Button */}
    <Button className="w-full h-11 bg-black text-white hover:bg-neutral-800">
      Sign In
    </Button>

    {/* OR Separator */}
    <Separator />
    <Button variant="outline" className="w-full h-11 text-black border-black hover:bg-gray-100">
      <GoogleIcon /> Sign in with Google
    </Button>

    {/* Sign Up Link */}
    <div className="text-center text-sm text-black">
      Don’t have an account?{" "}
      <Link to="/signup" className="font-medium text-black underline hover:text-blue-600">
        Sign up
      </Link>
    </div>
  </CardContent>
</Card>

      </div>
 

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes float-keyword {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -10px) rotate(5deg); }
          50% { transform: translate(40px, 0px) rotate(0deg); }
          75% { transform: translate(20px, 10px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        
        @keyframes scan-effect {
          0% { background-position: 0 -100%; }
          100% { background-position: 0 200%; }
        }
        
        @keyframes pulse-line {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(10px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(10px) rotate(-360deg); }
        }
        
        @keyframes bar-height-0 {
          0%, 100% { height: 30%; }
          50% { height: 70%; }
        }
        
        @keyframes bar-height-1 {
          0%, 100% { height: 50%; }
          50% { height: 90%; }
        }
        
        @keyframes bar-height-2 {
          0%, 100% { height: 40%; }
          50% { height: 60%; }
        }
        
        @keyframes bar-height-3 {
          0%, 100% { height: 70%; }
          50% { height: 40%; }
        }
        
        @keyframes bar-height-4 {
          0%, 100% { height: 60%; }
          50% { height: 80%; }
        }
        
        @keyframes draw-0 {
          0% { stroke-dasharray: 0 1000; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 1000 1000; stroke-dashoffset: 0; }
        }
        
        @keyframes draw-1 {
          0% { stroke-dasharray: 0 1000; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 1000 1000; stroke-dashoffset: 200; }
        }
        
        @keyframes draw-2 {
          0% { stroke-dasharray: 0 1000; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 1000 1000; stroke-dashoffset: 400; }
        }
        
        @keyframes draw-3 {
          0% { stroke-dasharray: 0 1000; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 1000 1000; stroke-dashoffset: 600; }
        }
        
        @keyframes draw-4 {
          0% { stroke-dasharray: 0 1000; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 1000 1000; stroke-dashoffset: 800; }
        }
        
        .animate-draw-0 {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-0 20s linear infinite;
        }
        
        .animate-draw-1 {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-1 25s linear infinite;
        }
        
        .animate-draw-2 {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-2 30s linear infinite;
        }
        
        .animate-draw-3 {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-3 35s linear infinite;
        }
        
        .animate-draw-4 {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-4 40s linear infinite;
        }
      `}</style>
    </div>
  )
}
