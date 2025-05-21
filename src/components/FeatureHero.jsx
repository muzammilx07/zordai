import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

// Counter hook
const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseFloat(target);
    if (start === end) return;

    const increment = end / (duration / 50);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(parseFloat(start.toFixed(1)));
    }, 50);

    return () => clearInterval(counter);
  }, [target, duration]);

  return count;
};

const StatCard = ({ value, label, isVisible }) => {
  const count = useCountUp(isVisible ? value : 0);
  return (
    <div className="flex flex-col items-center text-center px-4">
      <h3 className="text-4xl font-extrabold text-black">
        {value % 1 === 0 ? Math.floor(count) : count}%
      </h3>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
};
const FeatureHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full bg-white mb-12">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center py-20 px-4 ">
        <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full">
          Innovative AI Solutions
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Transforming Recruitment with{" "}
          <span className="text-blue-600 underline underline-offset-4">
            Advanced AI
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Our cutting-edge platform verifies talent authenticity, eliminates fake resumes, and streamlines your hiring process with precision.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition">
            Get Started Free
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition">
            View Pricing
          </button>
        </div>
      </div>

      {/* Stats */}
     {/* Stats */}
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 px-4">
        <div className="flex flex-col items-center text-center border-r border-gray-300 last:border-none">
          <StatCard value={74} label="Faster Hiring" isVisible={isInView} />
        </div>
        <div className="flex flex-col items-center text-center border-r border-gray-300 last:border-none">
          <StatCard value={60} label="Cost Reduction" isVisible={isInView} />
        </div>
         <div className="flex flex-col items-center text-center">
          <StatCard value={90} label="Verification Accuracy" isVisible={isInView} />
        </div>
        <div className="flex flex-col items-center text-center">
          <StatCard value={95} label="Better Candidates" isVisible={isInView} />
        </div>
      </div>
    </div>
  );
};

export default FeatureHero;

