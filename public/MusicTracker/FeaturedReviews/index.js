import FeaturedReviewItem from "./FeaturedReviewItem.js";
import reviews from "./reviews.js"

const FeaturedReviews = () => {
    return (`
        <ul class="list-group">
            ${reviews.map(r => {
                return FeaturedReviewItem(r);
            }).join('')}
        </ul>
    `);
};

export default FeaturedReviews;