import './index.css';
import TrackStarHeader from "../trackstar-header";
import ProfilePictureComponent from './profile-picture';
import ProfileHeaderComponent from './profile-header';
import FollowUnfollowButton from './follow-unfollow-button';

function ProfileComponent() {
    let user = {
        image: "../../images/benson.jpeg",
        handle: "jackfurci",
        followers: 200,
        following: 50,
        reviews: 20,
        likes: 450,
    };
    return (<>
        <div className="row mt-2">
            <TrackStarHeader />
        </div>
        <div class="mt-2 row">
            <div className="col-4 relative" align="center">
                <ProfilePictureComponent user={user} />
                <FollowUnfollowButton />
            </div>
            <div className="col-8">
                <ProfileHeaderComponent user={user} />
            </div>
        </div>
    </>
    );
}

export default ProfileComponent;