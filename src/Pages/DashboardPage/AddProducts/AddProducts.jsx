import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axiosPrivate from "../../../Api/axiosPrivate";

const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imgStorage_key = `2cc4db0003362bc3f65371093b9319bd`;
  const onSubmit = async (data) => {
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorage_key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const imgUrl = result.data.url;
          const product = {
            name: data.name,
            price: data.price,
            description: data.description,
            minimumOrder: data.minimumOrder,
            availableQuantity: data.availableQuantity,
            img: imgUrl,
          };
          //   console.log(product);
          axiosPrivate
            .post(`http://localhost:5000/product`, product)
            .then((data) => {
              // console.log(data.data);
              if (data.data.success) {
                toast.success(`${data.data.message}`);
                reset();
              } else {
                toast.success(`${data.data.message}`);
              }
            });
        }
      });
  };

  return (
    <div className="">
      <h2 className="lg:text-3xl text-xl mb-4 text-center font-bold  text-yellow-500">
        Add A Products
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
        />
        <label className="label">
          {errors.name?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.name.message}
            </span>
          )}
        </label>

        <div className="flex flex-wrap justify-between">
          <div className="sm:w-6/12 ">
            <input
              className="input input-bordered input-md px-5"
              placeholder="Price"
              type={"number"}
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-700">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          <div className="sm:w-6/12">
            <input
              className="input input-bordered input-md px-5"
              placeholder="Available Quantity"
              type={"number"}
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "Available Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.availableQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.availableQuantity.message}
                </span>
              )}
            </label>
          </div>
        </div>

        <input
          className="input input-bordered input-md"
          placeholder="Minimum Order Quantity"
          type={"number"}
          {...register("minimumOrder", {
            required: {
              value: true,
              message: "Minimum Order Quantity is Required",
            },
          })}
        />
        <label className="label">
          {errors.minimumOrder?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.minimumOrder.message}
            </span>
          )}
        </label>
        <label className="label">
          <span className="label-text">Select Image</span>
        </label>
        <input
          type={"file"}
          className="ml-1 "
          {...register("img", {
            required: {
              value: true,
              message: "image is Required",
            },
          })}
        />
        <label className="label">
          {errors.img?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.img.message}
            </span>
          )}
        </label>

        <textarea
          className="input h-32 mt-2 input-bordered input-md"
          placeholder="Description"
          {...register("description", {
            required: {
              value: true,
              message: "Description is Required",
            },
          })}
        />
        <label className="label">
          {errors.description?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.description.message}
            </span>
          )}
        </label>

        <input
          class="border border-yellow-600 px-6 py-2 hover:bg-yellow-600 hover:text-black duration-500 mt-4 font-semibold text-stone-600  transition w-40 mx-auto text-center rounded-full cursor-pointer"
          type={"submit"}
          value={"Add Products"}
        />
      </form>
    </div>
  );
};

export default AddProducts;
