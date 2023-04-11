import './index.css';
import TrackStarHeader from "../trackstar-header";
import ProfilePictureComponent from './profile-picture';
import ProfileHeaderComponent from './profile-header';
import FollowUnfollowButton from './follow-unfollow-button';
import LatestReviewsComponent from './latest-reviews';

function ProfileComponent() {
    let user = {
        image: "../../images/benson.jpeg",
        handle: "jackfurci",
        followers: 200,
        following: 50,
        reviews: 20,
        likes: 450,
        isFollowing: true,
    };
    return (<>
        <div className="row mt-2">
            <TrackStarHeader />
        </div>
        <div className="mt-2 row">
            <div className="col-5 d-none d-lg-flex flex-column justify-content-center align-items-center relative">
                <ProfilePictureComponent user={user} />
                <FollowUnfollowButton following={user.isFollowing}/>
            </div>
            <div className="col-12 col-lg-7">
                <ProfileHeaderComponent user={user} />
                <h2 className="nunito text-white">Latest Ratings: </h2>
                <LatestReviewsComponent />
            </div>
        </div>
    </>
    );
}

export default ProfileComponent;