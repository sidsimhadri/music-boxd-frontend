import PinnedReviewItem from "./LatestReviewItem.js";
import pinned from "./latest.js"

const PinnedReviews = () => {
    return (`
        <ul class="list-group">
            ${pinned.map(r => {
                return PinnedReviewItem(r);
            }).join('')}
        </ul>
    `);
};

export default PinnedReviews;