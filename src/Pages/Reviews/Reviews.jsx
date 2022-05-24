import React from "react";
import { useQuery } from "react-query";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery("repoData", () =>
    fetch(`http://localhost:5000/reviews`).then((res) => res.json())
  );
  return <div></div>;
};

export default Reviews;
