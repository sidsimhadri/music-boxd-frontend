import TrackStarHeader from "../../trackstar-header"
import StarRating from "../../star-rating";
import { Link } from "react-router-dom";
import ReviewInteractionsComponent from "../../review-component/review-interactions";
import ReviewActionsComponent from "../../review-component/review-actions";
import TagsComponent from "../../review-component/tags";
import * as service from "../../services/service";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReviewByComponent from "../../review-component/review-by"
import { useNavigate } from "react-router";
import { createReviewThunk } from "../../services/thunks";

function CreateReviewComponent() {
    const navigate = useNavigate()
    const { aid } = useParams();
    console.log(aid)
    const currentUser = useSelector((state) => state.auth.currentUser)
    const [reviewBody, setBody] = useState("")
    const [reviewRating, setRating] = useState(0)
    const [albumPromise, setAlbumPromise] = useState(null)
    const [album, setAlbum] = useState({
        "name": "",
        "release_date": "",
        "images": [
            { "url": "" },
        ],
        "artists": [
            { "name": "" },
        ],
    })
    const [profile, setProfile] = useState({
        "username": "",
    })

    const [artistLink, setArtistLink] = useState("/")
    const [tags, setReviewTags] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        if (currentUser !== null && currentUser !== undefined) {
            setProfile(currentUser.currentUser)
        }
    }, [currentUser])


        const [review, setReview] = useState(
            {
        "body": "",
        "upvotes": 0,
        "downvotes": 0,
        "timestamp": new Date(),
        "albumId": aid,
        "userId": profile._id,
        "rating": 0,
        "tags": [
        ],
        "downvotesArr": [
        ],
        "curator": false,
        "upvotesArr": []
    }
    )
    useEffect(() => {
        setAlbumPromise(service.findAlbum(aid))
                setReview({
                    ...review,
                    
                body: reviewBody,
                rating: reviewRating,
                tags: tags,
            })

    }, [aid,  reviewBody, reviewRating, tags])
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
    const editingHandler = () => {

            dispatch(createReviewThunk({
                ...review,
                body: reviewBody,
                rating: reviewRating,
                tags: tags,
                userId: profile._id
            }))
            navigate('/')
    }

    return (
        <>
            <div className="row mt-2">
                <TrackStarHeader />
            </div>
                <div className="row mt-2">
                    <div className="col-3 d-none d-lg-block no-pad-left">
                        <img className="album-cover-review-image" width="250px" src={album.images[0].url} alt={album.images[0].url} />
                    </div>
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="row">
                        </div>
                        <div className="row center" style={{ "wordBreak": "break-all" }}>
                            <span className="volkhov text-white h1-inline">
                                <Link className="link-salmon"> <i className="me-3">{album.name}</i></Link><br />
                                <Link className="nunito link-salmon" to={artistLink}>
                                    <span className="h2-inline">{album.artists[0].name}
                                    </span>
                                </Link><span className="h2-inline nunito">, {album.release_date} </span>
                            </span>
                            <div>
                                    <div>
                                        <textarea className="form-control border-0 bg-dark text-white mb-1" value={reviewBody}
                                            onChange={(event) => setBody(event.target.value)}></textarea>
                                    </div>
                                <div className="h2-inline mb-2 center" style={{ "height": 40 }}>
                                    <StarRating rating={review.rating} editing={true} setParentRating={setRating}></StarRating>
                                </div>
                                <TagsComponent review={review} editing={true} setParentTags={setReviewTags} />
                            </div>
                        </div>
                        <div className="mt-3">
                            <ReviewInteractionsComponent review={review} />

                                <button className={"btn btn-info" }
                                    onClick={() => editingHandler()}>
                                    <i className={"fa fa-check" }></i>
                            <span className="nunito">
                                Save
                                </span>
                                </button>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 d-none d-md-block nunito">
                        <ReviewActionsComponent review={review} currentUser={currentUser}/>
                    </div>
                </div>
            
        </>
    )
}

export default CreateReviewComponent;