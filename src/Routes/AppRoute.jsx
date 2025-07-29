import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Signup, Home, Posts, WritePost, ViewPost } from "../pages/index";
import { Nav, Footer } from "../components/index";
import { useLayoutEffect } from "react";

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
