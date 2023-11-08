import { configureStore } from "@reduxjs/toolkit";
import { sliceUser } from "./userStore";


export const { initUser , resetUser } = sliceUser.actions


export const store = configureStore({
    reducer:{
         
        user : sliceUser.reducer , 

    }
})