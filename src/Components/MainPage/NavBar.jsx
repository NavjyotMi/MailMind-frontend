import React from "react";
import { Mail } from "lucide-react";
import { CircleChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import { SendHorizontal } from "lucide-react";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="w-[20%] mr-1 h-screen mt-5 fixed top-0 pl-5">
      <div>
        <div className="flex flex-row justify-between items-center border-1 gap-1 border-gray-500 rounded-[10px] bg-[#141C25] p-2">
          <div>
            <img
              src={user?.picture}
              alt=""
              className="rounded-[50%] w-[2rem]"
            />
          </div>
          <div>
            <div className="text-[15px]">{`${user?.fname} ${user?.lname}`}</div>
            <div className="text-[12px]">
              {user?.email?.length > 20
                ? `${user.email.substring(0, 20)}...`
                : user.email}
            </div>
          </div>
          <div>
            <CircleChevronDown size={30} strokeWidth={1} />
          </div>
        </div>
      </div>
      <div className="py-5 border-b border-dashed">
        <button className="border w-[100%] py-2 rounded-[5px] ">Compose</button>
      </div>

      <div className="mt-5">
        <div className="text-gray-300 mb-3">Home </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-3">
            <Mail size={25} strokeWidth={1} />
            Inbox
          </div>
          <div className="flex flex-row gap-3">
            <SendHorizontal size={25} strokeWidth={1} />
            Sent
          </div>
        </div>

        <div className="text-gray-300 mt-5 mb-3">AI-Categorization</div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="text-[#4A90E2] hover:opacity-80 cursor-pointer">
              Primary
            </li>
            <li className="text-[#7ED321] hover:opacity-80 cursor-pointer">
              Personal
            </li>
            <li className="text-[#F5A623] hover:opacity-80 cursor-pointer">
              Promotion
            </li>
            <li className="text-[#BD10E0] hover:opacity-80 cursor-pointer">
              Span
            </li>
            <li className="text-[#D0021B] hover:opacity-80 cursor-pointer">
              Professional
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
