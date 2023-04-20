import FeaturedReviewItem from "./featured-review-item.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findReviewsThunk } from "../../services/thunks";

const FeaturedReviews = () => {
    const dispatch = useDispatch()
    const { reviews, loading } = useSelector(state => state.reviews)
    if (!Array.isArray(reviews) && !loading) {
        dispatch(findReviewsThunk())
    }
    useEffect(() => {
        dispatch(findReviewsThunk())
    }, [dispatch])
    return (<>
        {loading &&
            <div className="nunito">Loading...</div>
        }

        {!loading &&
            <ul className="list-group">
                {
                    reviews.map(review => {
                        return (
                            <FeaturedReviewItem review={review} />
                        )
                    })
                }
            </ul>
        }
    </>
    );
};

export default FeaturedReviews;