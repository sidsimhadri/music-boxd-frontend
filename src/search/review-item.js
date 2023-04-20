import React from "react";
import { Link } from "react-router-dom";
import ReviewInteractionsComponent from "../review-component/review-interactions";

const ReviewItem = ({ review }) => {

    return (
        <>
            <Link to={`/api/reviews/${review.id}`}>
                <div className="list-group-item rounded mt-3">
                    <p className="mb-1">{review.body}</p>
                    <ReviewInteractionsComponent review={review} />
                </div>
            </Link>
        </>
    );
};

export default ReviewItem;
