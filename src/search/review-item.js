import React from "react";
import { Link } from "react-router-dom";
import ReviewInteractionsComponent from "../review-component/review-interactions";

const ReviewItem = ({ review }) => {
  const date = new Date(review.timestamp);
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <>
      <Link to={`/api/reviews/${review.id}`}>
      <div className="list-group-item">
      <p className="mb-1">{review.body}</p>
      <ReviewInteractionsComponent review={review}/>
      {/* <Link to={`api/reviews/${review.id}`}>View Review</Link> */}
    </div>
        </Link>
    </>
  );
};

export default ReviewItem;
