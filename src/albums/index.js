import React from "react";
import TrackStarHeader from "../trackstar-header";
import { useParams } from 'react-router-dom';
import {findReviewsByAlbumId} from "../services/service.js";
import {findAlbum} from "../services/service.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

function AlbumReviewsComponent() {
    const { albumId } = useParams()
    //console.log(albumId)
    let album=""
    const [albumInfoLoading, setAlbumInfoLoading] = useState(true)
    const [albumInfo, setAlbumInfo] = useState(null)
    const [prom, setProm] = useState(null)
    useEffect(() => {
            setProm(findAlbum(albumId))
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

      //console.log(albumInfo)
      //console.log(album)

    const [reviewsLoading, setReviewsLoading] = useState(true);
    const [albumReviews, setAlbumReviews] = useState(null);
    //const [albumItems, setAlbumItems] = useState([])
    //const [promise, setPromise] = useState(null);
    useEffect(() => {
        setAlbumReviews(findReviewsByAlbumId(albumId))
       // setPromise(findReviewsByAlbumId(albumId))
    }, [albumId])

    useEffect(() => {
      if (albumReviews !== null) {
        //setAlbumItems(filterDuplicateAlbums(artistAlbums.items))
        setReviewsLoading(false)
      }
    }, [albumReviews])

    //console.log(albumReviews);

    return (<>
    <div className="row mt-2">
                <TrackStarHeader />
            </div>
    {!albumInfoLoading && (
    <div className="card border-dark mt-2 mb-3 nunito" style={{ width: "100%" }}>
                <div className="row card-body black-bg">
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
                  <h4 className="col-3"><strong>Average Rating:</strong></h4> <div className="col-9 mt-1 salmon-text"><h4><strong>Average Rating</strong></h4></div>
                  </div>
                 </div>

                </div>
              </div>
    )}
    {!reviewsLoading && (
      <div className="row mt-2">
       <h5>Loaded!</h5>
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