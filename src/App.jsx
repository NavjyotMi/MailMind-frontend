import "./App.css";
import Login from "./Components/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/MainPage/Home";
import AddAccount from "./Components/Utils/AddAccount";
import AllEmails from "./Components/MainPage/AllEmails";
import ShowEmail from "./Components/MainPage/ShowEmail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />}>
            <Route index element={<AllEmails />} />
            <Route path="email/:id" element={<ShowEmail />} />
          </Route>
          <Route path="/addaccount" element={<AddAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
