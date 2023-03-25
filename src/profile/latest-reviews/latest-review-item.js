import StarRating from "../../star-rating";
import { Link } from "react-router-dom";

const LatestReviewItem = ({ review }) => {
    return (<>
        <div className="card border-dark mb-3">
            <div className="row card-body">
                <div className="col-7 center">
                    <img className="album-cover-trending-release" src={review.image} alt={review.title} />
                    <div className="row my-auto">
                        <span className="card-title text-medium small-margin-bottom volkhov text-white">
                            <i><Link className="override me-2" to="/">{review.title}</Link></i>
                            <StarRating rating={review.rating} /></span>
                        <div className="row justify-content-center">
                            <h6 className="text-white nunito"><Link className="override" to="/">{review.artist}</Link> • {review.year}</h6>
                        </div>
                    </div>

                </div>
                <div className="col-5 center">
                    {/* <ReviewInteractionsComponent review={review} /> */}
                </div>
            </div>
        </div>
    </>)
};

export default LatestReviewItem;