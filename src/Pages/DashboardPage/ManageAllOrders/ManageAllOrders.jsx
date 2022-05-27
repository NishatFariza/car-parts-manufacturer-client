import { useQuery } from "react-query";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import axiosPrivate from "../../../Api/axiosPrivate";

const ManageAllOrders = () => {
  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("orders", () =>
    axiosPrivate.get("https://salty-bayou-55799.herokuapp.com/orders")
  );
  console.log(orders);

  const handleShip = (id, name) => {
    // console.log(name);

    axiosPrivate
      .put(`https://salty-bayou-55799.herokuapp.com/orderShip/${id}`)
      .then((data) => {
        console.log(data.data);
        if (data?.data.acknowledged) {
          toast.success(`${name} has been Successfully Shipped!`);
          refetch();
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleDelete = (id, name) => {
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
          .delete(`https://salty-bayou-55799.herokuapp.com/order/${id}`)
          .then((data) => {
            console.log(data.data);
            if (data.data.deletedCount > 0) {
              Swal.fire("Canceled!", `${name} has been Canceled.`, "success");
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
        Manage All Orders
      </h5>
      <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2  sm:py-3"></th>
              <th scope="col" className="py-2 sm:py-3">
                Customer Name
              </th>
              <th scope="col" className="py-2  sm:py-3">
                Product Name
              </th>
              <th scope="col" className="py-2 text-center sm:py-3">
                Total Price
              </th>
              <th scope="col" className="py-2 text-center sm:py-3">
                Quantity
              </th>
              <th scope="col" className="py-2 text-center sm:py-3">
                Payment
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.data?.map((order, i) => {
              return (
                <tr
                  key={order._id}
                  className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                >
                  <th
                    scope="row"
                    className="pl-3 pr-3 sm:pr-0 sm:pl-5 py-2  sm:py-4 font-medium text-gray-900 dark:text-white whitespace-nowraptext-[13px]"
                  >
                    {i + 1}
                  </th>
                  <td className="py-2 text-[13px] sm:py-4">
                    {order.customerName}
                  </td>
                  <td className="py-2 w-48  text-[13px] sm:py-4">
                    {order.name}
                  </td>
                  <td className="py-2 text-[13px]  text-center sm:py-4">
                    ${order.unitPrice}
                  </td>

                  <td className="py-2 text-[12px] sm:text-[13px] text-center sm:py-4">
                    {!order.paid && <p className="text-yellow-500">Unpaid</p>}
                    {!order.shipped && order.paid && (
                      <p className="text-green-500">Pending</p>
                    )}
                    {order.shipped && <p className="text-green-700">Paid</p>}
                  </td>
                  <td className="py-2 text-[12px] sm:text-[13px] text-center sm:py-4">
                    {!order.paid && (
                      <button
                        onClick={() => handleDelete(order._id, order.name)}
                        className="btn mr-1 btn-xs bg-yellow-500 text-white duration-300 border-none"
                      >
                        Cancel
                      </button>
                    )}

                    {!order.shipped && order.paid && (
                      <button
                        onClick={() => handleShip(order._id, order.name)}
                        className="btn mr-1 btn-xs bg-yellow-500 text-white duration-300 border-none"
                      >
                        Ship
                      </button>
                    )}
                    {order.shipped && <p className="text-green-700">Sipped</p>}
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

export default ManageAllOrders;
