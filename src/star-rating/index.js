import SingleStar from "./single-star";

const StarRating = ({ rating }) => {
    return <span>
        <SingleStar filledIn={rating >= 1} />
        <SingleStar filledIn={rating >= 2} />
        <SingleStar filledIn={rating >= 3} />
        <SingleStar filledIn={rating >= 4} />
        <SingleStar filledIn={rating === 5} />
    </span>
};

export default StarRating;