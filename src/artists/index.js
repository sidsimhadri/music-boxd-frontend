import React from "react";
import TrackStarHeader from "../trackstar-header";
import { useParams } from 'react-router-dom';
import {findArtistAlbums} from "../services/service.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

function filterDuplicateAlbums(albumList) {
  let filtered = []
  let names = []
  albumList.forEach((item) => {
    if (!names.includes(item.name)) {
      names.push(item.name)
      filtered.push(item)
    }
  })
  return filtered
}

function ArtistAlbumsComponent() {
    const { artistId } = useParams();
    const [artistLoading, setArtistLoading] = useState(true);
    const [artistAlbums, setArtistAlbums] = useState(null)
    const [albumItems, setAlbumItems] = useState([])
    const [promise, setPromise] = useState(null)
    useEffect(() => {
        setPromise(findArtistAlbums(artistId))
    }, [artistId])
    useEffect(() => {
        if (promise !== null) {
            promise.then((response) => {
                setArtistAlbums(response.body)
            })
        }
    }, [promise, artistAlbums])
    useEffect(() => {
      if (artistAlbums !== null) {
        setAlbumItems(filterDuplicateAlbums(artistAlbums.items))
        setArtistLoading(false)
      }
    }, [artistAlbums])
    return (<>
    <div className="row mt-2">
                <TrackStarHeader />
            </div>
    {!artistLoading && (
      <div className="row mt-2">
        {albumItems.map((album) => (
          <div className="card border-dark mb-3 nunito" style={{ width: "100%" }}>
            <div className="row card-body">
             <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-9 col-sm-9 col-xs-9 col-9">
              <h4 className="row size-font">
              <div className="col-4">Album:</div>
                <div className="col-8">
                  <Link className="text-white" to={`/albums/${album.id}`} style={{ textDecoration: "none" }}>{album.name}</Link>
                </div>
              </h4>
              <h5 className="row size-font">
              <div className="col-4">Artist:</div>
               <div className="col-8"> <Link to={`/artists/${album.artists[0].id}`} style={{ textDecoration: "none" }}>{album.artists[0].name}</Link></div>
              </h5>
              <h4 className="row">
              <div className="col-4 size-font">Release date:</div> <div className="col-8 mt-1 salmon-text size-font-rd">{album.release_date}</div>
              </h4>
             </div>
             <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3 col-3 sizes">
               <img src={album.images[0].url} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} alt={album.name}/>
             </div>
            </div>
          </div>
        ))}
      </div>
    )}
    {artistLoading && (
      <div className="nunito">
        <h6>Loading..</h6>
      </div>
    )}

    </>);

};

export default ArtistAlbumsComponent;