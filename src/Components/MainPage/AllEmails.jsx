import React, { useEffect } from "react";
import {
  useGetCategorizedEmailMutation,
  useGetEmailsQuery,
} from "../../Store/Email/EmailApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllEmails = () => {
  const activeaccount = useSelector((state) => state.active.activeAccount);
  const { data, isError, isLoading, error } = useGetEmailsQuery(activeaccount, {
    skip: !activeaccount,
  });
  const [categorizedEmails] = useGetCategorizedEmailMutation();
  const today = new Date();
  if (isLoading) <div>Loading</div>;
  useEffect(() => {
    const fetchCategorizedEmails = async () => {
      try {
        const response = await categorizedEmails(data.email).unwrap();
        console.log("Categorized Emails:", response);
      } catch (err) {
        console.error("Error categorizing emails:", err);
      }
    };

    if (data?.email) fetchCategorizedEmails();
  }, [data, categorizedEmails]);

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
                  <div className="text-[17px]">
                    {ele.subject.replace(/^"|"$/g, "")}
                  </div>
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
