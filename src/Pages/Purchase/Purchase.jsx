import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../Api/axiosPrivate";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Purchase = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [product, setProduct] = useState({});
  const [quanity, setQuantity] = useState(null);
  const [quanityError, setQuantityError] = useState(null);
  const [pLoading, setPLoading] = useState(true);
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    axiosPrivate.get(`http://localhost:5000/product/${id}`).then((data) => {
      setProduct(data.data);
      setQuantity(data.data.quantity);
      setPLoading(false);
    });
  }, [id]);

  if (loading || pLoading) {
    return <Loading></Loading>;
  }

  const {
    img,
    name,
    price,
    minimumOrder: minimumOrder,
    availableQuantity: availableQuantity,
  } = product;
  // console.log(part);
  const handlePurchase = (event) => {
    event.preventDefault();
    const quantity = event.target.quanity.value;
    const unitPrice = quantity * price;
    const purchaseInfo = {
      customerName: user.displayName,
      customerEmail: user.email,
      customerPhone: event.target.phone.value,
      customerAddress: event.target.address.value,
      name,
      unitPrice,
      price,
      quantity,
      img,
    };
    // console.log(purchaseInfo);
    axiosPrivate
      .post("http://localhost:5000/orders", purchaseInfo)
      .then((data) => {
        if (data.data.insertedId) {
          toast.success(`${name} Order Successfully!`);
          event.target.reset();
          setQuantity(minimumOrder);
        } else {
          toast.error(`Something is Wrong`);
        }
      });
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
    if (e.target.value < minimumOrder) {
      setQuantityError(`You Have to Purchase AtLeast ${minimumOrder} Products`);
      return;
    }
    if (e.target.value > availableQuantity) {
      setQuantityError("Please Order Less Then Available Stock!");
      return;
    }
    setQuantityError(null);
  };

  return (
    <div style={{ fontFamily: "Merriweather" }} className="my-[64px]">
      <div className="flex justify-evenly flex-col-reverse sm:flex-row pt-8 sm:pt-20 w-11/12 sm:container mx-auto">
        <div className="flex flex-col p-2 sm:p-10 sm:text-left text-center sm:mt-0 mt-3 md:flex-row md:w-8/12  rounded-lg bg-white shadow-lg">
          <div className="w-11/12 mx-auto sm:mx-0 mb-10 sm:mb-0 sm:w-4/12 text-center">
            <h2 className="">{name}</h2>
            <img
              className="w-56  sm:mx-0 mx-auto sm:w-full h-32 sm:h-96 md:h-48 object-cover md:w-56 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={img}
              alt=""
            />
            <h2 className="">Minimum Order Quanity : {minimumOrder}</h2>
            <h2 className="">Stock : {availableQuantity}</h2>
          </div>

          <form
            onSubmit={handlePurchase}
            className="sm:pl-16 sm:w-auto w-11/12 mx-auto sm:mx-0 text-left"
          >
            <div class="relative z-0  w-full mb-6 group">
              <input
                type="text"
                name="floating_password"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required=""
                readOnly
                disabled
                value={user.displayName}
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required=""
                readOnly
                disabled
                value={user.email}
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="address"
                id="floating_repeat_password"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
                required
              />
              <label
                for="floating_repeat_password"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="number"
                  name="phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required=""
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  onChange={handleQuantity}
                  type="number"
                  name="quanity"
                  id="floating_company"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                  value={quanity == null ? minimumOrder : quanity}
                />
                <label className="label">
                  {quanityError && (
                    <span className="label-text-alt text-red-500">
                      {quanityError}
                    </span>
                  )}
                </label>
                <label
                  for="floating_company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Qunatity
                </label>
              </div>
            </div>
            <div className="flex justify-center mb-3 sm:mb-0">
              <button
                disabled={
                  (quanity < minimumOrder || quanity > availableQuantity) &&
                  true
                }
                type="submit"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  letterSpacing: "2px",
                }}
                class={
                  quanity < minimumOrder || quanity > availableQuantity
                    ? `bg-gray-400 text-white rounded-full  px-6 text-sm sm:text-base sm:px-10 py-1.5 sm:py-2`
                    : `hover:bg-white  bg-primary mr-2 transition hover:text-primary rounded-full text-white border-2 border-primary px-6 text-sm sm:text-base sm:px-10 py-1.5 sm:py-2`
                }
              >
                Purchase
              </button>

              <label
                onClick={() => setProductDetail(true)}
                for="purchase-modal"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  letterSpacing: "2px",
                }}
                class="hover:bg-primary transition hover:text-white rounded-full text-primary border-2 border-primary  px-6 text-sm sm:text-base sm:px-10 py-1.5 sm:py-2"
              >
                Details
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
