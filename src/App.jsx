import "./App.css";
import Login from "./Components/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/MainPage/Home";
import AddAccount from "./Components/Utils/AddAccount";
import AllEmails from "./Components/MainPage/AllEmails";
import ShowEmail from "./Components/MainPage/ShowEmail";
import SentEmails from "./Components/MainPage/SentEmails";
import CategorizeEmail from "./Components/MainPage/CategorizeEmail";
import SearchEmail from "./Components/MainPage/SearchEmail";
import UndefinedRoute from "./Components/Utils/UndefinedRoute";
import LandingPage from "./Components/MainPage/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />}>
            <Route index element={<AllEmails />} />
            <Route path="email/:id" element={<ShowEmail />} />
            <Route path="sentemail" element={<SentEmails />} />
            <Route path="sentemail/email/:id" element={<ShowEmail />} />
            <Route path=":category" element={<CategorizeEmail />} />
            <Route path="search" element={<SearchEmail />} />
          </Route>
          <Route path="/addaccount" element={<AddAccount />} />
          <Route path="*" element={<UndefinedRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
