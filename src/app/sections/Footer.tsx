"use client";

import footer from "../assets/photos/footer.png";
import footerMobile from "../assets/photos/footer-mobile.png";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { linkedUrl, googleUrl } from "../utility/links";

export const Footer = () => {
  const { scrollYProgress } = useScroll();

  const boxY = useTransform(scrollYProgress, [0, 1.2], [2700, -500]);

  const physics = { damping: 15, mass: 0.17, stiffness: 65 }; // easing of smooth scroll

  const boxSpring = useSpring(boxY, physics); // apply easing to the negative scroll value

  return (
    <div
      className="lg:h-screen lg:relative overflow-hidden w-full "
      id="contact"
    >
      <div className="h-[23.75em] lg:h-screen hidden lg:flex">
        <Image
          src={footer}
          alt="footerImage"
          className="w-full h-full object-cover"
        />
      </div>

      {/* container */}

      <motion.div
        className="hidden 
        lg:grid grid-cols-1 lg:grid-cols-2 w-full  bg-black px-4 lg:px-[2.5em]  z-10 relative pt-[7em] 
            lg:h-screen lg:top-[-33.75em]"
        style={{
          y: boxSpring,
        }}
      >
        {/* left side */}
        <div className="pr-[16em]">
          <div>
            <h1 className="text-white text-mh1 lg:text-h1 mb-10 mt-20 lg:mt-0">
              Skontaktuj się
            </h1>
            <div className="text-white text-mh2 lg:text-h2 ">
              Napisz lub zadzwoń aby umówić spotkanie na którym odpowiem na
              wszystkie Twoje pytania.
            </div>
          </div>
          <div className="text-white/[0.3] text-footer mt-[10em] hidden lg:block">
            {`© 2024 Filip Płócienniczak. Wszystkie prawa zastrzeżone. Site by `}
            <span>
              <a target="_blank" href="https://dribbble.com/msz">
                msz
              </a>
            </span>
          </div>
        </div>

        {/* right side */}
        <div className="flex pl-[8em] w-full ">
          <div className=" ">
            <div className="flex flex-col lg:flex-row mb-[3em] justify-between lg:items-center lg:justify-normal  ">
              <div className="text-white/[0.5] text-mbody lg:text-body w-[12em]">
                Email
              </div>

              <div className="text-white text-mh2 lg:text-h2 ">
                filip.plocienniczak@notus.pl
              </div>
            </div>

            <div className="flex flex-col lg:flex-row py-[3em]  justify-between lg:items-center lg:justify-normal border-y border-[#EAEAEA]/[0.15] ">
              <div className="text-white/[0.5] text-mbody lg:text-body w-[12em] ">
                Telefon
              </div>
              <div className="text-white text-mh2 lg:text-h2 ">
                +48 510 034 402
              </div>
            </div>

            <div className="flex flex-col lg:flex-row mt-[3em]  justify-between lg:items-center lg:justify-normal ">
              <div className="text-white/[0.5] text-mbody lg:text-body  w-[12em]">
                Social
              </div>
              <div className="text-white   flex gap-[0.5em]">
                <a target="_blank" href={linkedUrl}>
                  {/* hoover */}
                  <div className="relative h-full flex flex-col">
                    <div className="relative w-[2em] h-[2em] rounded-full overflow-hidden group">
                      <div className="bg-black border-[0.125em] border-white w-[2em] h-[2em] rounded-full flex justify-center items-center">
                        <div className="absolute bottom-[-2em] w-[2em] h-[2em] bg-white rounded-full flex justify-center items-center transition-all ease-in-out duration-500 transform group-hover:bottom-0" />
                        <div className="text-white text-menu font-menu absolute group-hover:text-black transition-all ease-in-out duration-250">
                          {/* icon */}
                          <div className="h-[2em] w-[2em] flex justify-center items-center">
                            <svg
                              width="0.875em"
                              height="0.875em"
                              viewBox="0 0 14 14"
                              fill="none"
                              className="absolute"
                            >
                              <path
                                d="M3.13438 14H0.23125V4.65312H3.13438V14ZM1.68125 3.37813C0.753125 3.37813 0 2.60938 0 1.68125C0 0.753125 0.753125 0 1.68125 0C2.60938 0 3.3625 0.753125 3.3625 1.68125C3.3625 2.60938 2.60938 3.37813 1.68125 3.37813ZM14 14H11.1031V9.45C11.1031 8.36562 11.0813 6.975 9.59375 6.975C8.08438 6.975 7.85313 8.15312 7.85313 9.37187V14H4.95312V4.65312H7.7375V5.92812H7.77812C8.16562 5.19375 9.1125 4.41875 10.525 4.41875C13.4625 4.41875 14.0031 6.35313 14.0031 8.86563V14H14Z"
                                className=" fill-white group-hover:fill-black transition-colors duration-250"
                              />
                            </svg>
                          </div>
                          {/*  */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </a>
                <a target="_blank" href={googleUrl}>
                  {/* hoover */}
                  <div className="relative h-full flex flex-col ">
                    <div className="relative w-[2em] h-[2em] rounded-full overflow-hidden group">
                      <div className="bg-black border-[0.125em] border-white w-[2em] h-[2em] rounded-full flex justify-center items-center">
                        <div className="absolute bottom-[-2em] w-[2em] h-[2em] bg-white rounded-full flex justify-center items-center transition-all ease-in-out duration-500 transform group-hover:bottom-0" />
                        <div className="text-white text-menu font-menu absolute group-hover:text-black transition-all ease-in-out duration-250">
                          {/* icon */}
                          <div className="h-[2em] w-[2em] flex justify-center items-center">
                            <svg
                              width="0.875em"
                              height="0.875em"
                              viewBox="0 0 16 16"
                              fill="none"
                              className="absolute"
                            >
                              <path
                                d="M15.625 8.18125C15.625 12.6031 12.5969 15.75 8.125 15.75C3.8375 15.75 0.375 12.2875 0.375 8C0.375 3.7125 3.8375 0.25 8.125 0.25C10.2125 0.25 11.9688 1.01562 13.3219 2.27813L11.2125 4.30625C8.45312 1.64375 3.32188 3.64375 3.32188 8C3.32188 10.7031 5.48125 12.8938 8.125 12.8938C11.1938 12.8938 12.3438 10.6938 12.525 9.55313H8.125V6.8875H15.5031C15.575 7.28437 15.625 7.66562 15.625 8.18125Z"
                                className=" fill-white group-hover:fill-black transition-colors duration-250"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* mobile */}
      <div>
        <div className="h-[30em] relative  top-10">
          <Image
            src={footerMobile}
            alt="footerImage"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center bg-black px-4 lg:px-10  lg:h-[500px] relative  lg:top-[-500px] z-10 lg:hidden ">
          <div className="">
            <div className="h-[181px] w-[369px]">
              <h1 className="text-white text-mh1 lg:text-h1 mb-10 mt-20 lg:mt-0">
                Skontaktuj się
              </h1>
              <div className="text-white text-mh2 lg:text-h2 ">
                Napisz lub zadzwoń aby umówić spotkanie na którym odpowiem na
                wszystkie Twoje pytania.
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center mt-20 lg:mt-0">
            <div className="w-[543px] lg:h-[294px]">
              <div className="flex flex-col lg:flex-row mb-12 px-6 justify-between lg:items-center lg:justify-normal">
                <div className="text-white/[0.5] text-mbody lg:text-body w-20">
                  Email
                </div>
                <div className="text-white text-mh2 lg:text-h2 lg:ml-20">
                  filip.plocienniczak@notus.pl
                </div>
              </div>
              <div className="flex flex-col lg:flex-row py-12 px-6 justify-between lg:items-center border-y border-[#EAEAEA]/[0.15] lg:justify-normal">
                <div className="text-white/[0.5] text-mbody lg:text-body w-20 ">
                  Telefon
                </div>
                <div className="text-white text-mh2 lg:text-h2 lg:ml-20">
                  +48 510 034 402
                </div>
              </div>
              <div className="flex flex-col lg:flex-row mt-12 px-6 justify-between lg:items-center lg:justify-normal">
                <div className="text-white/[0.5] text-mbody lg:text-body w-20">
                  Social
                </div>
                <div className="text-white text-mh2 lg:text-h2 flex gap-2 mt-2 lg:ml-20">
                  <a target="_blank" href={linkedUrl}>
                    <div className="h-8 w-8 rounded-full bg-transparent border-2 border-white flex items-center justify-center">
                      <svg
                        width="0.65em"
                        height="0.65em"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="absolute"
                      >
                        <path
                          d="M3.13438 14H0.23125V4.65312H3.13438V14ZM1.68125 3.37813C0.753125 3.37813 0 2.60938 0 1.68125C0 0.753125 0.753125 0 1.68125 0C2.60938 0 3.3625 0.753125 3.3625 1.68125C3.3625 2.60938 2.60938 3.37813 1.68125 3.37813ZM14 14H11.1031V9.45C11.1031 8.36562 11.0813 6.975 9.59375 6.975C8.08438 6.975 7.85313 8.15312 7.85313 9.37187V14H4.95312V4.65312H7.7375V5.92812H7.77812C8.16562 5.19375 9.1125 4.41875 10.525 4.41875C13.4625 4.41875 14.0031 6.35313 14.0031 8.86563V14H14Z"
                          className=" fill-white group-hover:fill-black transition-colors duration-250"
                        />
                      </svg>
                    </div>
                  </a>

                  <a target="_blank" href={googleUrl}>
                    <div className="h-8 w-8 rounded-full bg-transparent border-2 border-white flex items-center justify-center">
                      <svg
                        width="0.65em"
                        height="0.65em"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="absolute"
                      >
                        <path
                          d="M15.625 8.18125C15.625 12.6031 12.5969 15.75 8.125 15.75C3.8375 15.75 0.375 12.2875 0.375 8C0.375 3.7125 3.8375 0.25 8.125 0.25C10.2125 0.25 11.9688 1.01562 13.3219 2.27813L11.2125 4.30625C8.45312 1.64375 3.32188 3.64375 3.32188 8C3.32188 10.7031 5.48125 12.8938 8.125 12.8938C11.1938 12.8938 12.3438 10.6938 12.525 9.55313H8.125V6.8875H15.5031C15.575 7.28437 15.625 7.66562 15.625 8.18125Z"
                          className=" fill-white group-hover:fill-black transition-colors duration-250"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white/[0.3] text-[12px] mt-[87px] text-center lg:text-left lg:hidden mb-10">
            {`© 2024 Filip Płócienniczak. Wszystkie prawa zastrzeżone. Site by `}

            <a target="_blank" href="https://dribbble.com/msz">
              msz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
