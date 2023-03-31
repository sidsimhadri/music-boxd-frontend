import StarRating from "../../star-rating";
import ReviewInteractionsComponent from "../../review-component/review-interactions";
import { Link } from "react-router-dom";

const FeaturedReviewItem = ({ review }) => {
    return (
        <div className="card border-dark mb-3" style={{ "max-width": "80%" }}>
            <div className="row card-body">
                <div className="col-8">
                    <Link className="link-white" to={`/reviews/${review._id}`}>
                    <h4 className="card-title small-margin-bottom volkhov text-white"><i><Link className="link-salmon" to="/albums/">{review.title}</Link></i></h4>
                    <h6 className="text-white nunito"><Link className="link-salmon" to="/artists/">{review.artist}</Link> • {review.year}</h6>
                    <div className="row">
                        <div className="col-1">
                            <img className="profile-picture me-3" src={review.profilepic} alt=""/>
                        </div>
                        <div className="col-8 ms-3">
                            <StarRating rating={review.rating} />
                            <h6 className="text-muted nunito"><Link className="link-salmon" to="/profile">{review.reviewer}</Link> - {review.timestamp}</h6>
                        </div>
                    </div>
                    <p className="card-text nunito">{review.review}</p>
                    <br/>
                    </Link>
                    <ReviewInteractionsComponent review={review} />
                </div>
                <img className="album-cover-review-image col-4" src={review.image} alt={review.title}/>
            </div>
        </div>
    )
};

export default FeaturedReviewItem;