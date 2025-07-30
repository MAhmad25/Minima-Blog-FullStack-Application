import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Signup, Home, Posts, WritePost, ViewPost } from "../pages/index";
import { Nav, Footer } from "../components/index";
import { useEffect, useLayoutEffect } from "react";
import appAuth from "../app/AuthService";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers/authSlice";

const AppRoute = () => {
      const dispatch = useDispatch();
      // const [loading]
      useEffect(() => {
            console.log("I am running again due to dispatch at approute");
            try {
                  appAuth
                        .getCurrentUser()
                        .then((userData) => {
                              console.log(userData);
                              dispatch(login(userData));
                        })
                        .catch((error) => console.log(error.message));
            } catch (error) {
                  console.log(error.message);
            }
      }, [dispatch]);
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
