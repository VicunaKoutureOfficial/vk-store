// "use client";
import { motion } from "framer-motion";
import React, { Suspense } from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
export function Hero() {
  // const FADE_UP_ANIMATION_VARIANTS = {
  //   hidden: { opacity: 0, y: 10 },
  //   show: { opacity: 1, y: 0, transition: { type: "spring" } },
  // };

  return (


    <video className=" w-auto min-w-full min-h-full max-w-screen" autoPlay loop muted>
      <source src="vkvid.webm" type="video/webm" />
    </video>
  );
}
