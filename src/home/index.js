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
            <div className="d-none d-md-block no-pad-left col-3">
                <TrendingReleases />
            </div>
            <div className="col-12 col-md-9">
                <FeaturedReviews />
            </div>
        </div>
    </>
    );
};

export default HomeComponent;