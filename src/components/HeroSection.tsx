import React from "react";
import { Spotlight } from "./ui/spotlight";
import { MovingBorderDemo } from "./MovingBorderDemo";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";
export function HeroSection() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="pink"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 ">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <TypewriterEffectSmoothDemo /> {/*  <--- Heading */}
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-350 max-w-lg text-center mx-auto">
          Discover the rythem of your life with our tracks, where every beat tells a Story.
           < span className='text-pink-400'> Let the Music move You.</span>
        </p>
        <div className="my-8 p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 text-center">
            <MovingBorderDemo /> {/* <------ Button */}
        </div>
      </div>
    </div>
  );
}
