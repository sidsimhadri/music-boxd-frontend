import { Link } from "react-router-dom";
const ReviewByComponent = ({ review }) => {
    return (
        <>
            <span className="nunito float-left">{review.timestamp} - Review by <Link className="link-salmon">
                @{review.reviewer}
                <img className="profile-picture ms-2 me-2" src={review.profilepic} alt={review.reviewer}></img></Link></span>
        </>
    )

};

export default ReviewByComponent;