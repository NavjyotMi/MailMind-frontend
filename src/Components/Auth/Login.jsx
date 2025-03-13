import React from "react";

function Login() {
  function handleSignup() {
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=125466525384-cdvft8moir56fj66b8jhmgn6lm52c82u.apps.googleusercontent.com&redirect_uri=http://localhost:5000/api/v1/auth/google/callback&response_type=code&scope=email%20profile%20https://www.googleapis.com/auth/gmail.readonly&access_type=offline&prompt=consent`;
  }
  return (
    <div>
      <button onClick={handleSignup}>Signup with google</button>
    </div>
  );
}

export default Login;
