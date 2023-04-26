import StarRating from "../../star-rating";
import ReviewInteractionsComponent from "../../review-component/review-interactions";
import * as service from "../../services/service";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TagsComponent from "../../review-component/tags";

import "../index.css";

import { updateReviewThunk } from "../../services/thunks";


const FeaturedReviewItem = ({ review }) => {

    const [albumPromise, setAlbumPromise] = useState(null)
    const [userPromise, setUserPromise] = useState(null)
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
    const [reviewBody, setBody] = useState(review.body)
    const [reviewRating, setRating] = useState(review.rating)
    const [reviewTags, setReviewTags] = useState(review.tags)

    useEffect(() => {
            setBody(review.body)
            setRating(review.rating)
            setReviewTags(review.tags)
        }, [review.body, review.rating, review.tags])
    let dateObj = new Date(review.timestamp)
    const date = dateObj.toDateString()
    const [user, setUser] = useState({
        "username": "",
        "profilePic": "",
    })
    const [editing, setEditing] = useState(false)
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.auth.currentUser)
    const [isUser, setIsUser] = useState(false)
    const [profile, setProfile] = useState({
        "username": "",
        "_id": ""
    })
    useEffect(() => {
        if (currentUser !== null && currentUser !== undefined) {
            setProfile(currentUser.currentUser)
        }
    }, [currentUser])
    useEffect(() => {
        if (profile !== undefined && review.userId !== undefined) {
            setIsUser(profile._id === review.userId)
        }
    }, [profile, review.userId])
    const [artistLink, setArtistLink] = useState("/")
    const [albumLink , setAlbumLink] = useState("/")
    useEffect(() => {
        setAlbumPromise(service.findAlbum(review.albumId))
    }, [review.albumId])
    useEffect(() => {
        setUserPromise(service.findUser(review.userId))
    }, [review.userId])
    useEffect(() => {
        if (albumPromise !== null) {
            albumPromise.then((response) => {
                setAlbum(response.body)
            })
        }
    }, [albumPromise])
    useEffect(() => {
        if (userPromise !== null) {
            userPromise.then((response) => {
                if (response !== null) {
                    setUser(response)
                }
            })
        }
    }, [userPromise])
    useEffect(() => {
        if (album.artists[0].id !== undefined) {
            setArtistLink(`/artists/${album.artists[0].id}`)
        }
    }, [album])


    useEffect(() => {
        if (album !== undefined) {
            setAlbumLink(`/albums/${album.id}`)
        }
    }, [album])
console.log(user)
    return (
        <>
            <div className="card border-dark mb-3" style={{ "maxWidth": "80%" }}>
                <div className="row card-body">
                    <div className="col-8">

                        <Link className="link-white" to={{pathname: `/reviews/${review._id}`,
                                                          search: `?editing=${editing}`
                                                         }}>
                            <h4 className="card-title small-margin-bottom volkhov text-white"><i><Link className="link-salmon" to={ albumLink}>{album.name}</Link></i></h4>

                            <h6 className="text-white nunito no-margin-bottom"><Link className="link-salmon" to={artistLink}>{album.artists[0].name}</Link> • {album.release_date}</h6>
                            <div className="row no-margin-left d-flex center">
                                <div className="col-1">
                                    <img className="profile-picture me-2" src={user.profilePicture} alt="" />
                                </div>
                                <div className="col-8 ms-3">
                                    <StarRating rating={review.rating} />
                                    <h6 className="text-muted nunito">
                                    {user._id !== profile._id &&
                                    <Link className="link-salmon" to= {`/profile/${user._id}`}> @{user.username}</Link>
                                    }
                                    {user._id === profile._id &&
                                    <Link className="link-salmon" to= "/profile"> @{user.username}</Link>
                                    }
                                   - {date}</h6>


                                </div>
                            </div>

                            <div className="nunito text-white">

                             {user.role === "curator" ? <span><i className="fa fa-flag red-flag me-2"></i></span> : null}
                             {reviewBody}
                            </div>

                            <div className="mb-2">
                                <TagsComponent review={review} /></div>
                        <ReviewInteractionsComponent review={review} />

                        { isUser &&
                                  <Link to={{pathname: `/reviews/${review._id}`,
                                             search: `?editing=${!editing}`
                                            }}
                                    className={"btn btn-outline-info"}>
                                    <i className={"fa fa-edit"}></i>
                                    <span className="ms-2 nunito">Edit</span>
                                  </Link>

                        }</Link>
                    </div>
                    <img className="album-cover-review-image col-4" src={album.images[0].url} alt={review.title} />
                </div>
            </div>
        </>
    )
};

export default FeaturedReviewItem;