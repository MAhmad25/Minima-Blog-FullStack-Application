import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      isLoading: false,
};
const LoadingSlice = createSlice({
      name: "loading",
      initialState,
      reducers: {
            setLoadingTrue: (state) => {
                  state.isLoading = true;
            },
            setLoadingFalse: (state) => {
                  state.isLoading = false;
            },
      },
});
export const { setLoadingTrue, setLoadingFalse } = LoadingSlice.actions;
export default LoadingSlice.reducer;
