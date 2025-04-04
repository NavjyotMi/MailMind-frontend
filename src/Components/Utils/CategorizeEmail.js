import axios from "axios";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function useCategorizeEmail() {
  const user = useSelector((state) => state.user);
  const emailData = useSelector(
    (state) => state.EmailApi.queries[`getEmails("${user.email}")`]?.data?.email
  );
  let hasRun = useRef(false);
  useEffect(() => {
    async function checkCategory() {
      if (!emailData || emailData.length === 0 || hasRun.current) {
        return;
      } else if (emailData.length > 0 && !hasRun.current) {
        // console.log(emailData);
        hasRun.current = true;
        console.log("the email length is empty");
        const finalData = await axios.get(
          "http://localhost:5000/api/v1/user/size",
          {
            withCredentials: true,
          }
        );
        console.log(finalData);
        const emailList = [user.email];
        user.linkedAccounts.map((ele) => emailList.push(ele.email));
        console.log(emailList);
        if (finalData.data.size === 0 && emailList.length !== 0) {
          await axios.post(
            "http://localhost:5000/api/v1/user/categorize",
            {
              body: { emailList },
            },
            { withCredentials: true }
          );
        }
      }
    }
    checkCategory();
  }, [emailData]);
}

export default useCategorizeEmail;
