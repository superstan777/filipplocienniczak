"use client";

import hero from "../assets/photos/hero.png";
import heroMobile from "../assets/photos/hero-mobile.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HeroContent } from "../components/HeroContent";

interface Props {
  runAnimation: boolean;
}

export const Hero: React.FC<Props> = ({ runAnimation }) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 500); // 500 milliseconds = 0.5 second

    return () => {
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <>
      <div className="h-screen">
        <div className="relative w-full h-screen overflow-hidden lg:block hidden ">
          <div className="hidden lg:block h-screen">
            <div
              className={`absolute inset-0 bg-white transition-opacity duration-250 
        ${showImage ? "opacity-0" : "opacity-100"}`}
            />
            <Image
              priority={true}
              src={hero}
              alt="hero image"
              className={`relative w-full object-cover
        ${showImage ? "scale-[1] opacity-100" : "scale-[1.2] opacity-0"} 
        ${runAnimation ? "lg:h-4/6" : "h-full top-0"}  

        transition-all ease-in-out duration-750 transform
         `}
            />
          </div>
        </div>

        <div className=" mb-[36px] lg:mb-[92px] overflow-hidden lg:hidden">
          <Image
            priority={true}
            src={heroMobile}
            alt="heroImage"
            className=" h-full object-cover  "
          />
        </div>
        <HeroContent runAnimation={runAnimation} />
      </div>
    </>
  );
};
