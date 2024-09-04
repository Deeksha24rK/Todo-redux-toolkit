import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";

// create Redux store
export const store = configureStore({
    reducer: todoReducer,
})