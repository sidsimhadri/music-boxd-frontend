import React from "react";
import { useParams } from 'react-router-dom';
//import ArtistAlbumItem from "./artist-album-item";
import {findArtistAlbums} from "../services/service.js";
import {findAlbum} from "../services/service.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findArtistAlbumsThunk } from "../services/thunks";
import "./index.css";

function ArtistAlbumsComponent() {
    const { artistId } = useParams();
    console.log(artistId);
    const { reviews, loading } = useSelector(state => state.reviews);
    const [album, setAlbum] = useState({
            "name": "",
            "release_date": "",
            "images": [
                {"url": ""},
            ],
            "artists": [
                {"name": ""},
            ],
        });
    const [artistLoading, setArtistLoading] = useState(true);

    const [artistAlbums, setArtistAlbums] = useState([])
    const [albumItems, setAlbumItems] = useState([])
    const [promise, setPromise] = useState(null)
    useEffect(() => {
        setPromise(findArtistAlbums(artistId))
    }, [])
    useEffect(() => {
        if (promise !== null) {
            promise.then((response) => {
                setArtistAlbums(response.body)
                setArtistLoading(false)
                setAlbumItems(artistAlbums.items)
            })
        }
    }, [promise])
    console.log(artistAlbums);
    console.log(artistAlbums.items);
    if (!artistLoading) { // check if the array has elements
      console.log(artistAlbums.items[0].name); // access the first element
    }
    //console.log(artistAlbums.items.name);
    return (<>
    {!artistLoading && (
      <div>
        {artistAlbums.items.map((album) => (
          <div className="card border-dark mb-3" style={{ width: "80%" }}>
            <div className="row card-body">
             <div className="col-10">
              <h4 className="row">
              <div className="col-3">Album:</div>
                <div className="col-4">
                  <Link className="text-white" to={`/albums/${album.id}`} style={{ textDecoration: "none" }}>{album.name}</Link>
                </div>
              </h4>
              <h6 className="row">
              <div className="col-3">Artist:</div>
               <div className="col-4"> <Link to={`/artists/${album.artists[0].id}`} style={{ textDecoration: "none" }}>{album.artists[0].name}</Link></div>
              </h6>
              <h6 className="row">
              <div className="col-3">Release date:</div> <div className="col-3 blue-text">{album.release_date}</div>
              </h6>
             </div>
             <div className="col-2">
               <img src={album.images[0].url} width="120px" height="120px" style={{ borderRadius: "10%" }}/>
             </div>
            </div>
          </div>
        ))}
      </div>
    )}
    {artistLoading && (
      <div>
        <h6>Loading..</h6>
      </div>
    )}

    </>);

};

export default ArtistAlbumsComponent;