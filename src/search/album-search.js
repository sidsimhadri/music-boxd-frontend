import React, { useEffect, useState } from "react";
import ReviewItem from "./review-item";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsThunk } from "../services/thunks";

const AlbumSearchComponent = ({ reviewId }) => {
    const reviews = useSelector((state) => state.reviews.reviews);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsThunk(reviewId));
    }, [dispatch, reviewId]);

    console.log("reviews:", reviews);
    console.log("loading:", loading);

    const filteredReviews = Array.isArray(reviews) 
    ? reviews.filter(review => review._id === reviewId)
    : reviews._id === reviewId ? [reviews] : [];

    return (
        <div className="container-fluid">
            <div className="list-group mt-4">
                {loading && (
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="spinner-border text-danger" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )}
                {reviews &&
                    filteredReviews.map(review => (
                        <ReviewItem key={review._id} review={review} />
                    ))}
            </div>
        </div>
    );
};

export default AlbumSearchComponent;