import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findTagThunk, updateReviewThunk } from "../services/thunks";

const TagsComponent = ({ review, editing, setParentTags}) => {
    const dispatch = useDispatch();
    const [tagIDs, setTagsIDs] = useState([]);
    const [tagArr, setTags] = useState([]);
    useEffect(() => {
        dispatch(findTagThunk())
    }, [dispatch])
    const { tags } = useSelector(state => state.tags)
    useEffect(() => {
        if (review.tags !== undefined && review.tags !== []) {
            setTagsIDs(review.tags)
        }
    }, [review.tags])
    useEffect(() => {
        if (tagIDs !== [] && tags !== undefined) {
            setTags(tags.filter(t => {
                return tagIDs.includes(t._id)
            }))
        }
    }, [tagIDs, tags])
    const deleteTagHandler = (tag) => {
        let newTags = tagArr.filter(t => t !== tag)
        dispatch(updateReviewThunk({
            ...review,
            tags: tagArr
        }))
        setTags(newTags)
        setParentTags(newTags)
    }
    return (
        <>
            {
                tagArr.map(t => {
                    return (
                        <span className="badge bg-info me-2" key={t.name}>{t.name}
                            {editing &&
                                <button className="bg-info tag-x" onClick={() => {
                                    deleteTagHandler(t)
                                }}>X</button>
                            }
                        </span>
                    );
                })
            }
            {editing &&
                <span className="badge bg-dark me-2">
                    <button className="bg-dark tag-x">+</button>
                </span>
            }
        </>
    );
}

export default TagsComponent;