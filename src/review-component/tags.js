import { useDispatch } from "react-redux";
import { updateReviewThunk } from "../services/thunks";

const TagsComponent = ({ review }) => {
    const dispatch = useDispatch();
    const deleteTagHandler = (review, tag) => {
        dispatch(updateReviewThunk({
            ...review,
            tags: review.tags.filter(t => t !== tag)
        }))
    }
    return (
        <>
            {
                review.tags.map(t => {
                    return (
                        <span className="badge bg-info me-2">{t}
                            {review.editing &&
                                <button className="bg-info tag-x" onClick={() => {
                                    deleteTagHandler(review, t)
                                }}>X</button>
                            }
                        </span>
                    );
                })
            }
            {review.editing &&
                <span className="badge bg-dark me-2">
                    <button className="bg-dark tag-x">+</button>
                </span>
            }
        </>
    );
}

export default TagsComponent;