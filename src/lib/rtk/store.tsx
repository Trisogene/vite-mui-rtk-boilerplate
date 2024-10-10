import { configureStore } from "@reduxjs/toolkit";

import {
  TypedUseSelectorHook,
  useSelector as untypedUseSelector,
} from "react-redux";
import { exampleSlice } from "./slices/exampleSlice";

export const store = configureStore({
  reducer: {
    example: exampleSlice.reducer,
  },
});

export type RtkState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useRtk: TypedUseSelectorHook<RtkState> = untypedUseSelector;
