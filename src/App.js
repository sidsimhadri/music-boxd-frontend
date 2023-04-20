import HomeComponent from "./home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileComponent from "./profile";
import ReviewComponent from "./review-component";
import ArtistAlbumsComponent from "./artists";
import LoginComponent from "./login";
import SignupComponent from "./signup";
import { configureStore }
  from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import reviewReducer from "./services/reducers.js/review-reducer";
import userReducer
  from "./services/reducers.js/user-reducer";
import tagReducer
  from "./services/reducers.js/tag-reducer";
const store = configureStore({
  reducer: { reviews: reviewReducer, users: userReducer, tags: tagReducer }
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
            <Route path="/artists/:artistId" element={<ArtistAlbumsComponent />}/>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>

  );
}
export default App;