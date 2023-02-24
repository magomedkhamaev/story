import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


const initialState = {
    items: []
 };
 
 const profileSlice = createSlice({
      name: 'profile',
      initialState,
      reducers: {
         addItem(state, action) {
           state.items.push(action.payload);
            },
         //   state.totalPrice = state.items.reduce((sum, obj) => {
         //     return obj.price + sum;
         //   }, 0);
         // },
        //  addItem(state, action) {
        //     const findItem = state.items.find((obj) => obj.id === action.payload.id);
 
        //      if (findItem) {
            //  findItem.count++;
            // } else {
            //   state.items.push({
            //    ...action.payload,
            //    count: 1,
            //   });
            // }
            // }
            // state.totalPrice = state.items.reduce((sum, obj) => {
            //     return obj.price * obj.count + sum;
            //     }, 0);
          },
        
      },
 );
 
 export const {addItem} = profileSlice.actions;
 
 export const profileReducer =  profileSlice.reducer;