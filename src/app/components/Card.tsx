"use client";

interface Props {
  number: number;
  header: string;
  subheader: string;
  border: boolean;
}

export const Card: React.FC<Props> = ({
  number,
  header,
  subheader,
  border,
}) => {
  const renderImage = () => {
    if (number === 1)
      return (
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.00391 13.2589V29.5922H13.0039V21.5922C13.0039 21.0618 13.2146 20.553 13.5897 20.178C13.9648 19.8029 14.4735 19.5922 15.0039 19.5922H17.0039C17.5343 19.5922 18.043 19.8029 18.4181 20.178C18.7932 20.553 19.0039 21.0618 19.0039 21.5922V29.5922H27.0039V13.2589"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.00391 16.5922L14.5892 3.00689C14.775 2.82104 14.9955 2.67361 15.2382 2.57302C15.481 2.47243 15.7412 2.42065 16.0039 2.42065C16.2667 2.42065 16.5268 2.47243 16.7696 2.57302C17.0123 2.67361 17.2328 2.82104 17.4186 3.00689L31.0039 16.5922"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    if (number === 2)
      return (
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 23C13.4183 23 17 21.2091 17 19C17 16.7909 13.4183 15 9 15C4.58172 15 1 16.7909 1 19C1 21.2091 4.58172 23 9 23Z"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 19V27C1 29.2093 4.58133 31 9 31C13.4187 31 17 29.2093 17 27V19"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 23C17 25.2093 13.4187 27 9 27C4.58133 27 1 25.2093 1 23"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21H29C29.5304 21 30.0391 20.7893 30.4142 20.4142C30.7893 20.0391 31 19.5304 31 19V3C31 2.46957 30.7893 1.96086 30.4142 1.58579C30.0391 1.21071 29.5304 1 29 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V13.0093"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11C12.0001 10.3312 12.1678 9.67311 12.4879 9.0859C12.808 8.49869 13.2703 8.00112 13.8323 7.63869C14.3944 7.27626 15.0384 7.06055 15.7054 7.01129C16.3723 6.96203 17.041 7.08079 17.6502 7.35671C18.2595 7.63263 18.7898 8.05689 19.1927 8.5907C19.5956 9.12451 19.8582 9.75082 19.9565 10.4123C20.0549 11.0739 19.9857 11.7495 19.7555 12.3774C19.5253 13.0053 19.1413 13.5655 18.6387 14.0067"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 5.5C6.09889 5.5 6.19556 5.52932 6.27778 5.58427C6.36001 5.63921 6.4241 5.7173 6.46194 5.80866C6.49978 5.90002 6.50969 6.00055 6.49039 6.09754C6.4711 6.19454 6.42348 6.28363 6.35355 6.35355C6.28363 6.42348 6.19454 6.4711 6.09754 6.49039C6.00055 6.50969 5.90002 6.49978 5.80866 6.46194C5.7173 6.4241 5.63921 6.36001 5.58427 6.27778C5.52932 6.19556 5.5 6.09889 5.5 6C5.5 5.86739 5.55268 5.74022 5.64645 5.64645C5.74022 5.55268 5.86739 5.5 6 5.5Z"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 15.5C26.0989 15.5 26.1956 15.5293 26.2778 15.5843C26.36 15.6392 26.4241 15.7173 26.4619 15.8087C26.4998 15.9 26.5097 16.0006 26.4904 16.0975C26.4711 16.1945 26.4235 16.2836 26.3536 16.3536C26.2836 16.4235 26.1945 16.4711 26.0975 16.4904C26.0006 16.5097 25.9 16.4998 25.8087 16.4619C25.7173 16.4241 25.6392 16.36 25.5843 16.2778C25.5293 16.1956 25.5 16.0989 25.5 16C25.5 15.8674 25.5527 15.7402 25.6464 15.6464C25.7402 15.5527 25.8674 15.5 26 15.5Z"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    if (number === 3)
      return (
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 8C25 7.73478 24.8946 7.48043 24.7071 7.29289C24.5196 7.10536 24.2652 7 24 7H19V2C19 1.73478 18.8946 1.48043 18.7071 1.29289C18.5196 1.10536 18.2652 1 18 1H14C13.7348 1 13.4804 1.10536 13.2929 1.29289C13.1054 1.48043 13 1.73478 13 2V7H8C7.73478 7 7.48043 7.10536 7.29289 7.29289C7.10536 7.48043 7 7.73478 7 8V12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H13V18C13 18.2652 13.1054 18.5196 13.2929 18.7071C13.4804 18.8946 13.7348 19 14 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V13H24C24.2652 13 24.5196 12.8946 24.7071 12.7071C24.8946 12.5196 25 12.2652 25 12V8Z"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 31L2.31467 27.8253C1.46364 26.7615 1 25.4397 1 24.0773V17.1827C1 16.6522 1.21071 16.1435 1.58579 15.7685C1.96086 15.3934 2.46957 15.1827 3 15.1827C3.53043 15.1827 4.03914 15.3934 4.41421 15.7685C4.78929 16.1435 5 16.6522 5 17.1827V22.1827"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.9995 30.9999V26.9999C11.0001 25.8134 10.6488 24.6534 9.9902 23.6666L8.46754 21.3866C8.33706 21.1705 8.16412 20.9831 7.95915 20.8357C7.75418 20.6884 7.52146 20.5841 7.27505 20.5293C7.02864 20.4744 6.77367 20.4701 6.52556 20.5166C6.27745 20.5632 6.04135 20.6595 5.83154 20.7999C5.45464 21.0524 5.18261 21.4336 5.0663 21.8721C4.94999 22.3106 4.99735 22.7764 5.19954 23.1826L7.0022 26.1826"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27 31L29.6853 27.8253C30.5364 26.7615 31 25.4397 31 24.0773V17.1827C31 16.6522 30.7893 16.1435 30.4142 15.7685C30.0391 15.3934 29.5304 15.1827 29 15.1827C28.4696 15.1827 27.9609 15.3934 27.5858 15.7685C27.2107 16.1435 27 16.6522 27 17.1827V22.1827"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 31V27C20.9995 25.8135 21.3507 24.6536 22.0093 23.6667L23.532 21.384C23.662 21.1675 23.8347 20.9796 24.0394 20.8317C24.2442 20.6838 24.4768 20.579 24.7233 20.5237C24.9697 20.4684 25.2248 20.4636 25.4731 20.5097C25.7215 20.5558 25.9579 20.6519 26.168 20.792C26.5467 21.0443 26.8201 21.4262 26.937 21.866C27.0539 22.3057 27.0061 22.773 26.8027 23.18L25 26.18"
            stroke="#1C1B1B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  };
  return (
    <div className="h-1/2">
      <div
        className={`px-0 flex lg:hidden ${
          border ? "border-y border-solid border-grey2" : ""
        }`}
      >
        <div className={`px-[1em]  flex flex-col gap-y-[56px] py-12 `}>
          {/* <div className="bg-transparent border-2 border-black w-8 h-8 rounded-full flex justify-center items-center">
            <div className="text-black text-menu font-menu ">{number}</div>
          </div> */}
          <div className="bg-transparent w-[2em] h-[2em] flex justify-center items-center">
            {renderImage()}
          </div>
          <div className="">
            <div className="mb-[1.5em] text-mh2">{header}</div>
            <div className="text-mbody text-slate">{subheader}</div>
          </div>
        </div>
      </div>

      <div
        className={`p-[3em] lg:h-[50vh]  relative overflow-hidden group hidden lg:flex ${
          border ? "border-x border-solid border-grey2" : ""
        }`}
      >
        <div className="absolute bottom-[0px] left-[0px] w-0 h-0 bg-white rounded-[50%] transition-all ease-in-out duration-750 group-hover:w-[200%] group-hover:h-[200%] group-hover:bottom-[-30%] group-hover:left-[-30%]"></div>
        <div className="relative h-full flex flex-col justify-between ">
          {/* container */}

          <div className="relative w-[2em] h-[2em]  overflow-hidden">
            {renderImage()}
          </div>

          {/* <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <div className="bg-transparent border-2 border-black w-8 h-8 rounded-full flex justify-center items-center">
              <div className="absolute bottom-[-32px] w-8 h-8 bg-black rounded-full flex justify-center items-center transition-all ease-in-out duration-500 transform group-hover:bottom-0" />
              <div className="text-black text-menu font-menu absolute group-hover:text-white transition-all ease-in-out duration-250">
                {number}
              </div>
            </div>
          </div> */}

          <div>
            <div className="text-h2 text-black mb-6">{header}</div>
            <div className="text-body text-slate">{subheader}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
