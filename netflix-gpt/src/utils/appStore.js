import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import searchReducer from "./searchSlice";
import configReducer from "./appConfigSlice";

const appStore = configureStore({
    reducer : {
        user: userReducer,
        movies: moviesReducer,
        search: searchReducer,
        appConfig: configReducer
    }
})
export default appStore;