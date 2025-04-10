import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function EmailList({ data, type = null }) {
  const activeaccount = useSelector((state) => state.active.activeAccount);
  const skip = 10;
  const [page, setPage] = useState(0);
  useEffect(() => {
    setPage(0);
  }, [activeaccount]);
  const today = new Date();
  let initialNumber = skip * page;
  if (type === "ALL") {
    console.log("hello there");
  }

  const email = data?.email.slice(initialNumber, initialNumber + skip);
  // console.log();
  function clickbuttonHandler(payload) {
    if (payload === "PREV") {
      setPage((prev) => prev - 1);
    }
    if (payload === "NEXT") {
      setPage((prev) => prev + 1);
    }
  }
  return (
    <>
      {email?.length === 0 && (
        <div className="p-2">There is no email for this Category</div>
      )}
      <div className="">
        <div className=" flex-grow">
          {email &&
            email.map((ele) => (
              <Link
                key={ele.id}
                to={`email/${ele.id}`}
                className="p-3 flex flex-row justify-between items-center border-b-1 border-gray-700 py-1 pr-5"
              >
                <div className="flex flex-col gap-1 w-[90%] ">
                  <div className="text-[17px]">{ele.from.split("<")[0]}</div>
                  <div className="text-[15px]">{ele.subject}</div>
                  <div className="text-[12px] tracking-wide">{ele.snippet}</div>
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
              </Link>
            ))}
        </div>
        <div className="flex justify-between">
          {page !== 0 && (
            <button onClick={() => clickbuttonHandler("PREV")} className="p-2">
              Prev
            </button>
          )}
          {(page + 1) * skip < data?.email.length && (
            <button onClick={() => clickbuttonHandler("NEXT")} className="p-2">
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default EmailList;
