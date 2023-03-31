const ReviewInteractionsComponent = ({ review }) => {
    return (<>
        <button className="btn btn-outline-success me-2">
            <i className="fa fa-arrow-up"></i><span className="nunito"> {review.likes} </span>
        </button>
        <button className="btn btn-outline-danger me-2">
            <i className="fa fa-arrow-down"></i><span className="nunito"> {review.dislikes} </span>
        </button>
        <button className="btn btn-outline-primary me-2">
            <i className="fa fa-comment"></i><span className="nunito"> {review.comments} </span>
        </button>
        {
            review.currentUser &&
            <button className="btn btn-outline-info">
                <i className="fa fa-edit"></i><span className="nunito"> Edit </span>
            </button>
        }
    </>);
}

export default ReviewInteractionsComponent;