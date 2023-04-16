import SingleStar from "./single-star";
import { useState } from "react";

const StarRating = ({ rating, editing, setParentRating }) => {
    const [currRating, setRating] = useState(rating)
    const handleRatingChange = (newRating) => {
        let finalRating = currRating === newRating ? newRating - 1 : newRating;
        setRating(finalRating)
        setParentRating(finalRating)
    }
    const starArr = [1, 2, 3, 4, 5]
    return <span>
        {
            starArr.map((i) => {
                return (
                    <>
                        {editing &&
                            <button className="star-button" onClick={() => handleRatingChange(i)}>
                                <SingleStar key={i} filledIn={currRating >= i} />
                            </button>
                        }
                        {!editing && <SingleStar filledIn={currRating >= i} />}
                    </>
                )
            })
        }
    </span>
};

export default StarRating;