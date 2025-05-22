import React from "react";
import { motion } from "framer-motion";
import { Badge, Button } from "../ui/Uicomp";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Tile from "../ui/tile";
import { ContainerScroll } from "../ui/containerscroll";

export default function Hero() {
  return (
    <section className="w-full pt-10 md:pt-22 lg:pt-20 overflow-hidden bg-background text-foreground">
      <div className="container mx-auto relative">

        {/* Background Grid */}
        <section className="grid grid-cols-20 h-[60vh] bg-white overflow-clip mx-auto pointer-events-auto">
          {Array.from({ length: 20 * 12 }).map((_, i) => (
            <Tile key={i} />
          ))}
        </section>

        {/* Foreground Content with only buttons interactive */}
        <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-10 pb-14 font-poppins">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto pb-14 pt-40"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              <span className="text-blue-">Your goals</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r py-4 from-purple-500 via-orange-500 to-yellow-500 [text-shadow:0_0_rgba(0,0,0,0.1)] ">
                deserve game-changers.
              </span>
              <br />
              <span className="text-foreground bg-white">
                We find them with <span className="text-primary text-orange-500">Zordie</span>.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto ">
              AI-powered, verified hiring that eliminates fake resumes and
              builds trust into your hiring process.
            </p>

            {/* Buttons with pointer-events re-enabled */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <Link
                to="/get-started"
                className="flex items-center bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-400 transition text-base font-medium shadow-md cursor-pointer"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 text-base font-medium border-muted cursor-pointer"
              >
                Book a Demo
              </Button>
            </div>

            {/* Feature List */}
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
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
      </div>

      {/* Image Showcase Section */}
      
      <ContainerScroll>
             <img
                src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
               alt="hero"
               height={720}
               width={1400}
               className="mx-auto rounded-2xl object-cover h-full object-left-top"
               draggable={false} />
           </ContainerScroll>
      
    </section>
  );
}
