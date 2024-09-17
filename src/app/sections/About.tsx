"use client";
import about from "../assets/photos/about.png";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const About = () => {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.55], [0, -150]);
  const textY = useTransform(scrollYProgress, [0, 0.55], [150, -150]);

  // xl   const textY = useTransform(scrollYProgress, [0, 0.55], [350, -150]);

  const physics = { damping: 15, mass: 0.17, stiffness: 65 }; // easing of smooth scroll
  const photoSpring = useSpring(imageY, physics); // apply easing to the negative scroll value
  const textSpring = useSpring(textY, physics); // apply easing to the negative scroll value

  return (
    <div
      id="about"
      className="lg:h-screen flex items-center
      mt-[10em] lg:mt-0"
    >
      <div className="gap-y-[56px] flex flex-col lg:hidden">
        <div className="gap-y-6 flex flex-col px-4  text-mh2">
          <p className="">
            Od 2011 roku działam jako niezależny pośrednik finansowy i z
            sukcesami obsługuję klientów z polecenia, od deweloperów i
            pośredników nieruchomości. Aktualnie współpracuję z grupą Notus
            Finanse.
          </p>
          <p className="">
            Jeśli szukasz finansowania nieruchomości lub planujesz budować dom -
            jesteś w dobrym miejscu, pomogę Ci na każdym etapie. Wszystkie moje
            usługi są bezpłatne, a moje wynagrodzenie pokryje bank.
          </p>
        </div>

        <div className=" h-[624px] ">
          <Image
            src={about}
            alt="aboutImage"
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      <div className="lg:grid grid-cols-3 grid-rows-2  pl-[2.5em] hidden ">
        <motion.div
          style={{
            y: textSpring,
          }}
        >
          <div className="col-span-1 row-span-1 pt-20 text-h2">
            Od 2011 roku działam jako niezależny pośrednik finansowy i z
            sukcesami obsługuję klientów z polecenia, od deweloperów i
            pośredników nieruchomości. Aktualnie współpracuję z grupą Notus
            Finanse.
          </div>
        </motion.div>

        <div className=" col-span-1 row-span-1"></div>

        <div className="col-span-1 row-span-2    overflow-hidden ">
          <motion.div
            style={{
              y: photoSpring,
            }}
          >
            <Image
              src={about}
              alt="aboutImage"
              className="w-full h-full object-cover scale-110 "
            />
          </motion.div>
        </div>

        <div className="col-span-1 row-span-1"></div>
        <motion.div
          style={{
            y: textSpring,
          }}
        >
          <div className="col-span-1 row-span-1 pr-[2.5em] text-h2 ">
            Jeśli szukasz finansowania nieruchomości lub planujesz budować dom -
            jesteś w dobrym miejscu, pomogę Ci na każdym etapie.&nbsp;
            <span className="underline">
              Wszystkie moje usługi są bezpłatne
            </span>
            , a moje wynagrodzenie pokryje bank.
          </div>
        </motion.div>
      </div>
    </div>
  );
};
