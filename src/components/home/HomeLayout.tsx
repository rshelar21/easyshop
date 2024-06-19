import React from "react";
import Banner from "./Banner";
import CategoryCardsList from "./CategoryCardsList";
import DealsSection from "./DealsSection";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeLayout: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl relative mt-[56px]">
        <Banner />
        <div className="mt-0 md:-mt-60 relative">
          <DealsSection />

          <div className="w-full ">
            <LazyLoadImage
              src="https://links.papareact.com/dyz"
              alt="Image Alt"
              effect="blur"
              className="w-full h-[150px]  md:h-full object-cover relative"
            />
          </div>
        </div>
        <CategoryCardsList />
      </div>
    </>
  );
};

export default HomeLayout;
