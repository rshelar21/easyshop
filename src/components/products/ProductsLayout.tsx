import React, { useState, useRef, useEffect } from "react";
import ProductFilters from "./ProductFilters";
import { IProduct } from "../../interfaces/products";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../hooks/query/product";
import ProductsCard from "./ProductsCard";
import ClipLoader from "react-spinners/ClipLoader";
import { useSearchParams } from "react-router-dom";

const ProductsLayout = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [checkBoxPrice, setCheckBoxPrice] = useState<string>("");
  const [checkBoxCategory, setCheckBoxCategory] = useState<string>("");
  const [checkBoxRating, setCheckBoxRating] = useState<string>("");
  const [filterdList, setFilterdList] = useState<IProduct[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("q")) {
      setCheckBoxCategory(searchParams.get("q") as string);
    }
  }, [searchParams]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // console.log(data);

  useEffect(() => {
    if (data) {
      setProducts(data);
      if (searchParams.get("q")) {
        const result = data.filter(
          (product: IProduct) => product.category === searchParams.get("q")
        );
        setFilterdList(result);
      } else {
        setFilterdList(data);
      }
    }
  }, [data]);

  useEffect(() => {
    handleFilterProducts();
  }, [
    searchQuery,
    checkBoxPrice,
    checkBoxCategory,
    checkBoxRating,
    searchParams,
  ]);

  const handleFilterProducts = () => {
    let productsArr = [...products];
    if (searchQuery != "") {
      productsArr = productsArr.filter((product) =>
        searchQuery === "" || null
          ? product
          : product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (checkBoxPrice != "") {
      productsArr = productsArr.filter(
        (product) => product.price < Number(checkBoxPrice)
      );
    }
    if (checkBoxCategory != "") {
      productsArr = productsArr.filter(
        (product) => product.category === checkBoxCategory
      );
    }
    if (checkBoxRating != "") {
      productsArr = productsArr.filter(
        (product) =>
          Math.floor(Number(product.rating.rate)) + 1 ===
          Math.floor(Number(checkBoxRating))
      );
    }

    setFilterdList(productsArr);
  };

  const handleSelectPrice = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const { value, name } = e.target;
    if (type === "price") {
      setCheckBoxPrice(value);
    }
    if (type === "category") {
      setCheckBoxCategory(value);
    }
    if (type === "rate") {
      setCheckBoxRating(value);
    }
  };

  const handleClearFilter = () => {
    setFilterdList(products);
    setCheckBoxPrice("");
    setCheckBoxCategory("");
    setCheckBoxRating("");
  };

  return (
    <div className="pt-[56px] relative w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0px,_260px)_minmax(0px,_3fr)] relative">
        <ProductFilters
          checkBoxPrice={checkBoxPrice}
          handleSelectPrice={handleSelectPrice}
          checkBoxCategory={checkBoxCategory}
          checkBoxRating={checkBoxRating}
          handleClearFilter={handleClearFilter}
        />
        <div className="w-full h-full relative col-span-1">
          {Array.isArray(filterdList) && filterdList.length ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {filterdList?.map((item, index) => (
                <ProductsCard product={item} key={item?.id} />
              ))}
            </div>
          ) : isLoading ? (
            <div className="flex justify-center items-center w-full h-full">
              <ClipLoader color="#36d7b7" />
            </div>
          ) : isError ? (
            <h1 className="text-center">
              something went wrong, please try again later.
            </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
