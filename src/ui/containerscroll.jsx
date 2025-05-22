"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ContainerScroll = ({
 
  children
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative  mt-[-20rem] mb-[-16rem] pointer-events-none"
      ref={containerRef}>
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}>
        
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};



export const Card = ({
  rotate,
  scale,
  children
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 0 2px rgba(255, 165, 0, 0.3), 0 10px 30px rgba(255, 165, 0, 0.5), 0 40px 60px rgba(255, 140, 0, 0.3)",
      }}
      className="max-w-5xl -mt-8 mx-auto h-[28rem] md:h-[36rem] w-full border-2 border-orange-400 p-1 md:p-2 bg-[#222222] rounded-[30px] shadow-orange-500/40"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100">
        {children}
      </div>
    </motion.div>
  );
};
