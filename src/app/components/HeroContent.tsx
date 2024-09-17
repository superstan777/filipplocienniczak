"use client";

import { linkedUrl, googleUrl } from "../utility/links";

interface Props {
  runAnimation: boolean;
}

export const HeroContent: React.FC<Props> = ({ runAnimation }) => {
  return (
    <div
      className={`lg:px-[2.5em] lg:grid lg:grid-cols-2 flex flex-col gap-y-[48px] w-full lg:items-center px-4 z-40 relative
    transition-all ease-in-out duration-500 transform 
    

    ${runAnimation ? "lg:bottom-[120px] 3xl:bottom-[240px]" : "lg:bottom-0"}
    `}
    >
      <div>
        <div className="lg:inline-flex lg:items-center flex flex-col lg:flex-row gap-y-[8px]">
          <h1 className="text-mh1 leading-120 lg:text-h1 lg:pr-4 lg:leading-140">
            Filip Płócienniczak
          </h1>
          <div className="text-slate">
            <div className="flex-col text-body hidden lg:block">
              <div>Ekspert</div>
              <div>Kredytowy</div>
            </div>
            <div className="text-mbody lg:hidden">Ekspert Kredytowy</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-y-[32px] lg:justify-end lg:gap-x-[48px]">
        <div className="lg:items-center gap-y-[18px] flex flex-col lg:flex-row">
          <div className="flex gap-4 items-center">
            <div className="relative w-[2.5em] h-[2.5em] rounded-full overflow-hidden group">
              <a target="_blank" href={linkedUrl}>
                <div className="bg-transparent  w-[2.5em] h-[2.5em] rounded-full flex justify-center items-center">
                  <div className="absolute bottom-[-2.5em] w-[2.5em] h-[2.5em] bg-black rounded-full flex justify-center items-center transition-all ease-in-out duration-500 transform group-hover:bottom-0" />
                  <div className="h-[2.5em] w-[2.5em] rounded-full bg-transparent border-[0.125em] border-black flex items-center justify-center">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="absolute"
                    >
                      <path
                        d="M3.13438 14H0.23125V4.65312H3.13438V14ZM1.68125 3.37813C0.753125 3.37813 0 2.60938 0 1.68125C0 0.753125 0.753125 0 1.68125 0C2.60938 0 3.3625 0.753125 3.3625 1.68125C3.3625 2.60938 2.60938 3.37813 1.68125 3.37813ZM14 14H11.1031V9.45C11.1031 8.36562 11.0813 6.975 9.59375 6.975C8.08438 6.975 7.85313 8.15312 7.85313 9.37187V14H4.95312V4.65312H7.7375V5.92812H7.77812C8.16562 5.19375 9.1125 4.41875 10.525 4.41875C13.4625 4.41875 14.0031 6.35313 14.0031 8.86563V14H14Z"
                        className=" fill-black group-hover:fill-white transition-colors duration-250"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <h1 className="text-mh1 lg:text-h1 pr-4 leading-70">12</h1>
          </div>
          <div className="text-slate">
            <div className="flex-col text-body hidden lg:block">
              <div>lat doświadczenia</div>
              <div>kredytowego</div>
            </div>
            <div className="text-mbody lg:hidden">
              lat doświadczenia kredytowego
            </div>
          </div>
        </div>

        <div className="lg:items-center gap-y-[18px] flex flex-col lg:flex-row">
          <div className="flex gap-4 items-center">
            <div className="relative w-[2.5em] h-[2.5em] rounded-full overflow-hidden group">
              <a target="_blank" href={googleUrl}>
                <div className="bg-transparent w-[2.5em] h-[2.5em] rounded-full flex justify-center items-center">
                  <div className="absolute bottom-[-2.5em] w-[2.5em] h-[2.5em] bg-black rounded-full flex justify-center items-center transition-all ease-in-out duration-500 transform group-hover:bottom-0" />
                  <div className="h-[2.5em] w-[2.5em] rounded-full bg-transparent border-[0.125em] border-black flex items-center justify-center">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="absolute"
                    >
                      <path
                        d="M15.625 8.18125C15.625 12.6031 12.5969 15.75 8.125 15.75C3.8375 15.75 0.375 12.2875 0.375 8C0.375 3.7125 3.8375 0.25 8.125 0.25C10.2125 0.25 11.9688 1.01562 13.3219 2.27813L11.2125 4.30625C8.45312 1.64375 3.32188 3.64375 3.32188 8C3.32188 10.7031 5.48125 12.8938 8.125 12.8938C11.1938 12.8938 12.3438 10.6938 12.525 9.55313H8.125V6.8875H15.5031C15.575 7.28437 15.625 7.66562 15.625 8.18125Z"
                        className=" fill-black group-hover:fill-white transition-colors duration-250"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <h1 className="text-mh1 lg:text-h1 pr-4 leading-70">60+</h1>
          </div>
          <div className="text-slate">
            <div className="flex-col text-body hidden lg:block">
              <div>Pozytywnych opinii</div>
              <div>na Google</div>
            </div>
            <div className="text-mbody lg:hidden">
              Pozytywnych opinii na Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
