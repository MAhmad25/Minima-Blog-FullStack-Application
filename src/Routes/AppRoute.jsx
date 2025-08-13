import { Route, Routes } from "react-router-dom";
import { Login, Signup, Home, Posts, WritePost, ViewPost, EditPost, Page404 } from "../pages/index";
import { Nav, Footer, ScreenLoader } from "../components/index";
import { useEffect, useState } from "react";
import appAuth from "../app/AuthService";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/reducers/authSlice";
import { Toaster } from "react-hot-toast";
import Protected from "./Protected";
import useAllPosts from "../hooks/useAllPosts";

const AppRoute = () => {
      const dispatch = useDispatch();
      const [isLoading, setLoading] = useState(true);
      useAllPosts();
      useEffect(() => {
            try {
                  appAuth
                        .getCurrentUser()
                        .then((userData) => {
                              if (userData) {
                                    dispatch(login(userData));
                              } else dispatch(logout());
                        })
                        .catch(() => dispatch(logout()))
                        .finally(() => {
                              setLoading(false);
                        });
            } catch (error) {
                  console.log(error.message);
                  setLoading(false);
            }
      }, [dispatch]);
      return (
            <>
                  {isLoading && <ScreenLoader />}
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
                        <Route path="*" element={<Page404 />} />
                  </Routes>
                  <Footer />
            </>
      );
};

export default AppRoute;
