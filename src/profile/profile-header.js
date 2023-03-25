const ProfileHeaderComponent = ({ user }) => {
    return (
        <ul className="list-group mb-3">
            <li className="list-group-item">
                <div>
                    <span className="nunito text-large me-4">@{user.handle}</span>
                    <span className="nunito badge follow-info bg-success me-2">following</span>
                    <span className="nunito badge follow-info bg-secondary">follows you</span>
                </div>
                <span className="nunito text-medium text-primary">{user.followers} Followers | </span>
                <span className="nunito text-medium text-primary">{user.following} Following | </span>
                <span className="nunito text-medium text-primary">{user.reviews} Reviews | </span>
                <span className="nunito text-medium text-primary">{user.likes} Likes</span>
            </li>
        </ul>
    )
}

export default ProfileHeaderComponent;