import './index.css';
import TrackStarHeader from "../trackstar-header/index.js";

function ProfileComponent() {
    return (<>
        <div className="row mt-2">
            <TrackStarHeader />
        </div>
        <div className="row mt-2">
            <div className="no-pad-left col-3 col-md-2 col-lg-2 col-xl-3">
            </div>
            <div className="col-9 col-lg-10 col-xl-9">

            </div>
        </div>
    </>
    );
}

export default ProfileComponent;