import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlined } from "@heroicons/react/24/outline";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import FormCheckbox from "../common/FormCheckbox";
import { cn } from "../../utils/cn";

interface IProductFiltersProps {
  checkBoxPrice: any | string;
  handleSelectPrice: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  checkBoxCategory: any | string;
  checkBoxRating: any | string;
  handleClearFilter: () => void;
}

const ProductFilters: React.FC<IProductFiltersProps> = ({
  handleSelectPrice,
  checkBoxPrice,
  checkBoxCategory,
  checkBoxRating,
  handleClearFilter,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <div className="bg-white px-4 pb-5 pt-4 col-span-1">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-lg">Add Filters</h1>
          <button className="block md:hidden">
            <ChevronDownIcon
              className={cn(
                "text-[rgb(33, 33, 33)] w-5 h-5",
                showFilter ? "transform rotate-180" : "transform rotate-0"
              )}
              onClick={() => setShowFilter(!showFilter)}
            />
          </button>
        </div>
        <div
          className={cn(
            "relative transition-all ease-in-out duration-300 md:block hidden",
            showFilter ? "block" : "hidden"
          )}
        >
          <div className="py-[10px] border-b border-[rgb(243, 243, 243)]">
            <div className="flex justify-between items-center">
              <h5 className="uppercase font-normal text-base text-[rgb(33, 33, 33)]">
                Category
              </h5>
            </div>

            <FormCheckbox
              handleSelectPrice={handleSelectPrice}
              type="category"
              label="men's clothing"
              id="men's clothing"
              checkBox={checkBoxCategory}
            />

            <FormCheckbox
              handleSelectPrice={handleSelectPrice}
              type="category"
              label="women's clothing"
              id="women's clothing"
              checkBox={checkBoxCategory}
            />

            <FormCheckbox
              handleSelectPrice={handleSelectPrice}
              type="category"
              label="jewelery"
              id="jewelery"
              checkBox={checkBoxCategory}
            />

            <FormCheckbox
              handleSelectPrice={handleSelectPrice}
              type={"category"}
              label={"electronics"}
              id={"electronics"}
              checkBox={checkBoxCategory}
            />
          </div>

          <div className="py-[10px] border-b border-[rgb(243, 243, 243)]">
            <div className="flex justify-between items-center">
              <h5 className="uppercase font-normal text-base text-[rgb(33, 33, 33)]">
                Pricing
              </h5>
              {/* <ChevronDownIcon className="w-5 h-5 text-gray-500" /> */}
            </div>
            <FormCheckbox
              handleSelectPrice={handleSelectPrice}
              type="price"
              label="Under $100"
              id="100"
              checkBox={checkBoxPrice}
            />
            <FormCheckbox
              handleSelectPrice={handleSelectPrice}
              type="price"
              label="$0 - $200"
              id="200"
              checkBox={checkBoxPrice}
            />
          </div>

          <div className="py-[10px] border-b border-[rgb(243, 243, 243)]">
            <div className="flex justify-between items-center">
              <h5 className="uppercase font-normal text-base text-[rgb(33, 33, 33)]">
                Ratings
              </h5>
              {/* <ChevronDownIcon className="w-5 h-5 text-gray-500" /> */}
            </div>

            <div className="flex gap-2 pt-1 items-center">
              <input
                type="radio"
                className=""
                name="rating"
                id="5"
                checked={checkBoxRating === "5"}
                onChange={(e) => handleSelectPrice(e, "rate")}
                value={"5"}
              />
              <label htmlFor="5" className="flex">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
              </label>
            </div>

            <div className="flex gap-2 pt-1 items-center">
              <input
                type="radio"
                className=""
                name="rating"
                id="4"
                checked={checkBoxRating === "4"}
                onChange={(e) => handleSelectPrice(e, "rate")}
                value={"4"}
              />
              <label htmlFor="4" className="flex">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarOutlined className="w-4 h-4 text-gray-400" />
              </label>
            </div>

            <div className="flex gap-2 pt-1 items-center">
              <input
                type="radio"
                className=""
                name="rating"
                id="3"
                checked={checkBoxRating === "3"}
                onChange={(e) => handleSelectPrice(e, "rate")}
                value={"3"}
              />
              <label htmlFor="3" className="flex">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarOutlined className="w-4 h-4 text-gray-400" />
                <StarOutlined className="w-4 h-4 text-gray-400" />
              </label>
            </div>

            <div className="flex gap-2 pt-1 items-center">
              <input
                type="radio"
                className=""
                name="rating"
                id="2"
                checked={checkBoxRating === "2"}
                onChange={(e) => handleSelectPrice(e, "rate")}
                value={"2"}
              />
              <label htmlFor="2" className="flex">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarOutlined className="w-4 h-4 text-gray-400" />
                <StarOutlined className="w-4 h-4 text-gray-400" />
                <StarOutlined className="w-4 h-4 text-gray-400" />
              </label>
            </div>

            <div className="flex gap-2 pt-1 items-center">
              <input
                type="radio"
                className=""
                name="rating"
                id="1"
                checked={checkBoxRating === "1"}
                onChange={(e) => handleSelectPrice(e, "rate")}
                value={"1"}
              />
              <label htmlFor="1" className="flex">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <StarOutlined className="w-4 h-4 text-gray-400" />
                <StarOutlined className="w-4 h-4 text-gray-400" />
                <StarOutlined className="w-4 h-4 text-gray-400" />
                <StarOutlined className="w-4 h-4 text-gray-400" />
              </label>
            </div>
          </div>

          <button
            className="bg-white shadow-lg border w-fit border-gray-500 px-4 py-2 rounded-lg mt-4"
            onClick={handleClearFilter}
          >
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;
