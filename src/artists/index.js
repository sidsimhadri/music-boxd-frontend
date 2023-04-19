import React from "react";
import { useParams } from 'react-router-dom';
//import ArtistAlbumItem from "./artist-album-item";
import {findArtistAlbums} from "../services/service.js";
import {findAlbum} from "../services/service.js";
import { Link } from "react-router-dom";

function ArtistAlbumsComponent() {

const {album} = useParams();
console.log(album)
const {artistId} = findAlbum(album).artistId;
const {artistAlbums} = findArtistAlbums(artistId)

    return (<>
    artistAlbums.map(album =>
        <div className="card border-dark mb-3" style={{ "max-width": "80%" }}>
            <div className="row card-body">
                <div className="col-8
                    <h4 className="card-title small-margin-bottom volkhov text-white"><i><Link className="link-salmon" to="/albums/">Album Title</Link></i></h4>
                    <h6 className="text-white nunito no-margin-bottom"><Link className="link-salmon" to={`/artists/${album.albumId}`}>Album Artist</Link> • Album Year</h6>
                    <div className="row no-margin-left d-flex center">
                        <div className="col-1">
                            <img className="profile-picture me-2" src="/images/bensob.jpeg" alt="Artist Image"/>
                        </div>
                        <div className="col-8 ms-3">
                            <h3>Album Rating </h3>
                        </div>
                    </div>
                </div>
                <img className="album-cover-review-image col-4" src="/images/bensob.jpeg" alt="Album Image"/>
            </div>
        </div>
   ));</>
    );

};

export default ArtistAlbumsComponent;