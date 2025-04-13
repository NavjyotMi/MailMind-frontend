import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ShowEmail from "./ShowEmail";
import EmailList from "./EmailList";
function SentEmails() {
  const [allemails, setAllEmails] = useState(null);
  const activeAccount = useSelector((state) => state.active.activeAccount);
  useEffect(() => {
    async function getallSentEmail(params) {
      const emails = await axios.get(
        `https://email-segregator-backend-1.onrender.com/api/v1/user/sentemail/${activeAccount}`,
        { withCredentials: true }
      );

      setAllEmails(emails.data.email);
    }
    getallSentEmail();
  }, []);
  return (
    <>
      {allemails === null ? (
        <div>Loading...</div>
      ) : (
        <EmailList data={{ email: allemails }} />
      )}
    </>
  );
}

export default SentEmails;
