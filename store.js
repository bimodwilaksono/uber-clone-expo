import {configureStore} from "@reduxjs/toolkit";
import navSlices from "./src/slices/navSlices";

export const store = configureStore({
    reducer: {
        nav: navSlices
    }
})
