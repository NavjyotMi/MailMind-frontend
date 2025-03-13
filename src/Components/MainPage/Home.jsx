import React, { useEffect } from "react";

import axios from "axios";
const Home = () => {
  console.log("the component is being mounted");
  useEffect(() => {
    async function getuserInfo() {
      // const data = await axios.get(
      //   "http://localhost:5000/api/v1/auth/userinfo",
      //   { withCredentials: true }
      // );
      const data = await axios.get(
        "http://localhost:5000/api/v1/user/getmail",
        { withCredentials: true }
      );

      console.log(data);
    }
    getuserInfo();
  }, []);
  return <div>home</div>;
};

export default Home;
