import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Modal from "../Utils/Modal";

function SummarizerButton({ body }) {
  const activeAccount = useSelector((state) => state.active.activeAccount);
  const [summaryText, setSummaryText] = useState("");
  body = body.htmlBody || body.textBody;
  useEffect(() => {
    async function summarize() {
      const data = await axios.post(
        `https://email-segregator-backend-1.onrender.com/api/v1/user/summarize`,
        { email: activeAccount, body },
        { withCredentials: true }
      );
      setSummaryText(data.data.response.text);
    }
    summarize();
  }, []);
  console.log(summaryText);
  return (
    <>
      {summaryText.length === 0 ? (
        <div>Loading</div>
      ) : (
        <div className="bg-[#091018] rounded-md p-2 my-2 border-1 border-gray-700">
          {summaryText}
        </div>
      )}
    </>
  );
}

export default SummarizerButton;
