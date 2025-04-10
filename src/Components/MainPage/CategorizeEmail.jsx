import React from "react";
import EmailList from "./EmailList";
import { useSelector } from "react-redux";
import { useGetEmailsQuery } from "../../Store/Email/EmailApi";
import { useParams } from "react-router-dom";

function CategorizeEmail() {
  const activeAccount = useSelector((state) => state.active.activeAccount);
  const { category } = useParams();
  const { data, isError, isLoading, error } = useGetEmailsQuery(activeAccount);
  console.log(data);
  const categorizedEmails = data?.email.filter((ele) => {
    return ele.category.toLowerCase() === category;
  });
  console.log(categorizedEmails);
  return <EmailList data={{ email: categorizedEmails }} />;
}

export default CategorizeEmail;
