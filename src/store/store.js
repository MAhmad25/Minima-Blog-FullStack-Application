import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import loadingSlice from "./reducers/loadingSlice";
const store = configureStore({
      reducer: {
            auth: authSlice,
            loader: loadingSlice,
      },
});

export default store;
