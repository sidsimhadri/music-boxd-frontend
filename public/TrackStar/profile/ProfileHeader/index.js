import LatestReviews from "../LatestReviews/index.js";
const ProfileHeader = (user) => {
    return (`
        <div class="col-4 relative" align="center">
            <button class="profile-pic" onclick="document.getElementById('choose-profile-picture').click();" />
                <img class="profile-picture larger float-left" src="${user.image}"> 
                <input type="file" id="choose-profile-picture">
            </button>
            <button type="button" class="btn nunito text-medium rounded-pill btn-outline-warning">unfollow</span>
        </div>
        <div class="col-8">
            <ul class="list-group mb-3">
                <li class="list-group-item">
                    <div>
                        <span class="nunito text-large me-4">@${user.handle}</span>
                        <span class="nunito text-medium badge bg-success vertical-align-middle">following</span>
                        <span class="nunito text-medium badge bg-secondary vertical-align-middle">follows you</span>
                    </div>
                    <span class="nunito text-medium text-primary">${user.followers} Followers |</span>
                    <span class="nunito text-medium text-primary">${user.following} Following |</span>
                    <span class="nunito text-medium text-primary">${user.reviews} Reviews |</span>
                    <span class="nunito text-medium text-primary">${user.likes} Likes</span>
                </li>
            </ul>
            <h3 class="nunito">Latest User Reviews</h3>
            ${LatestReviews()}
            <h3 class="nunito">Favorite Albums</h3>
        </div>
    `);
}

export default ProfileHeader;