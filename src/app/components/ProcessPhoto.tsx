import { useState, useEffect } from "react";
import process1 from "../assets/photos/process1.png";
import process2 from "../assets/photos/process2.png";
import process3 from "../assets/photos/process3.png";
import process4 from "../assets/photos/process4.png";
import Image, { StaticImageData } from "next/image";

interface Props {
  activeIndex: number;
}

export const ProcessPhoto: React.FC<Props> = ({ activeIndex }) => {
  const photos: StaticImageData[] = [process1, process2, process3, process4];
  const [currentPhoto, setCurrentPhoto] = useState<StaticImageData | undefined>(
    undefined
  );
  const [previousPhoto, setPreviousPhoto] = useState<
    StaticImageData | undefined
  >(undefined);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    changePhoto(activeIndex);
  }, [activeIndex]);

  const changePhoto = (photoIndex: number) => {
    setPreviousPhoto(currentPhoto);
    setCurrentPhoto(photos[photoIndex]);
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 400); // Animation duration should match the duration in the Tailwind CSS classes
  };

  return (
    <div className="w-full h-full">
      {previousPhoto && (
        <Image
          src={previousPhoto}
          alt="Previous"
          className="absolute top-0 left-0 w-full h-full object-cover"
          priority={true}
          loading="eager"
        />
      )}
      {currentPhoto && (
        <Image
          src={currentPhoto}
          priority={true}
          loading="eager"
          alt="Current"
          className={`absolute top-0 left-0 w-full h-full object-cover ${
            animate ? "animate-scale-up" : ""
          }`}
        />
      )}
    </div>
  );
};
