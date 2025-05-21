import { ArrowRightIcon } from "lucide-react";
import  AnimatedShinyText  from "./animated-shiny-text";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex items-center justify-center">
      <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 ">
        <AnimatedShinyText className="shiny-text inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className="mr-1">✨ Introducing ZordAI Hire</span>
          <ArrowRightIcon className="size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
