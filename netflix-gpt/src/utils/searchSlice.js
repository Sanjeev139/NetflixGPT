import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        toggleSearch : false
    },
    reducers: {
        toggleSearchBar : (state) => {
            state.toggleSearch = !state.toggleSearch ;
        }
    }
})

export const { toggleSearchBar } = searchSlice.actions;
export default searchSlice.reducer;