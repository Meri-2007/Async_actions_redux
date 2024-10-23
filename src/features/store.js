import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./users/user.slice";

export const store=configureStore({
    reducer:UserReducer
})