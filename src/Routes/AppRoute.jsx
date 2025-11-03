import { Route, Routes } from "react-router-dom";
import { Login, Signup, Home, Posts, WritePost, ViewPost, EditPost, Page404 } from "../pages/index";
import { Nav, Footer, ScreenLoader, Dock } from "../components/index";
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
      useAllPosts(); //It will set the all Posts in the app state called allPosts
      useEffect(() => {
            try {
                  appAuth
                        .getCurrentUser()
                        .then((userData) => {
                              if (userData) {
                                    // Here the userData will come check if user email is verified
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
                  {!isLoading && <Dock />}
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
