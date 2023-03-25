import TrackStarHeader from "../TrackStarHeader/index.js";
import ProfileHeader from "./ProfileHeader/index.js";
import FavoriteAlbums from "./FavoriteAlbums/index.js";

/* eslint-env jquery */
function profileComponent() {
    let user = {
        image: "../../images/benson.jpeg",
        handle: "jackfurci",
        followers: 200,
        following: 50,
        reviews: 20,
        likes: 450,
    };
    $('#ts-profile').append(`
        <div class="row mt-2">
            ${TrackStarHeader()}
        </div>
        <div class="row mt-3">
            ${ProfileHeader(user)}
        </div>
    `);
}
$(profileComponent);