import React from "react";
import Accounts from "./Accounts";
import { Outlet } from "react-router-dom";
import useCategorizeEmail from "../Utils/CategorizeEmail";
import { useGetEmailsQuery } from "../../Store/Email/EmailApi";
import useWebSocketNotifications from "../Utils/useWebSocketClient";
import { useSelector } from "react-redux";
const MainSection = () => {
  const activeaccount = useSelector((state) => state.active.activeAccount);
  const { data, isError, isLoading, error, refetch } = useGetEmailsQuery(
    activeaccount,
    {
      skip: !activeaccount,
    }
  );

  useWebSocketNotifications(refetch);
  useCategorizeEmail();
  return (
    <div className="ml-[22%] w-[80%] px-5 pt-5 bg-[#0E0F15] border-l-1 border-r-1 border-gray-700 h-screen flex flex-col overflow-hidden">
      <Accounts />
      <div className="flex-grow overflow-auto border-l-1 border-t-1 border-gray-700 rounded-t-2xl mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default MainSection;
