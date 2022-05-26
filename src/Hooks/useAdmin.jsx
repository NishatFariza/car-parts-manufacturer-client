import { useState } from "react";
import axiosPrivate from "../Api/axiosPrivate";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState();
  const [adminLoading, setAdminLoading] = useState(true);
  // console.log(admin);
  axiosPrivate
    .get(`https://salty-bayou-55799.herokuapp.com/admin/${user.email}`)
    .then((data) => {
      // console.log(data.data);
      setAdmin(data.data.admin);
      setAdminLoading(false);
    });

  return [admin, adminLoading];
};
export default useAdmin;
