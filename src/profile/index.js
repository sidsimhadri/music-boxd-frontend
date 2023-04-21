import './index.css';
import TrackStarHeader from "../trackstar-header";
import ProfilePictureComponent from './profile-picture';
import ProfileHeaderComponent from './profile-header';
import FollowUnfollowButton from './follow-unfollow-button';
import LatestReviewsComponent from './latest-reviews';


import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";
function ProfileScreen() {
  let user = {
    image: "../../images/benson.jpeg",
    handle: "jackfurci",
    followers: 200,
    following: 50,
    reviews: 20,
    likes: 450,
    isFollowing: true,
  };
  const currentUser = useSelector((state) => {
    console.log(state.auth.currentUser)
    return state.auth.currentUser

  });
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = () => { dispatch(updateUserThunk(profile)); };
  useEffect(() => {
    async function funky() {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    }
    funky()
  }, []);
  return (<>


    <div>
      <div className="row mt-2">
        <TrackStarHeader />
      </div>
      {profile && (
        <div>

          <div className="mt-2 row">
            <div className="col-5 d-none d-lg-flex flex-column justify-content-center align-items-center relative">
              <ProfilePictureComponent user={user} />
              <FollowUnfollowButton following={user.isFollowing} />
            </div>
            <div className="col-12 col-lg-7">
              <ProfileHeaderComponent user={user} />
              <h2 className="nunito text-white">Latest Ratings: </h2>
              <LatestReviewsComponent />
            </div>
          </div>
        </div>

      )}
      <div className  = "float-right mt-2">

        <button className="me-2 btn btn-dark"
          onClick={() => {
            dispatch(logoutThunk());
            navigate("/login");
          }}>
          Logout</button>
      </div>
    </div>


  </>); // see below
}
export default ProfileScreen;