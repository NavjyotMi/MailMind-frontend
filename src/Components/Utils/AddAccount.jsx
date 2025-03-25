import React from "react";
import axios from "axios";
const AddAccount = () => {
  function handleSignup() {
    axios
      .get("http://localhost:5000/api/v1/auth/addaccount", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        window.location.href = response.data.redirecturi;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <div>
        <button onClick={handleSignup}>Signup with google</button>
      </div>
    </div>
  );
};

export default AddAccount;
