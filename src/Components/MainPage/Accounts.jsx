import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeAcount } from "../../Store/Active/IsActive";
import { useLocation, useNavigate } from "react-router-dom";

export default function Accounts() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const useremail = useSelector((state) => state.user.email);
  function activeAccountHandler(acc) {
    const obj = {
      mainAccount: useremail,
      activeAccount: acc,
    };
    dispatch(activeAcount(obj));
    if (location.pathname !== "/home") navigate("/home");
  }
  return (
    <div className="h-[5rem] border-gray-500 bg-[#0E0F15] border-1 rounded-[12px]">
      <div className="flex flex-row gap-5 px-10 py-5">
        <div
          onClick={() => activeAccountHandler(useremail)}
          className="border-1 border-gray-300 py-2 px-4 rounded-[12px]"
        >
          {`${useremail.substring(0, 15)}...`}
        </div>
        {user?.linkedAccounts.size != 0 &&
          user?.linkedAccounts.map((ele) => (
            <div
              key={ele._id}
              onClick={() => activeAccountHandler(ele.email)}
              className="border-1 border-gray-300 py-2 px-4 rounded-[12px]"
            >
              {`${ele.email.substring(0, 15)}...`}
            </div>
          ))}
      </div>
    </div>
  );
}
