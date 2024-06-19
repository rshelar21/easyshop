import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectItems, removeCart } from "../../feature/cartSlice";
import { selectUser, removeUser } from "../../feature/userSlice";
import { useQuery } from "@tanstack/react-query";
import { logoutUser } from "../../hooks/query/auth";


const Navbar: React.FC = () => {
  const userDetails = useSelector(selectUser);
  const cartItem = useSelector(selectItems);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState<Boolean>(false);

  const {
    data: logoutData,
    isLoading: logoutLoading,
    refetch,
  } = useQuery({
    queryKey: ["logout"],
    queryFn: logoutUser,
    enabled: false,
  });

  useEffect(() => {
    handlerNavbar();
  }, [location.pathname]);

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

  return (
    <>
      <div className={`z-50 fixed top-0 left-0 right-0 ${navbar && "hidden"}`}>
        <div
          className="flex justify-between bg-amazon_blue w-full
        px-3 py-2 "
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
          <div className="px-3 hidden md:inline-block flex-grow ">
            <div
              className="flex bg-yellow-400 rounded-sm overflow-hidden
            items-center cursor-pointer hover:bg-yellow-500"
            >
              <input
                type="text"
                placeholder="Search product name..."
                className="w-full outline-none placeholder:text-gray-500 p-2
                px-3
                "
              />
              <MagnifyingGlassIcon className="h-6 w-14" />
            </div>
          </div>

          {/* right */}

          <div className="flex justify-between text-white space-x-6 whitespace-nowrap text-xs">
            {/* <div
              className="inline-block md:hidden"
              onClick={() => setIsOpneMenu(!isOpneMenu)}
            >
              <FaBarsStaggered className=" h-full w-4" />
            </div> */}

            <div className=" inline-block relative group">
              <p className="text-xs">
                Hello, <br />
                {userDetails.name ? userDetails?.name : "sign in"}
              </p>

              <div className="absolute top-10 bg-white group-hover:opacity-100 opacity-0 p-3 w-fit rounded-sm right-2">
                {!userDetails?.name ? (
                  <button className="button">
                    <Link to="/register" className="text-black">
                      Sign in
                    </Link>
                  </button>
                ) : (
                  <button className="button text-black" onClick={handlerLogOut}>
                    Log Out
                  </button>
                )}
              </div>
            </div>

            <div className="">
              <Link to="/orders-history" className="link">
                <p>Orders</p>
                <p className="md:text-sm font-extrabold">History</p>
              </Link>
            </div>

            <div className="">
              <span
                className="absolute top-2 bg-yellow-400 text-black text-center
            font-bold w-4 h-4 rounded-full right-10 z-10"
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
        <div className="bg-amazon_blue md:hidden px-2 pb-2">
          <div
            className="flex bg-yellow-400 rounded-sm overflow-hidden
            items-center cursor-pointer hover:bg-yellow-500"
          >
            <input
              type="text"
              placeholder="Search product name..."
              className="w-full outline-none placeholder:text-gray-500 p-2
                px-3
                "
            />
            <MagnifyingGlassIcon className="h-6 w-14" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
