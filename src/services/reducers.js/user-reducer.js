import { createSlice } from "@reduxjs/toolkit";
import { findUsersThunk, deleteUserThunk, createUserThunk, updateUserThunk}  from "../thunks"

const initialState = {
   users: [],
   loading: false
}

const userSlice = createSlice({
 name: 'users',
 initialState,
 extraReducers: {
   [findUsersThunk.pending]:
      (state) => {
         state.loading = true
         state.users = []
   },
   [findUsersThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.users = payload
   },
   [findUsersThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
     },
       [deleteUserThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.users = state.users
        .filter(u => u._id !== payload)
     },
          [createUserThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.users.push(payload)
     },
          
          [updateUserThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const userNdx = state.users
      .findIndex((u) => u._id === payload._id)
    state.users[userNdx] = {
      ...state.users[userNdx],
      ...payload
    }
  }


  },
 
 reducers: { }
});


export default userSlice.reducer;

