import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service from 
    "./service"

export const findUsersThunk = createAsyncThunk(
  'user/findUsers', async () =>
    await service.findUser()
)
export const deleteUserThunk = createAsyncThunk(
  'user/deleteUser',
  async (uid) => {
    await service.deleteUser(uid)
    return uid
    })

export const createUserThunk = createAsyncThunk(
  'user/createUser',
  async (user) => {
    const newUser = await service.createUser(user)
    return newUser
})

export const findReviewsThunk = createAsyncThunk(
  'reviews/findReviews', async () =>
    await service.findReview()
)
export const deleteReviewThunk = createAsyncThunk(
  'review/deleteReview',
  async (rid) => {
    await service.deleteReview(rid)
    return rid
    })

export const createReviewThink = createAsyncThunk(
  'review/createReview',
  async (review) => {
    const newReview = await service.createReview(review)
    return newReview
    })

    export const createTagThunk = createAsyncThunk(
  'tag/createTag',
  async (tag) => {
    const newTag = await service.createTag(tag)
    return newTag
})

export const findTagThunk = createAsyncThunk(
  'tag/findTags', async () =>
    await service.findTag()
)

