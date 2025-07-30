import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Signup, Home, Posts, WritePost, ViewPost } from "../pages/index";
import { Nav, Footer } from "../components/index";
import { useLayoutEffect } from "react";
// import appAuth from "../app/AuthService";
// import { useDispatch } from "react-redux";
// import { login } from "../store/reducers/authSlice";
// import toast, { Toaster } from "react-hot-toast";

const AppRoute = () => {
      // TODO: When user is opened the app it should
      //TODO be automatically logged in if session is already set
      // const dispatch = useDispatch();
      // useEffect(() => {
      //       console.log("I am running again due to dispatch at approute");
      //       try {
      //             appAuth
      //                   .getCurrentUser()
      //                   .then((userData) => {
      //                         console.log(userData);
      //                         dispatch(login(userData));
      //                         toast("Hello ", {
      //                               icon: "👏",
      //                               style: {
      //                                     borderRadius: "10px",
      //                                     background: "#333",
      //                                     color: "#fff",
      //                               },
      //                         });
      //                   })
      //                   .catch((error) => console.log(error.message));
      //       } catch (error) {
      //             console.log(error.message);
      //       }
      // }, [dispatch]);
      const { pathname } = useLocation();
      useLayoutEffect(() => {
            window.scrollTo(0, 0);
      }, [pathname]);
      return (
            <>
                  {/* <Toaster /> */}
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
