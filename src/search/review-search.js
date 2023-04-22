import React, { useEffect, useState } from "react";
import ReviewItem from "./review-item";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsByBodyThunk } from "../services/thunks";

const ReviewSearchComponent = ({ reviewId }) => {
    const reviews = useSelector((state) =>
        state.reviews.reviews
        
    );
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsByBodyThunk(reviewId));
    }, [dispatch, reviewId]);



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
                {reviews && reviews.length > 0 ? (
                    reviews.map((review) => (
                        <ReviewItem key={review._id} review={review} />
                    ))
                ) : (
                    <div>No reviews found</div>
                )}
            </div>
        </div>
    );
};

export default ReviewSearchComponent;