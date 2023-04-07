import axios from 'axios';
const USER_API = 'http://localhost:4000/api/users';
const TAGS_API = 'http://localhost:4000/api/tags';
const REVIEWS_API = 'http://localhost:4000/api/reviews';
const SPOTIFY_API = 'http://localhost:4000/api/spotify'

export const createUser = async (user) => {
 const response = await axios.post(USER_API, user)
 return response.data;
}


export const findUser = async (uid) => {
 const response = await axios.get(`${USER_API}/${uid}`)
 const users = response.data;
 return users;
}

export const deleteUser = async (uid) => {
  const response = await axios
    .delete(`${USER_API}/${uid}`)
  return response.data
}

export const updateUser = async (user) => {
  const response = await axios
    .put(`${USER_API}/${user._id}`, user);
  return user;
}

export const createReview = async (review) => {
 const response = await axios.post(REVIEWS_API, review)
 return response.data;
}


export const findReview = async (rid) => {
 const response = await axios.get(`${REVIEWS_API}/${rid}`)
 const reviews = response.data;
 return reviews;
}

export const deleteReview = async (rid) => {
  const response = await axios
    .delete(`${REVIEWS_API}/${rid}`)
  return response.data
}

export const updateReview = async (review) => {
  const response = await axios
    .put(`${REVIEWS_API}/${review._id}`, review);
  return review;
}

export const createTag = async (tag) => {
 const response = await axios.post(TAGS_API, tag)
 return response.data;
}


export const findTag = async (tid) => {
 const response = await axios.get(`${TAGS_API}/${tid}`)
 const tags = response.data;
 return tags;
}
export const findAlbum = async (aid) => {
  const response = await axios.get(`${SPOTIFY_API}/album/${aid}`)
 const album = response.data;
 return album;
}

export const findArtistAlbums = async (artistId) => {
 const response = await axios.get(`${SPOTIFY_API}/albums/${artistId}`)
 const albums = response.data;
 return albums;
}

export const findNewreleases = async () => {
 const response = await axios.get(SPOTIFY_API + "/newreleases");
 const newreleases = response.data;
 return newreleases;
}

export const findSearchResults = async () => {
 const response = await axios.get(SPOTIFY_API + "/search");
 const results = response.data;
 return results;
}

export const findPlaylist = async (pid) => {
 const response = await axios.get(`${SPOTIFY_API}/playlist/${pid}`)
 const playlist = response.data;
 return playlist;
}


