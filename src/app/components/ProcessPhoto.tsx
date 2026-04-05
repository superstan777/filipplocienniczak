import { useState, useEffect, useRef } from "react";
import process1 from "../assets/photos/process1.png";
import process2 from "../assets/photos/process2.png";
import process3 from "../assets/photos/process3.png";
import process4 from "../assets/photos/process4.png";
import NextImage, { StaticImageData } from "next/image";

interface Props {
  activeIndex: number;
}

export const ProcessPhoto: React.FC<Props> = ({ activeIndex }) => {
  const photos: StaticImageData[] = [process1, process2, process3, process4];
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const prevActiveIndexRef = useRef<number>(activeIndex);

  useEffect(() => {
    setPreviousIndex(prevActiveIndexRef.current);
    setAnimatingIndex(activeIndex);
    prevActiveIndexRef.current = activeIndex;
    const timer = setTimeout(() => {
      setAnimatingIndex(null);
      setPreviousIndex(null);
    }, 400);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="w-full h-full relative">
      {photos.map((photo, i) => (
        <NextImage
          key={i}
          src={photo}
          alt={`Process step ${i + 1}`}
          priority={true}
          loading="eager"
          className={`absolute top-0 left-0 w-full h-full object-cover ${
            i === activeIndex
              ? `opacity-100 z-10 ${animatingIndex === i ? "animate-scale-up" : ""}`
              : i === previousIndex
                ? "opacity-100 z-0"
                : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
};
