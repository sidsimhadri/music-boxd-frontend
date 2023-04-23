import { useDispatch } from "react-redux";
import { updateReviewThunk } from "../services/thunks";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { deleteReviewThunk } from "../services/thunks";
import { useNavigate } from "react-router";

const ReviewInteractionsComponent = ({ review }) => {
    const dispatch = useDispatch()
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);
    const [upvotesArr, setUpvotesArr] = useState(review.upvotesArr);
    const [downvotesArr, setDownvotesArr] = useState(review.downvotesArr);
    const [upvotes, setUpvotes] = useState(review.upvotes);
    const [downvotes, setDownvotes] = useState(review.downvotes);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();
    const currentUser = useSelector((state) => {
        return state.auth.currentUser
    });
    const upvoteHandler = ({ review }) => {
        const index = upvotesArr.indexOf(currentUser.currentUser._id)
        const copiedArr = [...upvotesArr]
        if (upvoted && index > -1) {
            copiedArr.splice(index, 1)
        } else if (!upvoted && index === -1) {
            copiedArr.push(currentUser.currentUser._id)
        }
        dispatch(updateReviewThunk({
            ...review,
            upvotesArr: copiedArr,
            downvotesArr: downvotesArr,
            upvotes: upvoted ? upvotes - 1 : upvotes + 1,
            downvotes: downvotes,
        }))
        setUpvotesArr(copiedArr)
        setUpvotes(upvotes => upvoted ? upvotes - 1 : upvotes + 1);
        setUpvoted(upvoted => !upvoted);
    }
    const downvoteHandler = ({ review }) => {
        const index = downvotesArr.indexOf(currentUser.currentUser._id)
        const copiedArr = [...downvotesArr]
        if (downvoted && index > -1) {
            copiedArr.splice(index, 1)
        } else if (!downvoted && index === -1) {
            copiedArr.push(currentUser.currentUser._id)
        }
        dispatch(updateReviewThunk({
            ...review,
            downvotesArr: copiedArr,
            upvotesArr: upvotesArr,
            downvotes: downvoted ? downvotes - 1 : downvotes + 1,
            upvotes: upvotes,
        }))
        setDownvotesArr(copiedArr)
        setDownvotes(downvotes => downvoted ? downvotes - 1 : downvotes + 1);
        setDownvoted(downvoted => !downvoted);
    }
    const deleteHandler = () => {
        dispatch(deleteReviewThunk(review._id))
        navigate('/');
    }
    useEffect(() => {
        if (currentUser !== undefined && currentUser !== null) {
            setIsAdmin(currentUser.currentUser.isAdmin)
            if (review.upvotesArr !== undefined) {
                setUpvotesArr(review.upvotesArr)
                setUpvoted(review.upvotesArr.includes(currentUser.currentUser._id))
            }
            if (review.downvotesArr !== undefined) {
                setDownvotesArr(review.downvotesArr)
                setDownvoted(review.downvotesArr.includes(currentUser.currentUser._id))
            }
        }
    }, [currentUser, review.upvotesArr, review.downvotesArr])
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