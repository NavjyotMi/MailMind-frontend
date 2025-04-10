import React, { useEffect, useState } from "react";
import { useGetEmailsQuery } from "../../Store/Email/EmailApi";
import { useSelector } from "react-redux";
import EmailList from "./EmailList";
import { useSearchParams } from "react-router-dom";

function SearchEmail() {
  // const [email, setEmail] = useState([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("query") || "";
  const activeAccount = useSelector((state) => state.active.activeAccount);
  const { data, isError, isLoading, error } = useGetEmailsQuery(activeAccount);

  const filteredEmail = data?.email?.filter((ele) => {
    if (
      ele.snippet.toLowerCase().includes(keyword) ||
      ele.from.toLowerCase().includes(keyword)
    )
      return ele;
  });

  console.log(filteredEmail);

  return (
    <>
      {filteredEmail.length === 0 ? (
        <div>No Email found</div>
      ) : (
        <EmailList data={{ email: filteredEmail }} />
      )}
    </>
  );
}

export default SearchEmail;
