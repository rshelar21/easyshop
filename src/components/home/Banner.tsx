import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-50 to-transparent h-32 z-10"></div>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          <div>
            <LazyLoadImage
              src="/assets/slider1.webp"
              alt="Banner1"
              effect="blur"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/assets/slider3.webp"
              alt="Banner3"
              effect="blur"
            />
          </div>
          <div>
            <LazyLoadImage
              src="/assets/slider4.webp"
              alt="Banner4"
              effect="blur"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
