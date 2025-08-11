import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Signup, Home, Posts, WritePost, ViewPost, EditPost } from "../pages/index";
import { Nav, Footer } from "../components/index";
import { useEffect, useLayoutEffect } from "react";
import appAuth from "../app/AuthService";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/reducers/authSlice";
import { Toaster } from "react-hot-toast";
import { setLoadingFalse, setLoadingTrue } from "../store/reducers/loadingSlice";
import Protected from "./Protected";

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
                        <Route
                              path="/login"
                              element={
                                    <Protected authentication={false}>
                                          <Login />
                                    </Protected>
                              }
                        />
                        <Route
                              path="/create-account"
                              element={
                                    <Protected authentication={false}>
                                          <Signup />
                                    </Protected>
                              }
                        />
                        <Route
                              path="/journals"
                              element={
                                    <Protected>
                                          <Posts />
                                    </Protected>
                              }
                        />
                        <Route
                              path="/journals/:id"
                              element={
                                    <Protected>
                                          <ViewPost />
                                    </Protected>
                              }
                        />
                        <Route
                              path="/u/edit-post/:id"
                              element={
                                    <Protected>
                                          <EditPost />
                                    </Protected>
                              }
                        />
                        <Route
                              path="/write-post"
                              element={
                                    <Protected>
                                          <WritePost />
                                    </Protected>
                              }
                        />
                  </Routes>
                  <Footer />
            </>
      );
};

export default AppRoute;
