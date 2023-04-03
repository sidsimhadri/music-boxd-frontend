import TrackStarHeader from "../trackstar-header";
import StarRating from "../star-rating";
import { Link } from "react-router-dom";
import ReviewInteractionsComponent from "./review-interactions";
import ReviewActionsComponent from "./review-actions";

function ReviewComponent(
    { review = {
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg",
        reviewer: "jackfurci",
        timestamp: "2h",
        profilepic: "https://render.fineartamerica.com/images/rendered/small/print/images/artworkimages/square/3/regular-show-benson-graham-macy.jpg",
        albumName: "IGOR",
        artist: "Tyler, the Creator",
        albumYear: 2019,
        rating: 5,
        review: "Wowwwwwwwwwwwioerhfgjpweriuhgfjaksvnhqewiufjhkmnrekngflkjvqerwifghqeruigjlknbglwjeksdnvmeqrwndfuipjfdkvbndfjgqierwlgwkejfqewlr",
        likes: 200,
        dislikes: 123,
        comments: 10,
        currentUser: true,
    } }
) {
    return (
        <>
            <div className="row mt-2">
                <TrackStarHeader />
            </div>
            <div className="row mt-2">
                <div className="col-3 no-pad-left">
                    <img className="album-cover-review-image" src={review.image} alt={review.title} />
                </div>
                <div className="col-6">
                    <div className="row">
                        <span className="nunito float-left">Review by <Link className="link-salmon">
                            @{review.reviewer}
                            <img className="profile-picture ms-2 me-2" src={review.profilepic} alt={review.reviewer}></img></Link></span>

                    </div>
                    <div className="row" style={{ "word-break": "break-all" }}>
                        <span className="volkhov text-white h1-inline">
                            <Link className="link-salmon"> <i className="me-3">{review.albumName}</i></Link><StarRating rating={review.rating}></StarRating>
                        </span>
                        <div>
                            <Link className="nunito link-salmon">
                                <span className="h2-inline">{review.artist}

                                </span>
                            </Link> <span className="h2-inline nunito">, {review.albumYear} </span>
                            <div className="nunito text-white">
                                {review.review}
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <ReviewInteractionsComponent review={review} />
                    </div>
                </div>
                <div className="col-3 nunito">
                    <ReviewActionsComponent review={review}/>
                </div>
            </div>
        </>
    )
}

export default ReviewComponent;