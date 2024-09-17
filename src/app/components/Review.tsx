"use client";

interface Props {
  name: string;
  ago: string;
  review: string;
}

export const Review: React.FC<Props> = ({ name, ago, review }) => {
  const renderStars = () => {
    return (
      <>
        <svg
          className="mr-[0.125em]"
          width="0.875em"
          height="0.8125em"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
            fill="#F1B10B"
          />
        </svg>
        <svg
          className="mr-[0.125em]"
          width="0.875em"
          height="0.8125em"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
            fill="#F1B10B"
          />
        </svg>
        <svg
          className="mr-[0.125em]"
          width="0.875em"
          height="0.8125em"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
            fill="#F1B10B"
          />
        </svg>
        <svg
          className="mr-[0.125em]"
          width="0.875em"
          height="0.8125em"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
            fill="#F1B10B"
          />
        </svg>
        <svg
          className="mr-[0.5em]"
          width="0.875em"
          height="0.8125em"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
            fill="#F1B10B"
          />
        </svg>
      </>
    );
  };

  return (
    <div className="max-w-[20.75em]  lg:max-w-[43.75em] lg:min-w-[24.75em] bg-white  p-[2.5em] mx-[1.25em] ">
      <div className=" justify-between items-center h-1/2">
        <div className="flex justify-between items-center ">
          <div className="flex justify-between items-center">
            <div className="bg-green w-[2.5em] h-[2.5em] rounded-full mr-[0.75em] text-white flex justify-center items-center text-mh2">
              {name.charAt(0)}
            </div>
            <div className="text-mbody lg:text-mbody text-black">{name}</div>
          </div>
          <div className="bg-transparent w-[2em] h-[2em] rounded-full border-grey2 border-[0.125em] flex justify-center items-center">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.625 8.18125C15.625 12.6031 12.5969 15.75 8.125 15.75C3.8375 15.75 0.375 12.2875 0.375 8C0.375 3.7125 3.8375 0.25 8.125 0.25C10.2125 0.25 11.9688 1.01562 13.3219 2.27813L11.2125 4.30625C8.45312 1.64375 3.32188 3.64375 3.32188 8C3.32188 10.7031 5.48125 12.8938 8.125 12.8938C11.1938 12.8938 12.3438 10.6938 12.525 9.55313H8.125V6.8875H15.5031C15.575 7.28437 15.625 7.66562 15.625 8.18125Z"
                fill="#DBE0E5"
              />
            </svg>
          </div>
        </div>
        <div className="flex mt-[0.625em] items-center">
          {renderStars()}
          <div className="text-[0.75em] text-slate">{ago}</div>
        </div>
      </div>
      <div className="h-1/2 text:mbody lg:text-body text-slate mt-[1.5em] ">
        <p className="truncate-multiline">{review}</p>
      </div>
    </div>
  );
};
