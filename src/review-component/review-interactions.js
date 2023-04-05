import { useDispatch } from "react-redux";
import { updateReviewThunk } from "../services/thunks";

const ReviewInteractionsComponent = ({ review }) => {
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
    const editingHandler = ({ review }) => {
        dispatch(updateReviewThunk({
            ...review,
            editing: !review.editing
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
        {
            review.currentUser &&
            <button className={"btn " + (review.editing ? "btn-info" : "btn-outline-info")}
                onClick={() => editingHandler({ review })}>
                <i className="fa fa-edit"></i><span className="nunito"> Edit </span>
            </button>
        }
    </>);
}

export default ReviewInteractionsComponent;