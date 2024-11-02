import { configureStore } from "@reduxjs/toolkit";
import { allreducer } from "./combineReducer";

export const store = configureStore({
    reducer: allreducer
})