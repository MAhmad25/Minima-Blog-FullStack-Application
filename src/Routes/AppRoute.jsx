import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Posts from "../pages/Posts";
import ViewPost from "../pages/ViewPost";
import { useLayoutEffect } from "react";
import WritePost from "../pages/WritePost";

const AppRoute = () => {
      const { pathname } = useLocation();
      useLayoutEffect(() => {
            window.scrollTo(0, 0);
      }, [pathname]);
      return (
            <>
                  <Nav />
                  <Routes>
                        <Route index path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/create-account" element={<Signup />} />
                        <Route path="/journals" element={<Posts />} />
                        <Route path="/journals/:id" element={<ViewPost />} />
                        <Route path="/write-post" element={<WritePost />} />
                  </Routes>
                  <Footer />
            </>
      );
};

export default AppRoute;
