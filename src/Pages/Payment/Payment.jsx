import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../Api/axiosPrivate";
import Loading from "../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useElements, useStripe } from "../../src";
import CheckOut from "../CheckOut/CheckOut";

const stripePromise = loadStripe(
  "pk_test_51L3j6qCE4k8yfuy5E7fKjICdKSHvfYZpNJFDLBTO5pqx93nmu6AD9QRnCOne8fUUEcw0fBJuY7w2035E6L3GDe5900isJiHXKe"
);

const Payment = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: order,
    refetch,
  } = useQuery("order", () =>
    axiosPrivate.get(`http://localhost:5000/order/${id}`)
  );
  // console.log(order);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-[64px]">
      <div className="flex justify-evenly flex-col-reverse sm:flex-row pt-8 sm:pt-20 w-11/12 sm:container mx-auto">
        <div className="flex flex-col p-2 sm:p-10 sm:text-left text-center sm:mt-0 mt-3 md:flex-row md:w-8/12  rounded-lg bg-white shadow-lg">
          <div className="w-11/12 mx-auto sm:mx-0 mb-10 sm:mb-0 sm:w-4/12 text-center">
            <h2 className="">{order?.data.name}</h2>
            <img
              className="w-56  sm:mx-0 mx-auto sm:w-full h-32 sm:h-96 md:h-48 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={order?.data.img}
              alt=""
            />
            <h2 className="">Order Quantity : {order?.data?.quantity}</h2>
            <h2 className="">Total Price : {order?.data?.price}</h2>
          </div>

          <Elements stripe={stripePromise}>
            <CheckOut order={order?.data} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
