import FeaturedReviewItem from "./featured-review-item.js";
import reviews from "./reviews.js"
import { Link } from "react-router-dom";

const FeaturedReviews = () => {
    return (
        <ul className="list-group">
            {
                reviews.map(review => {
                    return (
                        <Link className="link-white" to={`/reviews/${review._id}`}>
                            <FeaturedReviewItem review={review} />
                        </Link>
                    )
                })
            }
        </ul>
    );
};

export default FeaturedReviews;