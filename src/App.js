import HomeComponent from "./home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileComponent from "./profile";
import ReviewComponent from "./review-component";
import ArtistAlbumsComponent from "./artists";
import AlbumReviewsComponent from "./albums";
import LoginComponent from "./login";

import Search from "./search";

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
            <Route path="/profile" element={<ProfileComponent />} />
            <Route path="/reviews/:id" element={<ReviewComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="/artists/:artistId" element={<ArtistAlbumsComponent />} />
            <Route path="/albums/:albumId" element={<AlbumReviewsComponent />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/search" element={<Search />} />
            <Route path="/artists/:artistId" element={<ArtistAlbumsComponent />} />
            <Route path="/albums/:albumId" element={<AlbumReviewsComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;