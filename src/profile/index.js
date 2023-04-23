import './index.css';
import TrackStarHeader from "../trackstar-header";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as service from "../services/service"
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
    "_id": "",
    "role": "user",
    "followers": [],
    "following": [],
  })
  const [profileName, setProfileName] = useState("")
  const [profileImage, setProfileImage] = useState("https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg")
  const [nameEditing, setNameEditing] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviewCountPromise, setReviewCountPromise] = useState(null);
  useEffect(() => {
    if (profile._id !== "") {
      console.log(profile._id)
      setReviewCountPromise(service.findReviewsByUserId(profile._id))
    }
  },[profile])
  useEffect(() => {
    if (reviewCountPromise !== null) {
      reviewCountPromise.then((response) => {
        setReviewCount(response.length)
      })
    }
  }, [reviewCountPromise])
  useEffect(() => {
    if (currentUser !== null && currentUser !== undefined) {
      setProfile(currentUser.currentUser)
    }
  }, [currentUser])

  useEffect(() => {
    if (profile !== undefined) {
      setProfileName(profile.username)
      setProfileImage(profile.profilePicture)
    }
  }, [profile])

  const updateNameHandler = () => {
    const newProfile = {
      ...profile,
      username: profileName,
    }
    dispatch(updateUserThunk({newProfile}))
    setNameEditing(false)
    setProfile(newProfile)
  }

  return (<>
    <div>
      <div className="row mt-2">
        <TrackStarHeader />
      </div>
      {profile && (
        <div>
          <div className="mt-2 row">
            <div className="col-5 d-none d-lg-flex flex-column justify-content-center align-items-center relative">
              <button className="profile-pic" onClick="document.getElementById('choose-profile-picture').click();">
                <img className="profile-picture larger float-left" alt={profileName}
                  src={profileImage} />
                <input type="file" id="choose-profile-picture" />
              </button>
            </div>
            <div className="col-12 col-lg-7">
              <ul className="list-group mb-3">
                <li className="list-group-item ">
                  <div>
                    {nameEditing && <>
                        <input type="text" style={{width: "70%", float: "left"}}
                        className="form-control border-0 bg-dark text-white mb-1 me-1 text-large" value={profileName}
                          onChange={(event) => setProfileName(event.target.value)}></input>
                      <button className="btn me-2 btn-success" style={{float: "left"}}
                        onClick={updateNameHandler}>
                        <i class="fa fa-check"></i>
                      </button>
                    </>
                    }
                    {!nameEditing && <>
                      <span className="nunito text-large me-4">@{profileName}</span>
                      <button className="btn me-2 btn-outline-info"
                        onClick={() => setNameEditing(true)}>
                        <i class="fa fa-edit"></i>
                      </button>
                    </>}
                  </div>
                </li>
                <li className="list-group-item">
                  {profile.role === "admin" &&
                    <span class="badge bg-danger follow-info nunito me-2">Admin
                      <i class="fa fa-user-secret  ps-2 pb-2 fs-5" ></i>
                    </span>
                  }
                  <span class="badge bg-light follow-info nunito me-2">
                    Followers: {profile.followers.length}
                  </span>
                  <span class="badge bg-light follow-info nunito me-2">
                    Following: {profile.following.length}
                  </span>
                  <span class="badge bg-light follow-info nunito me-2">
                    Reviews: {reviewCount}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="float-right mt-2">
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