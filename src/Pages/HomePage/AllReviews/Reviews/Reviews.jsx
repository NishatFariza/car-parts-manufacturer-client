import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import Review from "../Rewiew/Review";
import Fade from "react-reveal/Fade";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch(`https://salty-bayou-55799.herokuapp.com/reviews`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-[url('https://i.ibb.co/5WmVLKK/review-bg.webp')] bg-cover">
      <div className="lg:px-8">
        <Fade bottom>
          <div className="lg:w-6/12 md:w-8/12 sm:w-10/12 w-11/12 mx-auto text-center lg:py-16 py-8">
            <h2 className="md:text-4xl text-3xl font-semibold mb-2 text-black">
              Our Clients
            </h2>
            <div className="h-1 w-24 rounded-lg bg-yellow-600 mx-auto"></div>
          </div>
        </Fade>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 lg:pb-20 pb-10">
          {reviews.map((review) => (
            <Review reviewUser={review} key={review._id}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
