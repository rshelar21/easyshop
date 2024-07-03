import React, { useState, useEffect, useRef, useMemo } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { selectItems, removeCart } from "../../feature/cartSlice";
import { selectUser, removeUser } from "../../feature/userSlice";
import { useQuery } from "@tanstack/react-query";
import { logoutUser } from "../../hooks/query/auth";
import { useDebouncedCallback } from "use-debounce";
import { queryProducts } from "../../hooks/query/product";
import ClipLoader from "react-spinners/ClipLoader";
import { cn } from "../../utils/cn";
import { fetchProducts } from "../../hooks/query/product";

const Navbar: React.FC = () => {
  const userDetails = useSelector(selectUser);
  const cartItem = useSelector(selectItems);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState<Boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [isOpenSearchBar, setIsOpenSearchBar] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["logout"],
    queryFn: logoutUser,
    enabled: false,
  });

  const {
    data: productData,
    isLoading: productDataLoading,
    isError: productDataError,
    refetch: refetchProduct,
    isSuccess,
  } = useQuery({
    queryKey: ["products-search", search],
    queryFn: () => queryProducts(search?.trim()),
    enabled: false,
  });

  console.log(productData);

  useEffect(() => {
    handlerNavbar();
    setIsOpenSearchBar(false);
    setSearch("");
  }, [location.pathname]);

  useEffect(() => {
    if (isSuccess) {
      setIsOpenSearchBar(true);
    }
  }, [isSuccess]);

  const handlerNavbar = () => {
    if (location.pathname === "/register" || location.pathname === "/login") {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handlerLogOut = (e: any) => {
    e.preventDefault();
    refetch();
    dispatch(removeUser({}));

    dispatch(
      removeCart({
        items: [],
      })
    );
    navigate("/");
  };

  const debouncedRefetch = useDebouncedCallback(() => {
    refetchProduct();
  }, 200);

  React.useEffect(() => {
    if (search.trim() !== "") {
      // console.log("search", search);
      setIsOpenSearchBar(true);
      debouncedRefetch();
    } else {
      setIsOpenSearchBar(false);
    }
  }, [search]);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!searchRef.current) {
        return;
      }
      // if click was not inside of the element. "!" means not
      // in other words, if click is outside the modal element
      //@ts-ignore
      if (!searchRef.current.contains(event?.target)) {
        setIsOpenSearchBar(false);
      }
    };
    // the key is using the `true` option
    // `true` will enable the `capture` phase of event handling by browser
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <>
      <div
        className={cn("z-50 fixed top-0 left-0 right-0", navbar && "hidden")}
      >
        <div
          className="flex justify-between bg-amazon_blue w-full
        px-3 py-2 flex-wrap"
        >
          <div className="w-24 ">
            <Link to="/">
              <img
                src="/assets/logo.svg"
                alt=""
                className="w-full h-full object-contain"
              />
            </Link>
          </div>

          {/* center */}
          <div className="px-0 md:px-3  order-3 pt-2 md:pt-0 md:order-2 flex-grow relative ">
            <div
              className="flex bg-yellow-400 rounded-sm overflow-hidden
            items-center cursor-pointer hover:bg-yellow-500"
            >
              <input
                type="text"
                placeholder="Search product name..."
                className="w-full outline-none placeholder:text-gray-500 p-2 px-3
                "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <MagnifyingGlassIcon className="h-6 w-14" />
            </div>
            {isOpenSearchBar && (
              <div
                className="w-full h-full absolute inset-0 top-11 px-0 md:px-3"
                ref={searchRef}
              >
                <div className="bg-white rounded-bl-lg rounded-br-lg px-2 py-4 shadow-lg">
                  <h3 className="font-semibold text-lg">Search Result</h3>
                  <div className="">
                    <ul>
                      {productData &&
                        Array.isArray(productData?.products) &&
                        productData?.products?.map(
                          (item: any, index: number) => (
                            <li
                              className="hover:bg-gray-100 py-2 cursor-pointer"
                              key={index}
                            >
                              <Link
                                to={{
                                  pathname: "/products",
                                  search: `?q=${item?.category}`,
                                }}
                              >
                                <p className="font-normal text-sm text-gray-700">
                                  {item?.title}
                                </p>
                              </Link>
                            </li>
                          )
                        )}
                    </ul>
                    {productDataLoading ? (
                      <div className="flex justify-center items-center w-full h-full">
                        <ClipLoader color="#36d7b7" />
                      </div>
                    ) : (
                      <h1 className="text-center font-medium text-lg text-slate-600">
                        No result found
                      </h1>
                    )}
                   
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* right */}

          <div className="flex justify-between order-2 md:order-3 text-white space-x-6 whitespace-nowrap text-xs">
            <div className="inline-block relative group">
              <p className="text-xs">
                Hello, <br />
                {userDetails.name ? userDetails?.name : "sign in"}
              </p>

              <div className="absolute top-10 bg-white group-hover:opacity-100 opacity-0 p-3 w-fit rounded-sm right-2">
                {!userDetails?.name ? (
                  <Link to="/register" className="text-black">
                    <button className="button">Sign in</button>
                  </Link>
                ) : (
                  <button className="button text-black" onClick={handlerLogOut}>
                    Log Out
                  </button>
                )}
              </div>
            </div>

            {userDetails.name ? (
              <div className="">
                <Link to="/orders-history" className="link">
                  <p>Orders</p>
                  <p className="md:text-sm font-extrabold">History</p>
                </Link>
              </div>
            ) : null}

            <div className="relative">
              <span
                className="absolute  bg-yellow-400 text-black text-center
            font-bold w-4 h-4 rounded-full  z-10"
              >
                {cartItem?.length}
              </span>

              <Link to="/cart" className="flex items-end relative">
                <ShoppingCartIcon className="h-8 w-8" />
                <p className="hidden md:inline md:text-sm font-extrabold ">
                  Cart
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
