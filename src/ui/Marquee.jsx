import React from "react";

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  style = {},
  ...props
}) {
  // Repeat the children `repeat` times for infinite scrolling effect
  const repeated = Array.from({ length: repeat }).map((_, i) => (
    <div
      key={i}
      className={`flex shrink-0 justify-around gap-[var(--gap)] ${
        vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row"
      } ${pauseOnHover ? "group-hover:animation-play-state-paused" : ""} ${
        reverse ? "animation-direction-reverse" : ""
      }`}
    >
      {children}
    </div>
  ));

  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 gap-[var(--gap)] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
      style={{ "--duration": "40s", "--gap": "1rem", ...style }}
    >
      {repeated}
    </div>
  );
}
