import React from "react";
import { useSelector } from "react-redux";

export default function Accounts() {
  const useremail = useSelector((state) => state.user.email);
  return (
    <div className="h-[5rem] border-gray-500 bg-[#0E0F15] border-1 rounded-[12px]">
      <div className="flex flex-row gap-5 px-10 py-5">
        <div className="border-1 border-gray-300 py-2 px-4 rounded-[12px]">
          {useremail}
        </div>
      </div>
    </div>
  );
}
