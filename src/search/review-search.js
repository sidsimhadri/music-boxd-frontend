import React, { useEffect } from "react";
import ReviewItem from "./review-item";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsThunk } from "../services/thunks";

const ReviewSearchComponent = () => {
    const reviews = useSelector((state) => state.reviews.reviews);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findReviewsThunk());
    }, [dispatch]);

    //console.log("reviews:", reviews);
    //console.log("loading:", loading);

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
                    reviews.map(review => (
                        <ReviewItem key={review._id} review={review} />
                    ))}
            </div>
        </div>
    );
};

export default ReviewSearchComponent;