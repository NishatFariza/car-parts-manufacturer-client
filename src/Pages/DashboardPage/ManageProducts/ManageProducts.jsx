import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import axiosPrivate from "../../../Api/axiosPrivate";
import Loading from "../../Shared/Loading/Loading";

const ManageProducts = () => {
  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery("products", () =>
    axiosPrivate.get("https://salty-bayou-55799.herokuapp.com/products")
  );

  const handleDelete = (id, name) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate
          .delete(`https://salty-bayou-55799.herokuapp.com/product/${id}`)
          .then((data) => {
            // console.log(data.data);
            if (data.data.deletedCount > 0) {
              Swal.fire("Deleted!", `${name} has been Deleted.`, "success");
              refetch();
            } else {
              toast.error("Something is Wrong !");
            }
          });
      }
    });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="sm:px-10 px-2 pb-5">
      <h5 className="lg:text-3xl text-xl mb-4 text-center font-bold  text-yellow-500">
        Mange Product
      </h5>
      <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2  sm:py-3"></th>
              <th scope="col" className="py-2  sm:py-3">
                Product Name
              </th>
              <th scope="col" className="py-2 text-center sm:py-3">
                Price
              </th>
              <th scope="col" className="py-2 text-center sm:py-3">
                Stock
              </th>
              <th scope="col" className="py-2 text-center sm:py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.data?.map((product, i) => {
              // console.log(product.availableQuantity);

              return (
                <tr
                  key={product._id}
                  className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <th
                    scope="row"
                    className="pl-3 pr-3 sm:pr-0 sm:pl-5 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]"
                  >
                    {i + 1}
                  </th>
                  <td className="py-2 w-60  text-[13px] sm:py-4">
                    {product.name}
                  </td>
                  <td className="py-2 text-[13px]  text-center sm:py-4">
                    ${product.price}
                  </td>
                  <td className="py-2 text-[13px] text-center sm:py-4">
                    {product.availableQuantity}
                  </td>
                  <td className="py-2 text-[13px] text-center sm:py-4">
                    <button
                      onClick={() => handleDelete(product._id, product.name)}
                      className="btn mr-1 btn-xs bg-red-500 text-white duration-300 border-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
