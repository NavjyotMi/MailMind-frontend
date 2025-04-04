import React, { useEffect } from "react";
import { useGetEmailsQuery } from "../../Store/Email/EmailApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import useWebSocketNotifications from "../Utils/useWebSocketClient";

const AllEmails = () => {
  const activeaccount = useSelector((state) => state.active.activeAccount);
  const { data, isError, isLoading, error, refetch } = useGetEmailsQuery(
    activeaccount,
    {
      skip: !activeaccount,
    }
  );
  useWebSocketNotifications(refetch);
  const today = new Date();
  if (isLoading) return <div>Loading</div>;
  return (
    <>
      <div className="mt-[3%]">
        <div>
          <input
            type="text"
            className="border-1"
            placeholder="Search for email"
          />
        </div>
        <div className="flex-grow h-[calc(100vh-50px)]">
          {data &&
            data?.email.map((ele) => (
              <Link
                key={ele.id}
                to={`email/${ele.id}`}
                className=" flex flex-row justify-between items-center border-b-1 py-1 pr-5"
              >
                <div className="flex flex-col w-[90%] ">
                  <div className="text-[17px] font-[200]">
                    {ele.from.split("<")[0]}
                  </div>
                  {/* <div className="text-[17px]">
                    {ele.subject.replace(/^"|"$/g, "")}
                  </div> */}
                  <div className="text-[12px]">{ele.snippet}</div>
                </div>
                <div className="w-10%">
                  {new Date(ele.date).getDate() === today.getDate()
                    ? `${new Date(ele.date).getHours()}: ${new Date(
                        ele.date
                      ).getMinutes()}`
                    : `${new Date(ele.date).toLocaleString("en-US", {
                        month: "short",
                      })} ${new Date(ele.date).getDate()}`}
                </div>
                {/* <Link to={`email/${data.email[0].id}`}>Click here</Link> */}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllEmails;
