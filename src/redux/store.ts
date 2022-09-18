import { configureStore } from "@reduxjs/toolkit";
import { gitHubApi } from "./api/github.api";

export const store = configureStore({
    reducer:{
       [gitHubApi.reducerPath]:gitHubApi.reducer
    },
    middleware: getDefMiddleWare => getDefMiddleWare().concat(gitHubApi.middleware)
})