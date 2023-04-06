import TrackStarHeader from "../trackstar-header";
import StarRating from "../star-rating";
import { Link } from "react-router-dom";
import ReviewInteractionsComponent from "./review-interactions";
import ReviewActionsComponent from "./review-actions";
import TagsComponent from "./tags";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsThunk, updateReviewThunk } from "../services/thunks";

function ReviewComponent(
    { review = {
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg",
        reviewer: "jackfurci",
        timestamp: "2h",
        profilepic: "https://render.fineartamerica.com/images/rendered/small/print/images/artworkimages/square/3/regular-show-benson-graham-macy.jpg",
        albumName: "IGOR",
        artist: "Tyler, the Creator",
        albumYear: 2019,
        rating: 5,
        body: "Wowwwwwwwwwwwioerhfgjpweriuhgfjaksvnhqewiufjhkmnrekngflkjvqerwifghqeruigjlknbglwjeksdnvmeqrwndfuipjfdkvbndfjgqierwlgwkejfqewlr",
        likes: 200,
        liked: true,
        dislikes: 123,
        disliked: false,
        comments: 10,
        currentUser: true,
        tags: [
            'rap', 'soul'
        ],
        editing: false,
    } }
) {
    let [body, setBody] = useState(review.body)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findReviewsThunk())
    })
    return (
        <>
            <div className="row mt-2">
                <TrackStarHeader />
            </div>
            <div className="row mt-2">
                <div className="col-3 d-none d-lg-block no-pad-left">
                    <img className="album-cover-review-image" width="250px" src={review.image} alt={review.title} />
                </div>
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="row">
                        <span className="nunito float-left">{review.timestamp} - Review by <Link className="link-salmon">
                            @{review.reviewer}
                            <img className="profile-picture ms-2 me-2" src={review.profilepic} alt={review.reviewer}></img></Link></span>
                    </div>
                    <div className="row" style={{ "wordBreak": "break-all" }}>
                        <span className="volkhov text-white h1-inline">
                            <Link className="link-salmon"> <i className="me-3">{review.albumName}</i></Link><StarRating rating={review.rating}></StarRating>
                        </span>
                        <div>
                            <Link className="nunito link-salmon">
                                <span className="h2-inline">{review.artist}
                                </span>
                            </Link> <span className="h2-inline nunito">, {review.albumYear} </span>
                            {!review.editing &&
                                <div className="nunito text-white">
                                    {review.body}
                                </div>
                            }
                            {
                                review.editing &&
                                <div>
                                    <textarea className="form-control border-0 bg-dark text-white mb-1" value={body}
                                        onChange={(event) => setBody(event.target.value)}></textarea>
                                </div>
                            }
                            <TagsComponent review={review} />
                        </div>
                    </div>
                    <div className="mt-3">
                        <ReviewInteractionsComponent review={review} />
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 d-none d-md-block nunito">
                    <ReviewActionsComponent review={review} />
                </div>
            </div>
        </>
    )
}

export default ReviewComponent;