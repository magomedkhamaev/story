import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { postsReducer } from "./slices/posts";
import { profileReducer } from "./slices/profile";
import { commentReducer } from "./slices/comment";
import filter from "./slices/filter";

const store = configureStore({
    reducer: {
        filter,
        posts: postsReducer, 
        auth: authReducer,
        profile: profileReducer,
        comment: commentReducer,  
    },
});

export default store;