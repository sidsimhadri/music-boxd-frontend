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
  const navigate = useNavigate()
    const currentUser = useSelector((state) =>
        state.auth.currentUser
    );

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk());
    }, []);

    const [profile, setProfile] = useState({
        "username": "",
    })

    const [profileName, setProfileName] = useState("")
    useEffect(() => {
        if (currentUser !== null && currentUser !== undefined) {
            setProfile(currentUser.currentUser)
        }
    }, [currentUser])

    useEffect(() => {
        if (profile !== undefined) {
            if (profile.username !== undefined && profile.username !== null) {
                setProfileName(profile.username)
            }
        }
    }, [profile])

  return (<>


    <div>
      <div className="row mt-2">
        <TrackStarHeader />
      </div>
      {profile && (
        <div>

          <div className="mt-2 row">
            <div className="col-5 d-none d-lg-flex flex-column justify-content-center align-items-center relative">
              {/* <ProfilePictureComponent user={user} /> */}
              <FollowUnfollowButton following={profileName.isFollowing} />
            </div>
            <div className="col-12 col-lg-7">
              <ProfileHeaderComponent user={profile} />
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