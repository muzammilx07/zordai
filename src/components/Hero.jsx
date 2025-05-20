import React from "react";
import { motion } from "framer-motion";
import { Badge, Button } from "../ui/Uicomp";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Background grid */}
        <div
          className="absolute inset-0 -z-10 h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 110%)",
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium">
            Launching Soon
          </Badge>

          {/* Gradient text */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--foreground)), hsl(var(--foreground) / 0.7))",
            }}
          >
            Elevate Your Workflow with SaaSify
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            An AI-powered verified hiring platform that eliminates fake resumes and brings trust to the hiring process.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>

            <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base">
              Book a Demo
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>14-day trial</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="size-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
             <img
      src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
      alt="ZordAI dashboard"
      className="w-full h-auto"
    />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
          <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
        </motion.div>
      
    </section>
  );
}
