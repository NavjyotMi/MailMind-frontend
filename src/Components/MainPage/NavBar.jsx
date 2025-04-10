import React, { useState } from "react";
import { Mail } from "lucide-react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { SendHorizontal } from "lucide-react";
import defaults from "../../assets/defaults.svg";
import { CircleChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  console.log("how many times the children run ");
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user);
  function modalHandler() {
    setOpen((prev) => !prev);
  }
  return (
    <div className="w-[20%] mr-1 h-screen mt-5 fixed top-0 pl-5">
      <div className="border-1 border-gray-700 rounded-[10px]  p-2">
        <div className="flex flex-row justify-between items-center gap-1">
          <div>
            <img
              src={user?.picture || defaults}
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
            <CircleChevronDown
              size={30}
              strokeWidth={1}
              className={`cursor-pointer transition-transform duration-200 ${
                open ? "rotate-180" : "rotate-0"
              }`}
              onClick={modalHandler}
            />
          </div>
        </div>
        {open && (
          <div className="flex items-center justify-center">
            <Link
              to="/addaccount"
              className="border-1 rounded-[12px]  mt-1 p-2"
            >
              Add Account
            </Link>
          </div>
        )}
      </div>
      <div className="pt-5">
        <SearchBar />
      </div>

      <div className="mt-5">
        <div className="text-gray-300 mb-3 tracking-wide">Home </div>
        <div className="flex flex-col gap-3">
          <Link
            to="/home"
            className={`flex flex-row gap-3 tracking-wide py-2 px-1 rounded-md ${
              location.pathname === "/home" ? "bg-[#1A1C21] " : ""
            }`}
          >
            <Mail size={22} strokeWidth={1} />
            Inbox
          </Link>
          <Link
            to="sentemail"
            className={`flex flex-row gap-3 tracking-wide py-2 px-1 rounded-md ${
              location.pathname === "/home/sentemail" ? "bg-[#1A1C21] " : ""
            }`}
          >
            <SendHorizontal size={22} strokeWidth={1} />
            Sent
          </Link>
        </div>

        <div className="text-gray-300 mt-5 mb-3 tracking-wide">
          AI-Categorization
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <Link
              to="/home/important"
              className={`flex flex-row gap-3 tracking-wide py-2 px-1 rounded-md hover:opacity-80 cursor-pointer ${
                location.pathname === "/home/important" ? "bg-[#1A1C21] " : ""
              }`}
            >
              Important
            </Link>
            <Link
              to="/home/social"
              className={`flex flex-row gap-3 tracking-wide py-2 px-1 rounded-md hover:opacity-80 cursor-pointer ${
                location.pathname === "/home/social" ? "bg-[#1A1C21] " : ""
              }`}
            >
              Social
            </Link>
            <Link
              to="/home/promotions"
              className={`flex flex-row gap-3 tracking-wide py-2 px-1 rounded-md hover:opacity-80 cursor-pointer ${
                location.pathname === "/home/promotions" ? "bg-[#1A1C21] " : ""
              }`}
            >
              Promotion
            </Link>
            <Link
              to="/home/updates"
              className={`flex flex-row gap-3 tracking-wide py-2 px-1 rounded-md hover:opacity-80 cursor-pointer ${
                location.pathname === "/home/updates" ? "bg-[#1A1C21] " : ""
              }`}
            >
              Updates
            </Link>
            <Link
              to="/home/work"
              className={`flex flex-row gap-3 tracking-wide py-2 px-1 rounded-md hover:opacity-80 cursor-pointer ${
                location.pathname === "/home/work" ? "bg-[#1A1C21] " : ""
              }`}
            >
              Work
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
  // return <div>nothing</div>;
};

export default NavBar;
