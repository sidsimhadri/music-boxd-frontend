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
                                <SingleStar filledIn={currRating >= i} />
                            </button>

                        }
                        {!editing && <SingleStar filledIn={currRating >= i} />}
                    </>
                )
            })
        }
        {/* <button className="star-button" onClick={() => handleRatingChange(1)}>
            <SingleStar filledIn={currRating >= 1} />
        </button>
        <button className="star-button" onClick={() => handleRatingChange(2)}>
            <SingleStar filledIn={currRating >= 2} />
        </button>
        <button className="star-button" onClick={() => handleRatingChange(3)}>
            <SingleStar filledIn={currRating >= 3} />
        </button>
        <button className="star-button" onClick={() => handleRatingChange(4)}>
            <SingleStar filledIn={currRating >= 4} />
        </button>
        <button className="star-button" onClick={() => handleRatingChange(5)}>
            <SingleStar filledIn={currRating === 5} />
        </button> */}
    </span>
};

export default StarRating;