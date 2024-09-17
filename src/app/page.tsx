"use client";
import { About } from "./sections/About";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Process } from "./sections/Process";
import { Reviews } from "./sections/Reviews";
import { WhatIDo } from "./sections/WhatIDo";
import { SmoothScroll } from "./components/SmoothScroll";
import { Header } from "./components/Header";
import { useState, useEffect } from "react";
import { Menu } from "./components/Menu";

export default function Home() {
  const [runAnimation, setRunAnimation] = useState(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setRunAnimation(true);
    }, 2000); // 500 milliseconds = 0.5 second

    return () => {
      clearTimeout(introTimer);
    };
  }, []);

  const handleMenu = () => {
    setIsMenu((prevState) => !prevState);
  };

  return (
    <SmoothScroll>
      <>
        <Header runAnimation={runAnimation} handleMenu={handleMenu} />
        {isMenu && <Menu handleMenu={handleMenu} />}
        <div className="gap-y-[160px] 3xl:gap-y-[260px] flex flex-col">
          <Hero runAnimation={runAnimation} />
          <About />
          <WhatIDo />
          <Process />
          <Reviews />
          <Footer />
        </div>
      </>
    </SmoothScroll>
  );
}
