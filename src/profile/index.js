// import './index.css';
// import TrackStarHeader from "../trackstar-header";
// import ProfilePictureComponent from './profile-picture';
// import ProfileHeaderComponent from './profile-header';
// import FollowUnfollowButton from './follow-unfollow-button';
// import LatestReviewsComponent from './latest-reviews';

// function ProfileComponent() {
//     let user = {
//         image: "../../images/benson.jpeg",
//         handle: "jackfurci",
//         followers: 200,
//         following: 50,
//         reviews: 20,
//         likes: 450,
//         isFollowing: true,
//     };
//     return (<>
//         <div className="row mt-2">
//             <TrackStarHeader />
//         </div>
//         <div className="mt-2 row">
//             <div className="col-5 d-none d-lg-flex flex-column justify-content-center align-items-center relative">
//                 <ProfilePictureComponent user={user} />
//                 <FollowUnfollowButton following={user.isFollowing}/>
//             </div>
//             <div className="col-12 col-lg-7">
//                 <ProfileHeaderComponent user={user} />
//                 <h2 className="nunito text-white">Latest Ratings: </h2>
//                 <LatestReviewsComponent />
//             </div>
//         </div>
//     </>
//     );
// }

// export default ProfileComponent;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";
function ProfileScreen() {
 const currentUser = useSelector((state) => {
    console.log("bruh)")
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
 funky()}, []);
 return ( <>
 
 
 <div>
   <h1>Profile Screen</h1>
   {profile && (
    <div>
     <div>
      <label>First Name</label>
      <input type="text"
       value={profile.firstName}
       onChange={(event) => {
        const newProfile = {
         ...profile,
         firstName: event.target.value,
        };
        setProfile(newProfile);
       }}
      />
     </div>
     <div>
      <label>Last Name</label>
      <input type="text"
       value={profile.lastName}
       onChange={(event) => {
        const newProfile = {
         ...profile,
         lastName: event.target.value,
        };
        setProfile(newProfile);
       }}
      />
     </div>
    </div>
   )}
   <button
    onClick={() => {
      dispatch(logoutThunk());
      navigate("/login");
    }}>
    Logout</button>
   <button onClick={save}>Save</button>
  </div>

 
 </>); // see below
}
export default ProfileScreen;