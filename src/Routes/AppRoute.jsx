import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Signup, Home, Posts, WritePost, ViewPost, EditPost } from "../pages/index";
import { Nav, Footer } from "../components/index";
import { useEffect, useLayoutEffect } from "react";
import appAuth from "../app/AuthService";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/reducers/authSlice";
import { Toaster } from "react-hot-toast";
import { setLoadingFalse, setLoadingTrue } from "../store/reducers/loadingSlice";

const AppRoute = () => {
      // TODO: When user is opened the app it should
      //TODO be automatically logged in if session is already set
      const dispatch = useDispatch();
      useEffect(() => {
            try {
                  dispatch(setLoadingTrue());
                  appAuth
                        .getCurrentUser()
                        .then((userData) => {
                              if (userData) {
                                    console.table(userData);
                                    dispatch(login(userData));
                              } else dispatch(logout());
                        })
                        .catch(() => dispatch(logout()))
                        .finally(() => {
                              dispatch(setLoadingFalse());
                        });
            } catch (error) {
                  console.log(error.message);
                  dispatch(setLoadingFalse());
            }
      }, [dispatch]);
      const { pathname } = useLocation();
      useLayoutEffect(() => {
            window.scrollTo(0, 0);
      }, [pathname]);
      return (
            <>
                  <Toaster />
                  <Nav />
                  <Routes>
                        <Route index path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/create-account" element={<Signup />} />
                        <Route path="/journals" element={<Posts />} />
                        <Route path="/journals/:id" element={<ViewPost />} />
                        <Route path="/u/edit-post/:id" element={<EditPost />} />
                        <Route path="/write-post" element={<WritePost />} />
                  </Routes>
                  <Footer />
            </>
      );
};

export default AppRoute;
