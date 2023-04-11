import MainSearchBar from "./main-search-bar.js";
import TrackStarLogo from "./trackstar-logo.js"
import ProfileInformation from "./profile-information.js";

function TrackStarHeader() {
    return (
        <div className="d-flex center justify-content-between bg-dark rounded">
            <TrackStarLogo />
            <MainSearchBar/>
            <ProfileInformation />
        </div>
    );
};

export default TrackStarHeader;