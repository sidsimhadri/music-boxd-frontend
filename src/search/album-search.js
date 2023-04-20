import React, { useEffect, useState } from "react";
import AlbumItem from "./album-item.js";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsThunk } from "../services/thunks";
import * as service from "../services/service"

const AlbumSearchComponent = ({ query }) => {
    const [albumsPromise, setAlbumsPromise] = useState(null)
    const [albums, setAlbums] = useState([{
        "name": "",
        "release_date": "",
        "images": [
            { "url": "" },
        ],
        "artists": [
            { "name": "" },
        ],
    }])
    useEffect(() => {
        if (query !== undefined) {
            setAlbumsPromise(service.searchAlbums(query));
        }
    }, [query]);

    useEffect(() => {
        if (albumsPromise !== null) {
            albumsPromise.then((response) => {
                setAlbums(response.body)
            })
        }
    }, [albumsPromise])
    // console.log(Array.isArray(albums.albums.items))
    console.log(albums)
    // console.log(albums.albums.items)



    return (
        <>

        </>
    );
};

export default AlbumSearchComponent;