import { createAsyncThunk } from "@reduxjs/toolkit"
import * as service from "./service"

export const findUsersThunk = createAsyncThunk(
  'user/findUsers', async (uid) =>
  await service.findUser(uid)
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

export const updateUserThunk =
  createAsyncThunk(
    'user/updateUser',
    async (user) =>
      await service.updateUser(user)
  )

export const findReviewsThunk = createAsyncThunk(
  'reviews/findReviews', async (rid) => {
    return await service.findReview(rid)
  }
)


export const findReviewsByBodyThunk = createAsyncThunk(
  'reviews/findReviewsByBody', async (body) =>
    await service.findReviewByBody(body)
)

export const findReviewsByAlbumIdThunk = createAsyncThunk(
  'reviews/findReviewsByAlbumId', async (aid) => {
    return await service.findReviewsByAlbumId(aid)
  }
)

export const deleteReviewThunk = createAsyncThunk(
  'review/deleteReview',
  async (rid) => {
    await service.deleteReview(rid)
    return rid
  })

export const createReviewThunk = createAsyncThunk(
  'review/createReview',
  async (review) => {
    const newReview = await service.createReview(review)
    return newReview
  })

export const updateReviewThunk =
  createAsyncThunk(
    'review/updateReview',
    async (review) =>
      await service.updateReview(review)
  )

export const createTagThunk = createAsyncThunk(
  'tag/createTag',
  async (tag) => {
    const newTag = await service.createTag(tag)
    return newTag
  })

export const findTagThunk = createAsyncThunk(
  'tag/findTags', async (tid) =>
  await service.findTag(tid)
)

export const findAlbumThunk = createAsyncThunk(
  'spotify/albums', async (aid) =>
  await service.findAlbum(aid)
)

export const findArtistAlbumsThunk = createAsyncThunk(
  'spotify/albums', async (artistId) =>
  await service.findArtistAlbums(artistId)
)

export const findNewreleasesThunk = createAsyncThunk(
  'spotify/newreleases', async () =>
  await service.findNewreleases()
)


export const findSearchResultsThunk = createAsyncThunk(
  'spotify/search', async () =>
  await service.findSearchResults()
)

export const findPlaylistThunk = createAsyncThunk(
  'spotify/playlist', async (pid) =>
  await service.findPlaylist(pid)
)