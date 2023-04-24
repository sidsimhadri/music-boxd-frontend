import StarRating from "../../star-rating";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as service from "../../services/service";
const LatestReviewItem = ({ review }) => {
    const [albumPromise, setAlbumPromise] = useState(null)
    const [artistLink, setArtistLink] = useState("/profile")
    const [album, setAlbum] = useState({
        "name": "",
        "release_date": "",
        "images": [
            { "url": "" },
        ],
        "artists": [
            { "id": "", "name": "" },
        ],
    })
    useEffect(() => {
        setAlbumPromise(service.findAlbum(review.albumId))
    }, [review.albumId])
    useEffect(() => {
        if (albumPromise !== null) {
            albumPromise.then((response) => {
                setAlbum(response.body)
            })
        }
    }, [albumPromise])
    useEffect(() => {
        if (album.artists[0].id !== undefined) {
            setArtistLink(`/artists/${album.artists[0].id}`)
        }
    }, [album])

    return (<>
        <div className="card border-dark mb-3">
            <div className="row card-body">
                <div className="col center">
                    <img style={{ width: "90px" }} src={album.images[0].url} alt={album.name} />
                    <div className="row my-auto ms-3">
                        <span className="card-title text-medium small-margin-bottom volkhov text-white">
                            <i><Link className="link-salmon me-2" to="/albums/">{album.name}</Link></i>
                            <div>
                                <StarRating rating={review.rating} /></div></span>
                        <div className="row justify-content-center">
                            <h6 className="text-white nunito"><Link className="link-salmon" to={artistLink}>{album.artists[0].name}</Link> • {album.release_date}</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>)
};

export default LatestReviewItem;