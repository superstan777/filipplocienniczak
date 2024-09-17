"use client";
import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";

interface Props {
  runAnimation: boolean;
  handleMenu: () => void;
}

export const Header: React.FC<Props> = ({ runAnimation, handleMenu }) => {
  const [scrolled, setScrolled] = useState(false);

  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (sectionId: string, offset: number) => {
    lenis?.scrollTo(sectionId, {
      lerp: 0.001,
      duration: 2,
      offset: offset,

      easing: function easeInOutQuart(x: number): number {
        return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
      },
    });
  };

  return (
    <>
      {/* MOBILE */}
      <div className="flex justify-between items-end text-[12px] font-menu leading-120 px-4 lg:hidden sticky top-0 z-[60] bg-bg pt-10 pb-6">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-[6px]">
            <div className="bg-black w-8 h-8 rounded-full flex justify-center items-center">
              <div className="text-white absolute">F</div>
            </div>

            <div className="bg-transparent border-2 border-black w-8 h-8 rounded-full flex justify-center items-center">
              <div className="text-black absolute">P</div>
            </div>
          </div>

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleMenu}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1.8001H0V0.600098H12V1.8001Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.60015H0V5.40015H12V6.60015Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 11.4002H0V10.2002H12V11.4002Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      {/* DESKTOP */}

      <div
        className={`lg:flex justify-between overflow-hidden items-end group text-menu font-menu w-full leading-120 px-[2.5em] lg:items-center min-h-[3em]  hidden z-50 bg-bg fixed     
        ${runAnimation ? "top-0 " : "top-[-150px]"}
        ${scrolled ? "pt-0 pb-0" : "pt-8 pb-12"}

        

        transition-all ease-in-out duration-1000 transform
         `}
      >
        <div className="relative">
          <div
            className={`bg-transparent absolute border-[0.125em] border-black w-[2em] h-[2em] rounded-full flex justify-center items-center ${
              scrolled ? "left-[2.5em]" : "left-0"
            } transition-all ease-in-out duration-500 transform`}
          >
            <div className="text-black absolute">P</div>
          </div>
          <div className="bg-black w-[2em] h-[2em] rounded-full flex justify-center items-center">
            <div className="text-white absolute">F</div>
          </div>
        </div>
        <div
          className={`${scrolled ? " w-full" : " w-0 left-0 "}
        transition-all ease-in-out duration-500 transform
        `}
        ></div>

        <div
          className={`2xl:hidden flex items-center   relative  cursor-pointer
          ${
            scrolled
              ? "w-[22em] justify-between"
              : " w-full left-0 justify-around "
          } 
          transition-all ease-in-out duration-1000 transform`}
        >
          <div onClick={() => scrollTo("#about", -60)}> O MNIE</div>

          <div onClick={() => scrollTo("#whatIDo", -60)}>CO ROBIĘ</div>

          <div onClick={() => scrollTo("#contact", 40)}>KONTAKT</div>
        </div>

        <div
          className={` hidden 2xl:flex 3xl:hidden items-center   relative  cursor-pointer
          ${
            scrolled
              ? "w-[22em] justify-between"
              : " w-full left-0 justify-around "
          } 
          transition-all ease-in-out duration-1000 transform`}
        >
          <div onClick={() => scrollTo("#about", -100)}> O MNIE</div>

          <div onClick={() => scrollTo("#whatIDo", -120)}>CO ROBIĘ</div>

          <div onClick={() => scrollTo("#contact", 40)}>KONTAKT</div>
        </div>

        <div
          className={` hidden 3xl:flex items-center   relative  cursor-pointer
          ${
            scrolled
              ? "w-[22em] justify-between"
              : " w-full left-0 justify-around "
          } 
          transition-all ease-in-out duration-1000 transform`}
        >
          <div onClick={() => scrollTo("#about", -160)}> O MNIE</div>

          <div onClick={() => scrollTo("#whatIDo", -220)}>CO ROBIĘ</div>

          <div onClick={() => scrollTo("#contact", 40)}>KONTAKT</div>
        </div>

        <div
          className={`relative ${
            scrolled ? "left-[72px] " : "left-0"
          } transition-all ease-in-out duration-1000 transform`}
        >
          <div
            className={`bg-transparent border-[0.125em] border-black w-[2em] h-[2em] rounded-full flex justify-center items-center relative ${
              scrolled ? "left-[10em] " : "left-0"
            } transition-all ease-in-out duration-1000 transform`}
          >
            <div className="text-black absolute">P</div>
          </div>
        </div>
      </div>
    </>
  );
};
