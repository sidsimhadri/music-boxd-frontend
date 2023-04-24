import React, { useEffect, useState } from "react";
import FeaturedReviewItem from "../home/featured-reviews/featured-review-item.js";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsByTagIdThunk } from "../services/thunks";
import * as service from "../services/service"

const TagsSearchComponent = ({ tid }) => {

    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews);

    useEffect(() => {
        if (tid) {
            dispatch(findReviewsByTagIdThunk(tid));
        }
    }, [dispatch, tid]);

    console.log(reviews.reviews);



    return (
        <>
            <div className="mt-3">
                {reviews && reviews.reviews && reviews.reviews.length > 0 ? (
                    reviews.reviews.map((review) => (
                        <FeaturedReviewItem key={review._id} review={review} />
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </>
    );
};

export default TagsSearchComponent;