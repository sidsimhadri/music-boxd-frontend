import StarRating from "../../star-rating";
import ReviewInteractionsComponent from "../../review-component/review-interactions";
import * as service from "../../services/service";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { findUsersThunk } from "../../services/thunks";
import { Link } from "react-router-dom";
import TagsComponent from "../../review-component/tags";

const FeaturedReviewItem = ({ review }) => {

    const dispatch = useDispatch()
    const [albumPromise, setAlbumPromise] = useState(null)
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
    let dateObj = new Date(review.timestamp) 
    const date = dateObj.toDateString()
    const [user, setUser] = useState({
        "username": "",
        "profilePic": "",
    })
    const [artistLink , setArtistLink] = useState("/")
  

    useEffect(() => {
        setAlbumPromise(service.findAlbum(review.albumId))
    },[review.albumId])
    useEffect(() => {
        if (review.userId !== undefined) {
            dispatch(findUsersThunk(review.userId));
        }
    },[dispatch, review.userId])
    useEffect(() => {
        if (albumPromise !== null) {
            albumPromise.then((response) => {
                setAlbum(response.body)
            })
        }
    }, [albumPromise])
    useEffect(() => {
    if (album.artists[0].id !== undefined ){
    setArtistLink(`/artists/${album.artists[0].id}`)
    }
    }, [album])
    const { users } = useSelector(state => state.users)
    useEffect(() => {
        if (users !== undefined) {
            setUser(users)
        }
    }, [users])
    return (
        <>
            <div className="card border-dark mb-3" style={{ "maxWidth": "80%" }}>

                <div className="row card-body">
                    <div className="col-8">
                        <Link className="link-white" to={`/reviews/${review._id}`}>
                            <h4 className="card-title small-margin-bottom volkhov text-white"><i><Link className="link-salmon" to="/albums/">{album.name}</Link></i></h4>
                            <h6 className="text-white nunito no-margin-bottom"><Link className="link-salmon" to={artistLink}>{album.artists[0].name}</Link> • {album.release_date}</h6>
                            <div className="row no-margin-left d-flex center">
                                <div className="col-1">
                                    <img className="profile-picture me-2" src={user.profilePicture} alt="" />
                                </div>
                                <div className="col-8 ms-3">
                                    <StarRating rating={review.rating} />
                                    <h6 className="text-muted nunito"><Link className="link-salmon" to="/profile">@{user.username}</Link> - {date}</h6>
                                </div>
                            </div>
                            <p className="card-text nunito">{review.body}</p>
                            <div className="mb-2">
                            <TagsComponent review={review}/></div>
                        </Link>
                        <ReviewInteractionsComponent review={review} />
                    </div>
                    <img className="album-cover-review-image col-4" src={album.images[0].url} alt={review.title} />
                </div>
            </div>
        </>
    )
};

export default FeaturedReviewItem;