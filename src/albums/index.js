import React from "react";
import TrackStarHeader from "../trackstar-header";
import { useParams } from 'react-router-dom';
import {findReviewsByAlbumId} from "../services/service.js";
import {findAlbum} from "../services/service.js";
import {findUser} from "../services/service.js";
import { Link } from "react-router-dom";
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
    <>
      <img
        src={user.profilePicture}
        width="80px"
        height="80px"
        style={{ borderRadius: "50%" }}
        alt={user.username}
      />
<div className="mt-1 ms-2 text-white font-15">
  @{user.username}
</div>
    </>
  );
}

function AlbumReviewsComponent() {
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
                <div className="col-2">
                    <img src={albumInfo.images[0].url} width="200px" height="200px" style={{ borderRadius: "10%" }} alt={albumInfo.name}/>
                 </div>
                 <div className="col-10 container">
                  <h4 className="row item mt-2 bold">
                  <div className="col-3"><strong>Album:</strong></div>
                    <div className="col-9">
                      <Link className="text-white " to={`/albums/${albumInfo.id}`} style={{ textDecoration: "none" }}><strong>{albumInfo.name}</strong></Link>
                    </div>
                  </h4>
                  <h4 className="row item">
                  <div className="col-3"><strong>Artist:</strong></div>
                   <div className="col-9"> <Link to={`/artists/${albumInfo.artists[0].id}`} style={{ textDecoration: "none" }}><strong>{albumInfo.artists[0].name}</strong></Link></div>
                  </h4>
                  <div className="row item">
                  <h4 className="col-3 mt-2"><strong>Average Rating:</strong></h4> <div className="col-9 font-25"><StarRating rating={avgRating} /></div>
                  </div>
                 </div>

                </div>
              </div>
    )}
    <h3 className="text-white">Reviews</h3>
    {!reviewsLoading && (
      <div className="row mt-2">
        {albumReviews.map((review) => (
          <div className="card border-dark mb-3 text-white nunito" style={{ width: "100%" }}>
            <div className="row gold-bg card-body" style={{ borderRadius: "10px" }}>
            <div className="col-2">
                <UserDetail userId={review.userId} />
             </div>
             <div className="col-10 mt-1">
              <h5 className="row">
              <div className="col-3">Rating:</div>
                <div className="col-9">
                   <h4><StarRating rating={review.rating} /></h4>
                </div>
              </h5>
              <h5 className="row">
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