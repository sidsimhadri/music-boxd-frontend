const FollowUnfollowButton = ({ following }) => {
    return (<>
        {
            following && <button type="button" className="btn nunito text-medium rounded-pill btn-outline-warning">unfollow</button>
        }
        {
            !following && <button type="button" className="btn nunito text-medium rounded-pill btn-outline-success">follow</button>
        }
    </>);
}

export default FollowUnfollowButton;