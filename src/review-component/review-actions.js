import { Link } from "react-router-dom";
const ReviewActionsComponent = ({ review, currentUser }) => {
    return (
        <>
            <h2 className="text-white">Actions</h2>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <Link className="link-salmon">Rate this album</Link>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <Link className="link-salmon">Review this album</Link>
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