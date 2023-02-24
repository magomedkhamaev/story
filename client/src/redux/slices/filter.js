import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    key: '',
};

const filterSlice = createSlice({
     name: 'filters',
     initialState,
     reducers: {
        setKey(state, action) {
            state.key = action.payload;
        },
       
     },
});

export const {setKey} = filterSlice.actions;

export default filterSlice.reducer;