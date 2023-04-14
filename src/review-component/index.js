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
    const { id } = useParams();
    const { reviews, loading } = useSelector(state => state.reviews)
    const [album, setAlbum] = useState(null);
    const [albumTitle, setAlbumTitle] = useState("")
    const [albumCover, setAlbumCover] = useState("")
    const [albumArtist, setAlbumArtist] = useState("")
    const [albumDate, setAlbumDate] = useState("")
    const [editing, setEditing] = useState(false)
    const [reviewBody, setBody] = useState(reviews.body)
    const [reviewRating, setRating] = useState(reviews.rating)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findReviewsThunk(id));
    }, [])
    useEffect(() => {
        setBody(reviews.body)
        setRating(reviews.rating)
        if (reviews.albumId !== undefined) {
            setAlbum(service.findAlbum(reviews.albumId))
        }
    }, [reviews])
    const editingHandler = ({ review }) => {
        setEditing(!editing)
        if (!editing) { // review has been saved
            dispatch(updateReviewThunk({
                ...review,
                body: reviewBody,
                rating: reviewRating,
            }))
        }
    } 
    if (album !== null) {
        album.then((response) => {
            let obj = response.body
            setAlbumTitle(obj.name)
            setAlbumCover(obj.images[0].url)
            setAlbumArtist(obj.artists[0].name)
            setAlbumDate(obj.release_date)
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
                        <img className="album-cover-review-image" width="250px" src={albumCover} alt={reviews.title} />
                    </div>
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="row">
                            <ReviewByComponent review={reviews} />
                        </div>
                        <div className="row center" style={{ "wordBreak": "break-all" }}>
                            <span className="volkhov text-white h1-inline">
                                <Link className="link-salmon"> <i className="me-3">{albumTitle}</i></Link><br/>
                                <Link className="nunito link-salmon">
                                    <span className="h2-inline">{albumArtist}
                                    </span>
                                </Link><span className="h2-inline nunito">, {albumDate} </span>
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
                            <ReviewInteractionsComponent review={reviews} />
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