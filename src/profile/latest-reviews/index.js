import LatestReviewItem from "./latest-review-item";
import latest from "./latest";

const LatestReviewsComponent = () => {
    return (
        <ul class="list-group">
            {
                latest.map(review => {
                    return (<LatestReviewItem review={review} />)
                })
            }
        </ul>
    );
}

export default LatestReviewsComponent;