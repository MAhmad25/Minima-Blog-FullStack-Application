import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import loadingSlice from "./reducers/loadingSlice";
import postsSlice from "./reducers/postsSlice";
const store = configureStore({
      reducer: {
            auth: authSlice,
            loader: loadingSlice,
            posts: postsSlice,
      },
});

export default store;
