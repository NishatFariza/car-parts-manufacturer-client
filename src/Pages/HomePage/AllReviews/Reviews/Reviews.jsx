import React from "react";
import { useQuery } from "react-query";
import Review from "../Rewiew/Review";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch(`http://localhost:5000/reviews`).then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div className="bg-[url('https://i.ibb.co/5WmVLKK/review-bg.webp')] bg-cover">
      <div className="lg:w-6/12 md:w-8/12 sm:w-10/12 w-11/12 mx-auto text-center my-16">
        <h2 className="md:text-4xl text-2xl font-semibold mb-2 text-black">
          OUR PRODUCTS
        </h2>
        <div className="h-1 w-24 rounded-lg bg-yellow-600 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7 pt-4 pb-16">
        {reviews.map((review) => (
          <Review reviewUser={review} key={review._id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
