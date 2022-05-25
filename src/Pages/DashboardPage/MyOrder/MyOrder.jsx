import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import axiosPrivate from "../../../Api/axiosPrivate";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const MyOrder = () => {
  // const [orders, setOrders] = useState([])
  const [user, loading] = useAuthState(auth);

  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("orders", () =>
    axiosPrivate.get(`http://localhost:5000/orders/${user.email}`)
  );
  const hnadleDelete = (id, name) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Canceled Order!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate
          .delete(`http://localhost:5000/order/${id}`)
          .then((data) => {
            console.log(data.data);
            if (data.data.deletedCount > 0) {
              Swal.fire("Canceled!", `${name} has been Canceled.`, "success");
              refetch();
            } else {
              toast.error("Somthing is Wrong !");
            }
          });
      }
    });
  };

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="sm:px-10 px-2 pb-5">
      <h5 className="lg:text-3xl text-xl mb-4 text-center font-bold  text-yellow-500">
        My Orders
      </h5>
      <div class="relative  overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-2  sm:py-3"></th>
              <th scope="col" class="py-2  sm:py-3">
                Product Name
              </th>
              <th scope="col" class="py-2 text-center sm:py-3">
                Total Price
              </th>
              <th scope="col" class="py-2 text-center sm:py-3">
                Quanity
              </th>
              <th scope="col" class="py-2 text-center sm:py-3">
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.data?.map((order, i) => {
              return (
                <tr
                  key={order._id}
                  class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <th
                    scope="row"
                    class="pl-3 pr-3 sm:pr-0 sm:pl-5 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]"
                  >
                    {i + 1}
                  </th>
                  <td class="py-2 w-60  text-[13px] sm:py-4">{order.name}</td>
                  <td class="py-2 text-[13px]  text-center sm:py-4">
                    {order.unitPrice}
                  </td>
                  <td class="py-2 text-[13px] text-center sm:py-4">
                    {order.quanity}
                  </td>
                  <td class="py-2 text-[13px] text-center sm:py-4">
                    {!order.pay ? (
                      <>
                        <button
                          onClick={() => hnadleDelete(order._id, order.name)}
                          className="btn mr-1 btn-xs bg-red-500 text-white border-none"
                        >
                          Cancel
                        </button>
                        <button className="btn btn-xs bg-success text-white border-none">
                          Pay
                        </button>
                      </>
                    ) : (
                      <p className="text-success">Paid</p>
                    )}
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

export default MyOrder;