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

  // ✅ Preload all images once
  useEffect(() => {
    photos.forEach((photo) => {
      const img = new Image();
      img.src = photo.src;
    });
  }, []);

  // 🔄 Handle photo transitions
  useEffect(() => {
    if (photos[activeIndex] !== currentPhoto) {
      setPreviousPhoto(currentPhoto);
      setAnimate(true);

      setTimeout(() => {
        setCurrentPhoto(photos[activeIndex]);
      }, 0); // allow previous photo to render first

      setTimeout(() => {
        setAnimate(false);
        setPreviousPhoto(null);
      }, 400); // match animation duration
    }
  }, [activeIndex]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {previousPhoto && (
        <NextImage
          src={previousPhoto}
          alt="Previous"
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}
      {currentPhoto && (
        <NextImage
          src={currentPhoto}
          alt="Current"
          loading="lazy"
          className={`absolute top-0 left-0 w-full h-full object-cover ${
            animate ? "animate-scale-up" : ""
          }`}
        />
      )}
    </div>
  );
};
