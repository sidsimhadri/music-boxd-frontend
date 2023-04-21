import React from "react";
import { Link } from "react-router-dom";
import ReviewInteractionsComponent from "../review-component/review-interactions";

const ReviewItem = ({ review }) => {

    return (
        //use featured review item to render properly
        <>
            <Link to={`/api/reviews/${review._id}`}>
                <div className="list-group-item rounded mt-3">
                    <p className="mb-1">{review.body}</p>
            
                    <ReviewInteractionsComponent review={review} />
                </div>
            </Link>
        </>
    );
};

export default ReviewItem;
