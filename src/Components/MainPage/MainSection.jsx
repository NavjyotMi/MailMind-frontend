import React from "react";
import Accounts from "./Accounts";
import { Outlet } from "react-router-dom";
const MainSection = () => {
  return (
    <div className="mt-5 ml-[22%] w-[80%] p-5 bg-[#0E0F15] border-t-1 border-l-1 border-r-1 rounded-t-[10px] border-gray-600 h-screen flex flex-col overflow-hidden">
      <Accounts />
      <div className="flex-grow overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainSection;
