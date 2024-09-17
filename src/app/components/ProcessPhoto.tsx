import { useState, useEffect } from "react";
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
  const [currentPhoto, setCurrentPhoto] = useState<StaticImageData>(photos[0]);
  const [previousPhoto, setPreviousPhoto] = useState<StaticImageData | null>(
    null
  );
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (photos[activeIndex] !== currentPhoto) {
      setPreviousPhoto(currentPhoto);
      setCurrentPhoto(photos[activeIndex]);
      setAnimate(true);

      // Lazy-load the next image only
      const img = new Image();
      img.src = photos[activeIndex].src;

      setTimeout(() => {
        setAnimate(false);
        setPreviousPhoto(null);
      }, 400); // Match your animation duration
    }
  }, [activeIndex, currentPhoto, photos]);

  return (
    <div className="w-full h-full relative">
      {previousPhoto && (
        <NextImage
          src={previousPhoto}
          alt="Previous"
          className="absolute top-0 left-0 w-full h-full object-cover"
          priority={true}
          loading="eager"
        />
      )}
      {currentPhoto && (
        <NextImage
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
