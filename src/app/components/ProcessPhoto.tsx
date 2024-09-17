import { useState, useEffect } from "react";
import process1 from "../assets/photos/process1.png";
import process2 from "../assets/photos/process2.png";
import process3 from "../assets/photos/process3.png";
import process4 from "../assets/photos/process4.png";
import NextImage, { StaticImageData } from "next/image"; // Renamed Next.js Image import

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

  // Preload images
  useEffect(() => {
    const preloadImages = photos.map((photo) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image(); // Use new Image() for preloading
        img.src = photo.src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });

    // Wait for all images to preload
    Promise.all(preloadImages)
      .then(() => {
        console.log("All images preloaded");
      })
      .catch((err) => {
        console.error("Error preloading images", err);
      });
  }, [photos]);

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
