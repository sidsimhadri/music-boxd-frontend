import React from "react";
import TrackStarHeader from "../trackstar-header";
import { useParams } from 'react-router-dom';
import {findReviewsByAlbumId} from "../services/service.js";
import {findAlbum} from "../services/service.js";
import {findUser} from "../services/service.js";
import { Link } from "react-router-dom";
import { useSelectorgit  } from "react-redux";
import { useState, useEffect } from "react";
import "./index.css";
import StarRating from "../star-rating";

function AverageAlbumRating(albumReviews) {
  let avg_rating = 0;
  let i=0;
  albumReviews.forEach((review) => {
    avg_rating = avg_rating + review.rating
    i=i+1
  })
  return Math.round(avg_rating/i)
}

function useUserDetails(userId) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    findUser(userId).then(response => {
      setUser(response);
    });
  }, [userId]);

  return user;
}

function UserDetail({ userId }) {
  const user = useUserDetails(userId);

  if (!user) {
    return null;
  }

  return (
    <div className="col">
      <img
        className="row-9 size-dp-img"
        src={user.profilePicture}

        style={{ borderRadius: "50%" }}
        alt={user.username}
      />
<div className="row-3 mt-1 size-username text-white font-15 d-none d-xl-block">
  @{user.username}
</div>
    </div>
  );
}

function AlbumReviewsComponent() {
const currentUser = useSelector((state) =>
        state.auth.currentUser
    );
    const { albumId } = useParams()
    let album=""
    //let albumReviewslist=[]
    const [albumInfoLoading, setAlbumInfoLoading] = useState(true)
    const [albumInfo, setAlbumInfo] = useState(null)
    const [prom, setProm] = useState(null)
    useEffect(() => {
            setProm(findAlbum(albumId))
            setAlbumProm(findReviewsByAlbumId(albumId))
        }, [albumId])
        useEffect(() => {
            if (prom !== null) {
                prom.then((response) => {
                 setAlbumInfo(response.body)
                 album = response.body
                })
            }
        }, [prom, albumInfo])

    useEffect(() => {
      if (albumInfo !== null) {
      setAlbumInfoLoading(false)
      }
    },[albumInfo])

    const [reviewsLoading, setReviewsLoading] = useState(true);
    const [albumReviews, setAlbumReviews] = useState(null);
    const [albumProm, setAlbumProm] = useState(null);
    const [avgRating, setAvgRating] = useState(null);


    useEffect(() => {
                if (albumProm !== null) {
                    albumProm.then((response) => {
                    console.log(response[0])
                     setAlbumReviews(response)
                    // albumReviewslist = response
                    })
                }
            }, [albumProm, albumReviews])

    useEffect(() => {
      if (albumReviews !== null) {
        setReviewsLoading(false)
        setAvgRating(AverageAlbumRating(albumReviews))
      }
    }, [albumReviews])


    return (<>
    <div className="row mt-2">
                <TrackStarHeader />
            </div>
    {!albumInfoLoading && (
    <div className="card border-dark mt-2 mb-3 nunito" style={{ width: "100%" }}>
                <div className="row card-body black-bg" style={{ borderRadius: "10px" }}>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-2 col-sm-3 size-it-img d-none d-sm-block" style={{ borderRadius: "10px" }}>
                    <img src={albumInfo.images[0].url} style={{width: "100%", height:"100%", maxHeight: "100%", maxWidth: "100%", borderRadius: "10%" }} alt={albumInfo.name}/>
                 </div>
                 <div className="col-xxl-10 col-xl-10 col-lg-10 col-sm-9 ps-3 container">
                  <h4 className="row item mt-2 bold size-it-rest">
                  <div className="col-3 col-sm-4"><strong>Album:</strong></div>
                    <div className="col-9 col-sm-8">
                      <Link className="text-white " to={`/albums/${albumInfo.id}`} style={{ textDecoration: "none" }}><strong>{albumInfo.name}</strong></Link>
                    </div>
                  </h4>
                  <h4 className="row item size-it-rest">
                  <div className="col-3 col-sm-4"><strong>Artist:</strong></div>
                   <div className="col-9 col-sm-8"> <Link to={`/artists/${albumInfo.artists[0].id}`} style={{ textDecoration: "none" }}><strong>{albumInfo.artists[0].name}</strong></Link></div>
                  </h4>
                  <div className="row item">
                  <h4 className="col-3 mt-2 col-sm-4 size-it-rest"><strong>Average Rating:</strong></h4> <div className="col-9 col-sm-8 font-25"><StarRating rating={avgRating} /></div>
                  </div>
                 </div>
                </div>
              </div>
    )}

    {currentUser !== null && currentUser!== undefined && <div className="d-flex justify-content-between align-items-center">
      <h3 className="text-white">Reviews</h3>
      <a href={`/createReview/${albumId}`}>
        <button className="btn btn-primary">Add a Review</button>
      </a>
    </div>
    }
    {
    (currentUser === null || currentUser=== undefined) && <div className="d-flex justify-content-between align-items-center">
          <h3 className="text-white">Reviews</h3>
          <div>Login to add review</div>
        </div>
    }

    {!reviewsLoading && (
      <div className="row mt-2">
        {albumReviews.map((review) => (
          <div className="card border-dark mb-3 text-white nunito" style={{ width: "100%" }}>
            <div className="row gold-bg card-body" style={{ borderRadius: "10px" }}>
            <div className="col-2 col-xxl-2 col-xs-5 col-xl-2 col-lg-2 col-sm-2 col-md-2 ms-0 ps-0 size-dp-img d-none d-sm-block">
                <UserDetail userId={review.userId} />
             </div>
             <div className="col-10 col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 mt-2 size-block">
              <h5 className="row size-block">
              <div className="col-3">Rating:</div>
                <div className="col-9">
                   <h4><StarRating rating={review.rating} /></h4>
                </div>
              </h5>
              <h5 className="row size-block">
              <div className="col-3">Review:</div>
               <div className="col-9"><h5>{review.body}</h5></div>
              </h5>
             </div>
            </div>
          </div>
        ))}
       </div>
    )}
    {reviewsLoading && (
      <div className="nunito">
        <h6>Loading..</h6>
      </div>
    )}

    </>);

};

export default AlbumReviewsComponent;