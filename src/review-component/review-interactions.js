import { useDispatch } from "react-redux";
import { updateReviewThunk } from "../services/thunks";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {deleteReviewThunk } from "../services/thunks";
import { useNavigate } from "react-router";

const ReviewInteractionsComponent = ({ review }) => {
    const dispatch = useDispatch()
    const [upvoted, setUpvoted] = useState(review.upvoted);
    const [downvoted, setDownvoted] = useState(review.downvoted);
    const [upvotes, setUpvotes] = useState(review.upvotes);
    const [downvotes, setDownvotes] = useState(review.downvotes);
    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = useNavigate();
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
    const deleteHandler = () => {
        dispatch(deleteReviewThunk(review._id))
        navigate('/');
    }
    const currentUser = useSelector((state) => {
        return state.auth.currentUser
    });

    useEffect(() => {
        if (currentUser !== undefined) {
            setIsAdmin(currentUser.currentUser.admin)
        }
    },[currentUser])

    return (<>
        <button className={"btn me-2 " + (upvoted ? "btn-success" : "btn-outline-success")}
            onClick={() => upvoteHandler({ review })}>
            <i className="fa fa-arrow-up"></i><span className="nunito"> {upvotes} </span>
        </button>
        <button className={"btn me-2 " + (downvoted ? "btn-danger" : "btn-outline-danger")}
            onClick={() => downvoteHandler({ review })}>
            <i className="fa fa-arrow-down"></i><span className="nunito"> {downvotes} </span>
        </button>
        {isAdmin && (
            <>
                <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
            </>)}

    </>);
}

export default ReviewInteractionsComponent;