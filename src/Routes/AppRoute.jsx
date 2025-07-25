import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Nav from "../components/Nav";

const AppRoute = () => {
      return (
            <>
                  <Nav />
                  <Routes>
                        <Route index path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/create-account" element={<Signup />} />
                  </Routes>
            </>
      );
};

export default AppRoute;
