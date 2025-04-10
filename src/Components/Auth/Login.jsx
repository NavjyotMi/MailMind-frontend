import React from "react";
import img from "../../assets/google.png";

function Login() {
  function handleSignup() {
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=125466525384-cdvft8moir56fj66b8jhmgn6lm52c82u.apps.googleusercontent.com&redirect_uri=http://localhost:5000/api/v1/auth/google/callback&response_type=code&scope=email%20profile%20https://www.googleapis.com/auth/gmail.modify&access_type=offline&prompt=consent`;
  }
  return (
    // <div>
    //   <button onClick={handleSignup}>Signup with google</button>
    // </div>
    <div
      className="flex justify-center items-center h-screen px-4"
      style={{ backgroundColor: "#0e0f15" }}
    >
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-xl w-full max-w-md text-center shadow-md">
        <h1 className="text-3xl font-semibold text-white mb-4 tracking-wide">
          Sign in to Continue
        </h1>

        <p className="text-gray-400 text-sm mb-8">
          Use your Google account to get started.
        </p>

        <button
          onClick={handleSignup}
          className="flex items-center justify-center w-full gap-3 py-3 px-6 border border-gray-600 bg-transparent text-white text-sm rounded-lg hover:border-gray-400 transition-all duration-200 cursor-pointer"
        >
          <img className="w-5 h-5" src={img} alt="Google logo" />
          {/* {im} */}
          Sign in with Google
        </button>

        <div className="mt-6 text-xs text-gray-500">
          By signing in, you agree to our{" "}
          <a href="/terms" className="underline hover:text-gray-300">
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline hover:text-gray-300">
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default Login;
