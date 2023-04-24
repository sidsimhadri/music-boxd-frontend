const ProfileHeaderComponent = ({profile}) => {
    return (
        <ul className="list-group mb-3">
            <li className="list-group-item">
                <div>
                    <span className="nunito text-large me-4">@{profile.profileName}</span>
                </div>
            </li>
        </ul>
    )
}

export default ProfileHeaderComponent;