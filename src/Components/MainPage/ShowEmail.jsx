import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ShowEmail() {
  const activeAccount = useSelector((state) => state.active.activeAccount);
  const { id } = useParams();
  const data = useSelector(
    (state) =>
      state.EmailApi.queries[`getEmails("${activeAccount}")`]?.data?.email || []
  );
  const email = data.find((email) => email.id === id);
  const today = new Date();
  if (!email.body) {
  }
  return (
    <div className="mt-[3%]">
      <div>
        <div>
          <div>{email?.from.split("<")[0]}</div>
          <div>{email?.from.split("<")[1]}</div>
        </div>
        <div>
          {new Date(email?.date).getDate() === today.getDate()
            ? `${new Date(email?.date).getHours()}: ${new Date(
                email?.date
              ).getMinutes()}`
            : `${new Date(email?.date).toLocaleString("en-US", {
                month: "short",
              })} ${new Date(email?.date).getDate()}`}
        </div>
      </div>
      <div>{email?.to}</div>
      {/* <div>{email.data}</div> */}
      <div>{email?.subject}</div>
      <div dangerouslySetInnerHTML={{ __html: email?.body }} />
    </div>
  );
}

export default ShowEmail;
