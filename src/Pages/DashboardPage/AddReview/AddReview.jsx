import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axiosPrivate from "../../../Api/axiosPrivate";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  let [user, loading, error] = useAuthState(auth);

  const onSubmit = (data) => {
    // console.log(data);
    const review = {
      name: data.name,
      review: data.Description,
      rating: data.rating,
      img:
        user?.photoURL ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-MOxuRwldA5D6vQQM5-Cje2zSAUESGvewA&usqp=CAU",
    };
    // console.log(review);
    axiosPrivate.post(`http://localhost:5000/reviews`, review).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        reset();
        toast.success(`Your Review Succesfully Posted`);
      }
    });
  };
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className=" my-0">
      <h2 className="lg:text-3xl text-xl mb-8 text-center font-bold  text-yellow-500">
        Add A Review
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-7/12 mx-auto"
      >
        <input
          className="input input-bordered input-md"
          placeholder="Name"
          {...register("name", {
            required: {
              value: true,
              message: "Name is Required",
            },
          })}
          value={user.displayName}
        />
        <label className="label">
          {errors.name?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.name.message}
            </span>
          )}
        </label>

        <input
          className="input input-bordered input-md"
          placeholder="Rating"
          type={"number"}
          {...register("rating", {
            required: {
              value: true,
              message: "Rating is Required",
            },

            maxLength: {
              value: 1,
              message: "please enter 1 number of rating",
            },
            max: {
              value: 5,
              message: "please rate 0 - 5",
            },
          })}
        />
        <label className="label">
          {errors.rating?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.rating.message}
            </span>
          )}
          {errors.rating?.type === "max" && (
            <span className="label-text-alt text-red-500">
              {errors.rating.message}
            </span>
          )}
          {errors.rating?.type === "maxLength" && (
            <span className="label-text-alt text-red-500">
              {errors.rating.message}
            </span>
          )}
        </label>

        <textarea
          className="input h-32 input-bordered input-md"
          placeholder="Description"
          {...register("Description", {
            required: {
              value: true,
              message: "Description is Required",
            },
          })}
        />
        <label className="label">
          {errors.Description?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.Description.message}
            </span>
          )}
        </label>

        <input
          class="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 hover:text-black duration-500 mt-4 font-semibold text-stone-600  transition w-40 mx-auto text-center rounded-full cursor-pointer"
          type={"submit"}
          value={"Post Review"}
        />
      </form>
    </div>
  );
};

export default AddReview;
