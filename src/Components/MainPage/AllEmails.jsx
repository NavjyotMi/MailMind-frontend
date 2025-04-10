import React, { useEffect } from "react";
import { useGetEmailsQuery } from "../../Store/Email/EmailApi";
import { useSelector } from "react-redux";
import EmailList from "./EmailList";

const AllEmails = () => {
  const activeaccount = useSelector((state) => state.active.activeAccount);
  const { data, isError, isLoading, error, refetch } = useGetEmailsQuery(
    activeaccount,
    {
      skip: !activeaccount,
      refetchOnMountOrArgChange: false,
    }
  );
  const today = new Date();
  console.log(data);
  if (isLoading) return <div>Loading</div>;
  return <>{<EmailList data={data} type="ALL" />}</>;
};

export default AllEmails;
