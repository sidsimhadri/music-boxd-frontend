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
    const [artistName, setArtistName] = useState("")
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
        setArtistName(artistAlbums.items[0].artists[0].name)
      // console.log()
      }
    }, [artistAlbums])

    return (<>
    <div className="row mt-2">
                <TrackStarHeader />
            </div>
    {!artistLoading && (
      <div className="row mt-2">
      <h1 className="row mt-2 nunito-font font-weight-12"><h1 className="col-1">Artist: </h1> <h1 className="ms-4 col-10">{artistName}</h1></h1>
        {albumItems.map((album) => (
          <div className="card border-dark mb-3 nunito" style={{ width: "80%" }}>
            <div className="row card-body">
             <div className="col-10">
              <h4 className="row">
              <div className="col-4">Album:</div>
                <div className="col-8">
                  <Link to={`/albums/${album.id}`} style={{ textDecoration: "none" }}>{album.name}</Link>
                </div>
              </h4>

              <div className="row">
              <h4 className="col-4">Release date:</h4> <div className="col-8 mt-1 salmon-text"><h5>{album.release_date}</h5></div>
              </div>
             </div>
             <div className="col-2">
               <img src={album.images[0].url} width="120px" height="120px" style={{ borderRadius: "10%" }} alt={album.name}/>
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