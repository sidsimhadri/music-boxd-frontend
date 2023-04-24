import './index.css';
import TrackStarHeader from "../trackstar-header";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as service from "../services/service"
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";
import LatestReviewItem from "./latest-reviews/latest-review-item";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProfileScreen() {
    const location = useLocation()
    const isUser = location.search.includes('isUser=true')
  const { userId } = useParams()
  const [userProm, setUserProm] = useState(null)
  const [reviewCountPromise, setReviewCountPromise] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
  if (userId !== null){
  console.log(userId)
  service.findUser(userId).then((response) => {console.log(response)})
  setUserProm(service.findUser(userId))
  console.log(userProm)
  }
  }, [userId])

  useEffect(() => {
            if (userProm !== null) {
                userProm.then((response) => {
                    setProfile(response);
                })
            }
        }, [userProm])

  useEffect(() => {
  if(profile !== null){
  console.log(service.findReviewsByUserId(profile._id))
    setReviewCountPromise(service.findReviewsByUserId(profile._id))
  }
  },[profile])

  const navigate = useNavigate()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(profileThunk());
  }, []);

console.log(userProm)
  const [profileName, setProfileName] = useState("")
  const [profileImage, setProfileImage] = useState("")
  const [nameEditing, setNameEditing] = useState(false);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    if (reviewCountPromise !== null) {
    console.log(reviewCountPromise)
      reviewCountPromise.then((response) => {
      console.log(response)
        setReviews(response)
      })
    }
  }, [reviewCountPromise])

  useEffect(() => {
    if (profile !== null) {
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
                      {isUser && (
                         <button className="btn me-2 btn-success" style={{float: "left"}}
                                onClick={updateNameHandler}>
                          <i class="fa fa-check"></i>
                        </button>                      )}

                    </>
                    }
                    {!nameEditing && <>
                      <span className="nunito text-large me-4">@{profileName}</span>
                      {isUser && (<button className="btn me-2 btn-outline-info"
                        onClick={() => setNameEditing(true)}>
                        <i class="fa fa-edit"></i>
                      </button>)}
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
                    Reviews: {reviews.length}
                  </span>
                </li>
                </ul>
                <ul className="list-group">
                {
                    reviews.map(review => {
                        return (
                          <li className="list-group-item">
                            <LatestReviewItem review={review} />
                            </li>
                        )
                    })
                }
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