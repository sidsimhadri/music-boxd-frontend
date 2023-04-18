import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUsersThunk } from "../services/thunks";
const ReviewByComponent = ({ review }) => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        "username": "",
        "profilePic": "",
    })
    const [date, setDate] = useState(null)
    useEffect(() => {
        if (review.userId !== undefined) {
            dispatch(findUsersThunk(review.userId));
        }
    },[dispatch, review.userId])
    useEffect(() => {
        setDate(new Date(review.timestamp).toDateString())
    },[review])
    const { users } = useSelector(state => state.users)
    useEffect(() => {
        if (users !== undefined) {
            setUser(users)
        }
    }, [users])
    return (
        <>
            <span className="nunito float-left">{date} - Review by <Link className="link-salmon">
                @{user.username}
                <img className="profile-picture ms-2 me-2" src={user.profilePicture} alt={user.username}></img></Link></span>
        </>
    )

};

export default ReviewByComponent;