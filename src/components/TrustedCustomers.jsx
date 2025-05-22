import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import {
  Globe,
  Tv2,
  Store,
  Apple,
  Book,
  Landmark,
  Server,
} from "lucide-react";

const portfolioItems = [
  {
    name: "Google",
    category: "Search & Cloud",
    website: "https://google.com",
    icon: <Globe size={40} />,
    backgroundClassName: "bg-[#4285F4]",
  },
  {
    name: "Meta",
    category: "Social Media & Metaverse",
    website: "https://meta.com",
    icon: <Tv2 size={40} />,
    backgroundClassName: "bg-[#4267B2]",
  },
  {
    name: "Amazon",
    category: "E-commerce & Cloud",
    website: "https://amazon.com",
    icon: <Store size={40} />,
    backgroundClassName: "bg-[#FF9900]",
  },
  {
    name: "Apple",
    category: "Hardware & Ecosystem",
    website: "https://apple.com",
    icon: <Apple size={40} />,
    backgroundClassName: "bg-[#A2AAAD]",
  },
  {
    name: "Netflix",
    category: "Streaming Entertainment",
    website: "https://netflix.com",
    icon: <Book size={40} />,
    backgroundClassName: "bg-[#E50914]",
  },
  {
    name: "Microsoft",
    category: "Software & Cloud",
    website: "https://microsoft.com",
    icon: <Landmark size={40} />,
    backgroundClassName: "bg-[#737373]",
  },
];

export default function TrustedCustomer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 border border-white/[0.2]">
      <div className="col-span-2 flex items-center justify-center border border-white/[0.2] text-white text-center p-6">
        <h1 className="text-2xl font-semibold text-left shimmer">
          Your <span className="shimmer">Future,</span>
          <br />
          Your Tech Giants.
        </h1>
      </div>

      {portfolioItems.map((item) => (
        <Card
          key={item.name}
          title={item.name}
          icon={item.icon}
          officialLink={item.website}
          category={item.category}
          backgroundClassName={item.backgroundClassName}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName={item.backgroundClassName}
            colors={[[125, 211, 252]]}
          />
        </Card>
      ))}
    </div>
  );
}

const Card = ({
  title,
  icon,
  backgroundClassName,
  children,
  officialLink,
  category,
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={officialLink}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group/canvas-card relative flex items-center justify-center border border-white/[0.2] max-w-sm w-full mx-auto h-[12rem] z-20 ${backgroundClassName} cursor-pointer`}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex items-center justify-center h-full w-full">
        <div className="flex justify-center items-center text-center group-hover/canvas-card:-translate-y-4 text-white group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto z-20 font-neue">
          {icon}
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex-col flex items-center dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 z-10 text-black mt-4 font-neue font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
          <hr className="w-[60%]" />
          <span className="text-sm text-center">{category}</span>
        </div>
      </div>
    </a>
  );
};
