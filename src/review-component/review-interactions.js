import { useDispatch } from "react-redux";
import { updateReviewThunk } from "../services/thunks";

const ReviewInteractionsComponent = ({ review }, editing, setEditing) => {
    const dispatch = useDispatch()
    const upvoteHandler = ({ review }) => {
        dispatch(updateReviewThunk({
            ...review,
            likes: review.likes + (review.liked ? 1 : -1),
            liked: !review.liked
        }))
    }
    const downvoteHandler = ({ review }) => {
        dispatch(updateReviewThunk({
            ...review,
            dislikes: review.dislikes + (review.disliked ? 1 : -1),
            disliked: !review.disliked
        }))
    }
    return (<>
        <button className={"btn me-2 " + (review.liked ? "btn-success" : "btn-outline-success")}
            onClick={() => upvoteHandler({ review })}>
            <i className="fa fa-arrow-up"></i><span className="nunito"> {review.likes} </span>
        </button>
        <button className={"btn me-2 " + (review.disliked ? "btn-danger" : "btn-outline-danger")}
            onClick={() => downvoteHandler({ review })}>
            <i className="fa fa-arrow-down"></i><span className="nunito"> {review.dislikes} </span>
        </button>
    </>);
}

export default ReviewInteractionsComponent;