import TrackStarHeader from "../trackstar-header";
import StarRating from "../star-rating";
import { Link } from "react-router-dom";
import ReviewInteractionsComponent from "./review-interactions";
import ReviewActionsComponent from "./review-actions";
import TagsComponent from "./tags";
import * as service from "../services/service";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findReviewsThunk, updateReviewThunk } from "../services/thunks";
import ReviewByComponent from "./review-by";

function ReviewComponent() {
    // { r = {
    //     image: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg",
    //     reviewer: "jackfurci",
    //     timestamp: "2h",
    //     profilepic: "https://render.fineartamerica.com/images/rendered/small/print/images/artworkimages/square/3/regular-show-benson-graham-macy.jpg",
    //     albumName: "IGOR",
    //     artist: "Tyler, the Creator",
    //     albumYear: 2019,
    //     rating: 4,
    //     body: "Wow.",
    //     likes: 200,
    //     liked: true,
    //     dislikes: 123,
    //     disliked: false,
    //     comments: 10,
    //     currentUser: true,
    //     tags: [
    //         'rap', 'soul'
    //     ],
    // } }
    const { id } = useParams();
    const { reviews, loading } = useSelector(state => state.reviews)
    const [album, setAlbum] = useState(null);
    const dispatch = useDispatch()
    let [editing, setEditing] = useState(false)
    let [reviewBody, setBody] = useState(reviews.body)
    let [reviewRating, setRating] = useState(reviews.rating)
    let [albumTitle, setAlbumTitle] = useState(null)

    useEffect(() => {
        dispatch(findReviewsThunk(id));
    }, [])

    useEffect(() => {
        setBody(reviews.body)
        if (reviews.albumId !== undefined) {
            setAlbum(service.findAlbum(reviews.albumId))
        }
        setRating(reviews.rating)
    }, [reviews])

    const editingHandler = ({ review }) => {
        setEditing(!editing)
        if (!editing) { // review has been saved
            dispatch(updateReviewThunk({
                ...review,
                body: reviewBody,
                rating: reviewRating,
                //tags: reviewTags,
            }))
        }
    } 
    if (album !== null) {
        album.then((response) => {
            setAlbumTitle(response.body.name)
        })
    }
    return (
        <>
            <div className="row mt-2">
                <TrackStarHeader />
            </div>
            {
                loading && <div className="row mt-2">Loading...</div>
            }
            {!loading &&
                <div className="row mt-2">
                    <div className="col-3 d-none d-lg-block no-pad-left">
                        <img className="album-cover-review-image" width="250px" src={reviews.image} alt={reviews.title} />
                    </div>
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="row">
                            <ReviewByComponent review={reviews} />
                        </div>
                        <div className="row center" style={{ "wordBreak": "break-all" }}>
                            <span className="volkhov text-white h1-inline">
                                <Link className="link-salmon"> <i className="me-3">{albumTitle}</i></Link>
                                <Link className="nunito link-salmon">
                                    <span className="h2-inline">{reviews.artist}
                                    </span>
                                </Link><span className="h2-inline nunito">, {reviews.albumYear} </span>
                            </span>
                            <div>
                                {!editing && <div className="nunito text-white"> {reviewBody} </div>}
                                {editing &&
                                    <div>
                                        <textarea className="form-control border-0 bg-dark text-white mb-1" value={reviewBody}
                                            onChange={(event) => setBody(event.target.value)}></textarea>
                                    </div>
                                }
                                <div className="h2-inline mb-2 center" style={{ "height": 40 }}>
                                    <StarRating rating={reviewRating} editing={editing} setParentRating={setRating}></StarRating>
                                </div>
                                {/* <TagsComponent tags={reviewTags} editing={editing} setParentTags={setReviewTags} /> */}
                            </div>
                        </div>
                        <div className="mt-3">
                            <ReviewInteractionsComponent
                                review={reviews} />
                            {
                                reviews.currentUser &&
                                <button className={"btn " + (editing ? "btn-info" : "btn-outline-info")}
                                    onClick={() => editingHandler({ reviews })}>
                                    <i className={"fa " + (editing ? "fa-check" : "fa-edit")}></i>
                                    <span className="nunito">
                                        {!editing && " Edit"}
                                        {editing && " Save"}
                                    </span>
                                </button>
                            }
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3 d-none d-md-block nunito">
                        <ReviewActionsComponent review={reviews} />
                    </div>
                </div>
            }
        </>
    )
}

export default ReviewComponent;