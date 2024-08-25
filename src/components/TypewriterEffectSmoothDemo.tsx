"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
      
  const words = [
    {
      text: "Music",
    },
    {
      text: "is",
    },
    {
      text: "the",
    },
    {
      text: "new",
    },
    {
      text: "trend.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
