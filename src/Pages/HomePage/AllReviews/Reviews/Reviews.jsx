import React from "react";
import { useQuery } from "react-query";
import Review from "../Rewiew/Review";

const Reviews = () => {
  const { data: reviews, isLoading, refetch } = useQuery("reviews", () =>
    fetch(`http://localhost:5000/reviews`).then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7 pt-8 pb-16">
        {reviews.map((review) => (
          <Review reviewUser={review} key={review._id}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
