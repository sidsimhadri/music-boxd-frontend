import releases from "./releases.js";
import TrendingReleaseItem from "./TrendingReleaseItem.js";

const TrendingReleases = () => {
    return (`
        <div class="bg-dark text-white pt-3 ps-3 pb-1 bg-dark">
            <h6 class="nunito">Trending Releases</h6>
        </div>
        <ul class="list-group">
            ${releases.map(r => {
                return TrendingReleaseItem(r);
            }).join('')}
        </ul>
    `);
}

export default TrendingReleases;