import { Link } from "react-router-dom";
import Tile from "../ui/tile";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "../ui/Uicomp";

export default function JobSeekers() {
  return (
    <main className="w-full relative">
      {/* Grid background */}
      <section className="w-full grid grid-cols-20 h-screen bg-whi overflow-y-clip">
        {Array.from(Array(20 * 12), (i) => (
          <Tile key={i} />
        ))}
      </section>
      <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-10 mb-10 font-poppins">
         <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center max-w-3xl mx-auto mb-14 pt-4"
                >
                  
        
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                    <span className="text-blue-">Your goals</span> <br />
                    <span className="text-transparent bg-clip-text  bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                      deserve game-changers.
                    </span><br />
                    <span className="text-foreground">We find them with <span className="text-primary">Zordie</span>.</span>
                  </h1>
        
                  <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    AI-powered, verified hiring that eliminates fake resumes and builds trust into your hiring process.
                  </p>
        
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/get-started"
                      className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition text-base font-medium shadow-md"
                    >
                      Get Started
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
        
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full h-12 px-8 text-base font-medium border-muted"
                    >
                      Book a Demo
                    </Button>
                  </div>
        
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
    </main>
  );
}
