import './index.css';
import TrackStarHeader from "../trackstar-header/index.js";
import TrendingReleases from './trending-releases/index.js';
import FeaturedReviews from "./featured-reviews/index.js";

function HomeComponent() {
    return (<>
        <div className="row mt-2">
            <TrackStarHeader />
        </div>
        <div className="row mt-2">
            <div className="no-pad-left col-3 col-md-2 col-lg-2 col-xl-3">
                <TrendingReleases />
            </div>
            <div className="col-9 col-lg-10 col-xl-9">
                <FeaturedReviews />
            </div>
        </div>
    </>
    );
};

export default HomeComponent;