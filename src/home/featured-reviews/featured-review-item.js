import StarRating from "../../star-rating";

const FeaturedReviewItem = ({ review }) => {
    return (
        <div className="card border-dark mb-3" style={{ "max-width": "70%" }}>
            <div className="row card-body">
                <div className="col-8">
                    <h4 className="card-title small-margin-bottom volkhov text-white"><i><a href="#" className="override">{review.title}</a></i></h4>
                    <h6 className="text-white nunito"><a href="#" className="override">{review.artist}</a> • {review.year}</h6>
                    <div className="row">
                        <div className="col-1">
                            <img className="profile-picture me-3" src={review.profilepic} />
                        </div>
                        <div className="col-8 ms-3">
                            <StarRating rating={review.rating} />
                            <h6 className="text-muted nunito"><a href="#" className="override">{review.reviewer}</a> - {review.timestamp}</h6>
                        </div>
                    </div>
                    <p className="card-text nunito">{review.review}</p>
                    <button className="btn btn-outline-success me-2">
                        <i className="fa fa-arrow-up"></i><span className="nunito"> {review.likes} </span>
                    </button>
                    <button className="btn btn-outline-danger me-2">
                        <i className="fa fa-arrow-down"></i><span className="nunito"> {review.dislikes} </span>
                    </button>
                    <button className="btn btn-outline-primary me-2">
                        <i className="fa fa-comment"></i><span className="nunito"> {review.comments} </span>
                    </button>
                    {
                        review.currentUser &&
                        <button className="btn btn-outline-info">
                            <i className="fa fa-edit"></i><span className="nunito"> Edit </span>
                        </button>
                    }
                </div>
                <img className="album-cover-review-image col-4" src={review.image} />
            </div>
        </div>
    )
};

export default FeaturedReviewItem;