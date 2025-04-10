import React, { useEffect } from "react";
import { useGetUserQuery } from "../../Store/User/UserApi";
import { useDispatch } from "react-redux";
import { addUserToSlice } from "../../Store/User/UserSlice";
import NavBar from "./NavBar";
import MainSection from "./MainSection";
import { activeAcount } from "../../Store/Active/IsActive";

const Home = () => {
  const dispatch = useDispatch();
  const { data, isError, isLoading, error } = useGetUserQuery();
  useEffect(() => {
    if (data) {
      const obj = {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        picture: data.picture,
        linkedAccounts: data.linkedAccounts,
      };
      dispatch(addUserToSlice(obj));
      const obj1 = {
        activeAccount: data.email,
        mainAccount: data.email,
      };
      dispatch(activeAcount(obj1));
    }
  }, [data?.fname]);
  if (isError) {
    console.error("API Error:", error);
    return <div>Error: {error?.data?.message || "Something went wrong"}</div>;
  }

  if (isLoading) return <div>Loading</div>;
  return (
    <div className="flex flex-row gap-[10rem] h-screen ">
      <NavBar />
      <MainSection />
    </div>
  );
};

export default Home;
