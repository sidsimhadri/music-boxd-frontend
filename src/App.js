import HomeComponent from "./home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileComponent from "./profile";
import UserProfileComponent from "./profile/own-profile.js";
import CuratorComponent from "./profile/curator.js";
import AdminComponent from "./profile/admin.js";
import ReviewComponent from "./review-component";
import ArtistAlbumsComponent from "./artists";
import AlbumReviewsComponent from "./albums";
import LoginComponent from "./login";
import CreateReviewComponent from "./home/create-review/create-review-item";

import Search from "./search";
import TagsSearch from "./tags-search";

import SignupComponent from "./signup";

import { configureStore }
  from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import reviewReducer from "./services/reducers.js/review-reducer";
import userReducer
  from "./services/reducers.js/user-reducer";
import authReducer
  from "./services/reducers.js/auth-reducer";
import tagReducer
  from "./services/reducers.js/tag-reducer";

const store = configureStore({
  reducer: { reviews: reviewReducer, users: userReducer, tags: tagReducer, auth: authReducer }
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route index path="/" element={<HomeComponent />} />
            <Route path="/profile/:userId" element={<ProfileComponent />} />
            <Route path="/profile" element={<UserProfileComponent />} />
            <Route path="/curator" element={<CuratorComponent />} />
            <Route path="/admin" element={<AdminComponent />} />
            <Route path="/reviews/:id" element={<ReviewComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="/artists/:artistId" element={<ArtistAlbumsComponent />} />
            <Route path="/albums/:albumId" element={<AlbumReviewsComponent />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/search" element={<Search />} />
            <Route path="/tagsSearch" element={<TagsSearch />} />
            <Route path="/tagsSearch/:tid" element={<TagsSearch />} />
            <Route path="/artists/:artistId" element={<ArtistAlbumsComponent />} />
            <Route path="/albums/:albumId" element={<AlbumReviewsComponent />} />
            <Route path="/createReview/:aid" element={<CreateReviewComponent />} />

          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;