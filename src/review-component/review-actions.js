import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ReviewActionsComponent = ({ review, currentUser }) => {
    const [albumLink , setAlbumLink] = useState("/")
    useEffect(() => {
        
            setAlbumLink(`/createReview/${review.albumId}`)
        
    }, [])
    return (
        <>
            <h2 className="text-white">Actions</h2>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <Link className="link-salmon">Rate this album</Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <Link className="link-salmon" to={albumLink}>Review this album</Link>
                </li>
                {!currentUser &&
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link className="link-salmon">Follow this reviewer</Link>
                    </li>
                }
            </ul>
        </>
    );
}

export default ReviewActionsComponent;