import React, { useEffect, useState } from "react";
import ReviewItem from "./review-item";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsThunk } from "../services/thunks";
import * as service from "../services/service"

const AlbumSearchComponent = () => {
        const [albumsPromise, setAlbumsPromise] = useState(null)
    const [albums, setAlbums] = useState([{
        "name": "",
        "release_date": "",
        "images": [
            {"url": ""},
        ],
                "artists": [
            {"name": ""},
        ],
    }])
        useEffect(() => {
    let searchParams = "pitbull"
            if (searchParams !== undefined) {
            setAlbumsPromise(service.searchAlbums(searchParams))
        }
    }, [])

        useEffect(() => {
        if (albumsPromise !== null) {
            albumsPromise.then((response) => {
                setAlbums(response.body)
            })
        }
        }, [albumsPromise])
    console.log(albums)
    return (
<></>
    );
};

export default AlbumSearchComponent;