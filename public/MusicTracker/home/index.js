import MusicTrackerHeader from "../MusicTrackerHeader/index.js";
import TrendingReleases from "../TrendingReleases/index.js";
import FeaturedReviews from "../FeaturedReviews/index.js";

/* eslint-env jquery */
function homeComponent() {
    $('#mt-home').append(`
        <div class="row mt-2">
            ${MusicTrackerHeader()}
        </div>
        <div class="row mt-2">
            <div class="no-pad-left col-3 col-md-2 col-lg-2 col-xl-3">
                ${TrendingReleases()}
            </div>
            <div class="col-9 col-lg-10 col-xl-9">
                ${FeaturedReviews()}
            </div>
        </div>
    `);
}
$(homeComponent);