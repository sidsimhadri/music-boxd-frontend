import MusicTrackerLogo from "../MusicTrackerLogo/index.js";
import TrendingReleases from "../TrendingReleases/index.js";

/* eslint-env jquery */
function homeComponent() {
    $('#mt-home').append(`
        <div class="row mt-2">
            ${MusicTrackerLogo()}
        </div>
        <div class="row mt-2">
            <div class="no-pad-left col-3 col-md-2 col-lg-2 col-xl-3">
                ${TrendingReleases()}
            </div>
            <div class="col-9 col-lg-10 col-xl-9 bg-secondary">
                <h2>Two row</h2>
            </div>
        </div>
    `);
}
$(homeComponent);