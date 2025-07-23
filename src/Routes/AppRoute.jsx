import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AppRoute = () => {
      return (
            <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Login />} />
                  <Route path="/create-account" element={<Signup />} />
            </Routes>
      );
};

export default AppRoute;
