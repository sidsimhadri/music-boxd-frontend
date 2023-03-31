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
                            <i><Link className="link-salmon me-2" to="/albums/">{review.title}</Link></i>
                            <StarRating rating={review.rating} /></span>
                        <div className="row justify-content-center">
                            <h6 className="text-white nunito"><Link className="link-salmon" to="/artists/">{review.artist}</Link> • {review.year}</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>)
};

export default LatestReviewItem;