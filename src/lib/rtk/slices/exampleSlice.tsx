import { createSlice } from "@reduxjs/toolkit";

export type ExampleSlice = {
  value: string;
};

const initialState: ExampleSlice = {
  value: "",
};

export const exampleSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setExampleSliceValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setExampleSliceValue } = exampleSlice.actions;

export default exampleSlice.reducer;
