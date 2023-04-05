import { createSlice } from "@reduxjs/toolkit";
import { findTagThunk, createTagThunk}  from "../thunks"

const initialState = {
   tags: [],
   loading: false
}

const tagSlice = createSlice({
 name: 'tags',
 initialState,
 extraReducers: {
   [findTagThunk.pending]:
      (state) => {
         state.loading = true
         state.tags = []
   },
   [findTagThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tags = payload
   },
   [findTagThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
     },
          [createTagThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.tags.push(payload)
     
  }


  },
 
 reducers: { }
});


export default tagSlice.reducer;

