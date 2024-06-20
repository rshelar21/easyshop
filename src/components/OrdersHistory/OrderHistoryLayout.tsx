import React from "react";
import OrdersCards from "./OrdersCardsList";
import { selectUser } from "../../feature/userSlice";
import { useSelector } from "react-redux";
import { IOrders } from "../../interfaces/orders";
import { getOrdersHistory } from "../../hooks/query/orders";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import ClipLoader from "react-spinners/ClipLoader";

const OrderHistoryLayout: React.FC = () => {
  const user = useSelector(selectUser);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrdersHistory,
  });

  console.log(isLoading, data);

  return (
    <>
      <div className="relative mt-[96px] md:mt-[56px] min-h-screen p-0 md:p-3 bg-white">
        <div className="bg-white px-4 py-5 w-full max-w-5xl mx-auto">
          <div className="pb-2 border-b">
            <h2 className="text-3xl">Order History</h2>
          </div>

          <div className="p-2">
            {isLoading ? (
              <div className="flex justify-center items-center w-full h-full">
                <ClipLoader color="#36d7b7" />
              </div>
            ) : (
              !data?.product?.length && (
                <div className="flex justify-center">
                  <h2 className="text-black text-lg font-semibold">
                    No Orders Found
                  </h2>
                </div>
              )
            )}
            {Array.isArray(data?.product) &&
              data?.product?.map((item: IOrders, index: number) => {
                return (
                  <>
                    <div key={index} className="border border-gray-300">
                      <div
                        className="bg-gray-200 border border-gray-300 border-collapse
                  flex items-center space-x-3"
                      >
                        <div className="border-r border-gray-300 p-3 ">
                          <p>Order Placed</p>

                          <p>{dayjs(item?.createdAt).format("DD-MM-YYYY")}</p>
                        </div>
                        <div className="border-r border-gray-300 p-3">
                          <p>Total Amount</p>
                          <p>Rs.{item?.amount}</p>
                        </div>

                        <div className="border-gray-300 p-3 flex-grow">
                          <p className="text-blue-500 text-right">
                            {item?.products.length} Items
                          </p>
                        </div>
                      </div>

                      <div>
                        <OrdersCards products={item?.products} />
                      </div>
                      <div className="p-2">
                        <h2 className="text-black text-2xl font-medium">
                          Payment Details :-
                        </h2>
                        <div className="flex ">
                          <div>
                            <p className="payment-details">
                              Amount:- Rs. {item?.amount}
                            </p>
                            <p className="payment-details line-clamp-2">
                              Address:- {item?.address}
                            </p>
                            <p className="payment-details">
                              Payment Type:- {item.paymentType}
                            </p>
                            <p className="payment-details">
                              Payment Status:- {item?.paymentStatus}
                            </p>
                            <p className="payment-details">
                              Purchased Date:-{" "}
                              {dayjs(item?.createdAt).format("DD-MM-YYYY")}
                            </p>
                            <button className="button">
                              Payment Successful !
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistoryLayout;
