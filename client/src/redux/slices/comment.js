import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
   const { data } = await axios.get('/allcomments');
   return data;
})

// export const fetchCreate = createAsyncThunk('comments/fetchCreate', async () => {
//     const { data } = await axios.post('/comments');
//     return data;
//  })

const initialState = {
        items: [],
        status: 'loading',
    
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
      // addComment(state, action) {
      //    state.items.push(action.payload);
      //     },
    },
    extraReducers: {
     [fetchComments.pending]: (state) => {
        state.comment.items = [];
        state.comment.status = 'loading';
     },
     [fetchComments.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = 'loaded';
     },
     [fetchComments.rejected]: (state) => {
        state.items = [];
        state.status = 'error';
     },

   //   [fetchCreate.pending]: (state) => {
   //      state.items = [];
   //      state.status = 'loading';
   //   },
   //   [fetchCreate.fulfilled]: (state, action) => {
   //      state.items= action.payload;
   //      state.status = 'loaded';
   //   },
   //   [fetchCreate.rejected]: (state) => {
   //      state.items = [];
   //      state.status = 'error';
   //   },
  },
})


export const commentReducer = commentSlice.reducer;