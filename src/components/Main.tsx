import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
