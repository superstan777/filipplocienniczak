"use client";

import { useLenis } from "lenis/react";

interface Props {
  handleMenu: () => void;
}

export const Menu: React.FC<Props> = ({ handleMenu }) => {
  const lenis = useLenis();

  const scrollTo = (sectionId: string, offset: number) => {
    lenis?.scrollTo(sectionId, {
      lerp: 0.001,
      duration: 2,
      offset: offset,

      easing: function easeInOutQuart(x: number): number {
        return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
      },
    });

    handleMenu();
  };

  return (
    <div className="fixed z-50 w-screen h-screen bg-bg gap-10 items-center  flex flex-col pt-16 text-mh2 ">
      <div onClick={() => scrollTo("#about", -120)}> O MNIE</div>

      <div onClick={() => scrollTo("#whatIDo", -120)}>CO ROBIĘ</div>

      <div onClick={() => scrollTo("#contact", 440)}>KONTAKT</div>
    </div>
  );
};
