import React, { useEffect, useState } from "react";
import axiosPrivate from "../../Api/axiosPrivate";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Loading from "../Shared/Loading/Loading";

const CheckOut = ({ order }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [proccesing, setProccesing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const { price } = order;
  // console.log(order);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      setError("");
      // console.log('[PaymentMethod]', paymentMethod);
    }
    setSuccess("");
    setProccesing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: order?.customerName,
            email: order?.customerEmail,
          },
        },
      });
    setProccesing(false);
    if (intentError) {
      console.log(intentError);
      setError(intentError?.message);
      setProccesing(false);
    } else {
      // setProccesing(false)
      console.log(paymentIntent);
      setSuccess(paymentIntent.id);
      setError("");

      const payment = {
        orderId: order?._id,
        transectionId: paymentIntent.id,
      };
      axiosPrivate
        .patch(
          `http://localhost:5000/order/${order?._id}`,
          payment
        )
        .then((data) => {
          console.log(data.data);
          event.target.value.reset();
        });
    }
  };

  return (
    <div className="flex items-center border rounded w-8/12">
      <form
        onSubmit={handleSubmit}
        className="sm:pl-16 sm:w-[400px] w-11/12 mx-auto sm:mx-0 text-left"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {proccesing ? (
          <Loading></Loading>
        ) : (
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            style={{
              fontFamily: "Open Sans, sans-serif",
              letterSpacing: "2px",
            }}
            class={`hover:bg-white  bg-primary mr-2 transition hover:text-primary rounded-full text-white border-2 border-primary px-6 text-sm sm:text-base sm:px-8 mt-5 py-1.5`}
          >
            Pay
          </button>
        )}
        {error && (
          <p className="label-text-alt ml-2 mt-1 text-red-500">{error}</p>
        )}
        {success && (
          <p className="label-text-alt ml-2 mt-1 text-green-600">
            Transection is Complete, Yor transection id is :{" "}
            <span className="text-orange-600 font-semibold">{success}</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckOut;
