import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./accountsReducer";

export const store = configureStore({
    reducer:{
        accounts:accountsReducer
    }
}); 