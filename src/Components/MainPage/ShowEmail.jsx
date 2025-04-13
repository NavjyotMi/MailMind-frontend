import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SummarizerButton from "./SummarizerButton";

function ShowEmail() {
  const activeAccount = useSelector((state) => state.active.activeAccount);
  const [email, setEmail] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function callThisFucntion() {
      console.log(id);
      const data = await axios.post(
        `https://email-segregator-backend-1.onrender.com/api/v1/user/email/${id}`,
        { email: activeAccount },
        { withCredentials: true }
      );
      setEmail(data);
    }
    callThisFucntion();
  }, []);

  console.log(email);
  const today = new Date();
  function summarizeButtonHandler() {
    setIsOpen(true);
  }
  return (
    <div className="mt-[3%]">
      {!email ? (
        <div>things are pretty empty</div>
      ) : (
        <div className="px-5 pb-6 tracking-wide font-extralight">
          <div className="flex flex-row justify-between items-center py-2">
            <div>
              <div>
                <div className=" font-sans text-[20px] font-medium">
                  {email?.data.parsedData?.from.split("<")[0]}
                </div>
                <div>
                  {email?.data.parsedData?.from
                    .split("<")[1]
                    ?.trim()
                    ?.replace(/^./, (char) => char.toUpperCase())}
                </div>
              </div>
            </div>
            <div>
              <div>
                {new Date(email?.data.parsedData?.date).getDate() ===
                today.getDate()
                  ? `${new Date(
                      email?.data.parsedData?.date
                    ).getHours()}: ${new Date(
                      email?.data.parsedData?.date
                    ).getMinutes()}`
                  : `${new Date(email?.data.parsedData?.date).toLocaleString(
                      "en-US",
                      {
                        month: "short",
                      }
                    )} ${new Date(email?.data.parsedData?.date).getDate()}`}
              </div>
            </div>
          </div>
          <div>Sent to: {activeAccount}</div>
          <div className="font-extralight">
            {email?.data.parsedData?.subject}
          </div>
          <button
            onClick={summarizeButtonHandler}
            className="border-1 border-gray-700 p-2 rounded-md my-2 cursor-pointer"
          >
            Summarize
          </button>
          {isOpen && <SummarizerButton body={email?.data?.parsedData?.body} />}

          <div>{email?.data.parsedData.data}</div>
          {email?.data?.parsedData?.body?.htmlBody ? (
            <div
              dangerouslySetInnerHTML={{
                __html: email?.data.parsedData.body.htmlBody,
              }}
            />
          ) : email?.data.parsedData.body.textBody ? (
            <pre className="whitespace-pre-wrap text-sm text-gray-800">
              {email?.data.parsedData.body.textBody}
            </pre>
          ) : (
            <p>No content available.</p>
          )}
        </div>
      )}
      {email?.data?.parsedData?.body.attachmentId && (
        <div>This email has attachement: [PDF]</div>
      )}
    </div>
  );
}

export default ShowEmail;
