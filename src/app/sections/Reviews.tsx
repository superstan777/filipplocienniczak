"use client";

import { Review } from "../components/Review";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "../components/ui/carousel";
import { reviews } from "../utility/copy";

export const Reviews = () => {
  const reviewsRef = useRef(null!);
  const [api, setApi] = useState<CarouselApi>();
  const [wasScrolled, setWasScrolled] = useState(false);

  const isVisible = useIntersectionObserver(reviewsRef);

  if (isVisible && !wasScrolled) {
    api?.scrollNext();
    setWasScrolled(true);
  }

  //
  // pages/api/reviews.js

  //

  const renderReviews = () => {
    return reviews.map((item, index) => {
      return (
        <CarouselItem
          className="basis-1/1 lg:basis-1/2 xl:basis-1/3  lg:pl-[1.25em] "
          key={index}
        >
          <Review name={item.name} ago={item.ago} review={item.review} />
        </CarouselItem>
      );
    });
  };

  return (
    <div className="w-full cursor-grab select-none " ref={reviewsRef}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          dragFree: true,
        }}
      >
        <CarouselContent className="lg:ml-[1em]">
          {renderReviews()}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
