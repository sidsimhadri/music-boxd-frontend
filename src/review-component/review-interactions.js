import { useDispatch } from "react-redux";
import { updateReviewThunk } from "../services/thunks";
import { useState } from "react";

const ReviewInteractionsComponent = ({ review }) => {
    const dispatch = useDispatch()
    const [upvoted, setUpvoted] = useState(review.upvoted); 
    const [downvoted, setDownvoted] = useState(review.downvoted); 
    const [upvotes, setUpvotes] = useState(review.upvotes); 
    const [downvotes, setDownvotes] = useState(review.downvotes); 
    const upvoteHandler = ({ review }) => {
        dispatch(updateReviewThunk({ 
            ...review,
            upvotes: upvoted ? upvotes - 1 : upvotes + 1,
            upvoted: !upvoted,
            downvotes: downvotes,
            downvoted: downvoted
        }))
        setUpvotes(upvotes => upvoted ? upvotes - 1 : upvotes + 1);
        setUpvoted(upvoted => !upvoted);
    }
    const downvoteHandler = ({ review }) => {
        dispatch(updateReviewThunk({
            ...review,
            downvotes: downvoted ? downvotes - 1 : downvotes + 1,
            downvoted: !downvoted,
            upvotes: upvotes,
            upvoted: upvoted
        }))
        setDownvotes(downvotes => downvoted ? downvotes - 1 : downvotes + 1);
        setDownvoted(downvoted => !downvoted);
    }
    return (<>
        <button className={"btn me-2 " + (upvoted ? "btn-success" : "btn-outline-success")}
            onClick={() => upvoteHandler({ review })}>
            <i className="fa fa-arrow-up"></i><span className="nunito"> {upvotes} </span>
        </button>
        <button className={"btn me-2 " + (downvoted ? "btn-danger" : "btn-outline-danger")}
            onClick={() => downvoteHandler({ review })}>
            <i className="fa fa-arrow-down"></i><span className="nunito"> {downvotes} </span>
        </button>
    </>);
}

export default ReviewInteractionsComponent;