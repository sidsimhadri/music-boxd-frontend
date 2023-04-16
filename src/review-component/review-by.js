import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUsersThunk } from "../services/thunks";
const ReviewByComponent = ({ review }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findUsersThunk(review.userId));
    },[dispatch, review.userId])
    const { users } = useSelector(state => state.users)
    return (
        <>
            <span className="nunito float-left">{review.timestamp} - Review by <Link className="link-salmon">
                @{users.username}
                <img className="profile-picture ms-2 me-2" src={users.profilePic} alt={users.username}></img></Link></span>
        </>
    )

};

export default ReviewByComponent;