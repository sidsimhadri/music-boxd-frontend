import { createSlice } from "@reduxjs/toolkit";

import { findReviewsThunk, findReviewsByBodyThunk, deleteReviewThunk, createReviewThunk, updateReviewThunk}  from "../thunks"


const initialState = {
  reviews: [],
  loading: false
}

const reviewSlice = createSlice({
 name: 'reviews',
 initialState,
 extraReducers: {
  [findReviewsByBodyThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.reviews = payload
      },
   [findReviewsThunk.pending]:
      (state) => {
        state.loading = true
        state.reviews = []
      },
    [findReviewsThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.reviews = payload
      },
    [findReviewsThunk.rejected]:
      (state, action) => {
        state.loading = false
        state.error = action.error
      },
    [deleteReviewThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.reviews = state.reviews
          .filter(t => t._id !== payload)
      },
    [createReviewThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.reviews.push(payload)
      },

    [updateReviewThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
          const reviewNdx = state.reviews.findIndex((t) => t._id === payload._id)
          state.reviews[reviewNdx] = {
            ...state.reviews[reviewNdx],
            ...payload
          }

      }
  },
  reducers: {}
});

export default reviewSlice.reducer;