// import './index.css';
// import TrackStarHeader from "../trackstar-header";
// import ProfilePictureComponent from './profile-picture';
// import ProfileHeaderComponent from './profile-header';
// import FollowUnfollowButton from './follow-unfollow-button';
// import LatestReviewsComponent from './latest-reviews';
// import * as service from "../services/service"
// import AlbumItem from "../search/album-item.js"
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
// import { profileThunk, logoutThunk, updateUserThunk }
//     from "../services/auth-thunks";
// function ProfileScreen() {
//     const navigate = useNavigate()
//     const currentUser = useSelector((state) =>

//         state.auth.currentUser
//     );
//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(profileThunk());
//     }, []);

//     const [profile, setProfile] = useState({
//         "username": "",
//         "role": "",
//     })
//     const [profileImage, setProfileImage] = useState("https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg")

//     const [profileName, setProfileName] = useState("")
//     useEffect(() => {
//         if (currentUser !== null && currentUser !== undefined) {
//             setProfile(currentUser.currentUser)
//         }
//     }, [currentUser])

//     useEffect(() => {
//         if (profile !== undefined) {
//             if (profile.username !== undefined && profile.username !== null) {
//                 setProfileName(profile.username)
//                 setProfileImage(profile.profilePicture)
//             }
//         }
//     }, [profile])

//     const [albumsPromise, setAlbumsPromise] = useState(null)
//     const [albums, setAlbums] = useState([{
//         "name": "",
//         "release_date": "",
//         "images": [
//             { "url": "" },
//         ],
//         "artists": [
//             { "name": "" },
//         ],
//     }])
//     useEffect(() => {
//         setAlbumsPromise(service.findNewreleases());

//     }, []);

//     useEffect(() => {
//         if (albumsPromise !== null) {
//             albumsPromise.then((response) => {
//                 setAlbums(response.body)
//             })
//         }
//     }, [albumsPromise])

//     return (<>


//         <div>
//             <div className="row mt-2">
//                 <TrackStarHeader />
//             </div>
//             {profile && (
//                 <div>
//                     <div class="d-flex justify-content-left mt-3 align-items-center">
//                         <h2 class="text-left nunito text-success  me-2">Curator</h2>
//                         <i class="fa fa-check-circle text-success pb-2 fs-4" ></i>
//                     </div>

//                     <div className="mt-2 row">
//                         <div className="col-5 d-none d-lg-flex flex-column justify-content-center align-items-center relative">
//                             <ProfilePictureComponent image={profileImage} />
//                             <FollowUnfollowButton following={profileName.isFollowing} />
//                         </div>
//                         <div className="col-12 col-lg-7">
//                             <ProfileHeaderComponent user={profile} />
//                             <h2 className="nunito text-white">Latest Ratings: </h2>
//                             <LatestReviewsComponent />
//                         </div>
//                     </div>
//                 </div>

//             )}
//             <div className="float-right mt-2">

//                 <button className="me-2 btn btn-dark"
//                     onClick={() => {
//                         dispatch(logoutThunk());
//                         navigate("/login");
//                     }}>
//                     Logout</button>
//             </div>
//         </div>
//         <h3 className="nunito text-success mt-4">New Releases: </h3>

//         {albums && albums.albums && albums.albums.items.length > 0 ? (
//             albums.albums.items.map((album) => (
//                 <AlbumItem key={album.id} album={album} />
//             ))
//         ) : (
//             <p>No results found.</p>
//         )}
//     </>); // see below
// }
// export default ProfileScreen;