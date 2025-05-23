import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LogoMarquee = ({ logos, speed = 70 }) => (
  <div className="w-full  py-6">
    <div className="max-w-6xl mx-auto px-4 ">
      

      {/* Marquee container */}
      <div className="border-2 border-gray-100 py-6 overflow-hidden shadow-lg shadow-orange-500/20">
        <Marquee speed={speed} pauseOnHover gradient={false}>
          {logos.map(({ name, src }, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center"
              style={{ width: 70, height: 40 }}
            >
              <img
                src={src}
                alt={name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  </div>
);

function MarqueePage() {
  const [logos, setLogos] = useState([]);

useEffect(() => {
  const modules = import.meta.glob("../assets/*.{svg,png}", { eager: true });
  const logosArray = Object.entries(modules).map(([path, module]) => {
    const name = path.split("/").pop().replace(/\.(svg|png)$/, "");
    return { name, src: module.default };
  });
  setLogos(logosArray);
}, []);


  if (logos.length === 0) return <div>Loading...</div>;

  return (
    <div className="min-h-content bg-white items-center justify-center flex flex-col">
        {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold text-center text-gray-800">
        Trusted by the best in the industry
      </h2>
      <LogoMarquee logos={logos} speed={70} />
    </div>
  );
}

export default MarqueePage;
