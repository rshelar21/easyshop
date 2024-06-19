import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ICategoryCards {
  id: string;
  title: string;
  img: string;
}

const categoryList: ICategoryCards[] = [
  {
    id: "0101",
    title: "men's clothing",
    img: "event2.webp",
  },
  {
    id: "0102",
    title: "women's clothing",
    img: "girl-hoddie.avif",
  },
  {
    id: "0102",
    title: "electronics",
    img: "computer.webp",
  },
  {
    id: "0102",
    title: "jewelery",
    img: "ring.jpg",
  },
];

const CategoryCard: React.FC<{
  category: ICategoryCards;
}> = ({ category }) => {
  return (
    <Link
      to={{
        pathname: "/products",
        search: `?q=${category?.title}`,
      }}
    >
      <div className="w-full p-2 rounded-lg shadow-lg hover:scale-110 transition-all ease-in-out cursor-pointer">
        <div className="">
          <LazyLoadImage
            src={`/assets/${category.img}`}
            alt="Image Alt"
            effect="blur"
            className="w-full h-[250px] object-contain"
          />
        </div>
        <div className="text-center pt-2">
          <span className="font-bold text-xl text-amazon_blue uppercase">
            {category.title}
          </span>
        </div>
      </div>
    </Link>
  );
};

const CategoryCardsList = () => {
  return (
    <div className="bg-white px-4 md:px-0">
      <div className="relative bg-white py-8 mx-auto w-full max-w-7xl">
        <h1 className="text-amazon_blue-light font-bold text-3xl">
          Shop By Category
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 pt-4">
          {categoryList?.map((category, index) => (
            <CategoryCard category={category} key={category.id + index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCardsList;
