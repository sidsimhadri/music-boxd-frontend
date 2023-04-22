import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findTagThunk } from "../services/thunks";
import * as service from "../services/service"

const TagsComponent = ({ review, editing, setParentTags }) => {
    const dispatch = useDispatch();
    const [tagIDs, setTagsIDs] = useState([]);
    const [tagArr, setTags] = useState([]);
    const [addingTag, setAddingTag] = useState(false);
    const [newTag, setNewTag] = useState("");
    const [tagPromise, setTagPromise] = useState(null);
    const [addTagPromise, setAddTagPromise] = useState(null);
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

    useEffect(() => {
        if (!editing) {
            setAddingTag(false)
            setNewTag("")
        }
    }, [editing])
    const pushNewTag = (tag) => {
        let newTags = tagArr
        newTags.push(tag)
        setTags(newTags)
        setParentTags(newTags)
        setNewTag("")
    }

    useEffect(() => {
        if (tagPromise !== null) {
            tagPromise.then((response) => {
                if (response.length > 0) {
                    const newTagObj = response[0]
                    pushNewTag(newTagObj)
                } else {
                    setAddTagPromise(service.createTag({name: newTag}))
                }
            })  
        }
        setTagPromise(null)
    },[tagPromise])

    useEffect(() => {
        if (addTagPromise !== null) {
            addTagPromise.then((response) => {
                pushNewTag(response)
            })
        }
        setAddTagPromise(null)
    },[addTagPromise])

    const deleteTagHandler = (tag) => {
        let newTags = tagArr.filter(t => t !== tag)
        setTags(newTags)
        setParentTags(newTags)
    }
    const addTagHandler = () => {
        setAddingTag(!addingTag)
    }
    const confirmTagHandler = () => {
        setTagPromise(service.findTagByName(newTag))
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
            {editing && <>
                {addingTag &&
                    <>
                        <input type="text"
                            className="border-0 bg-dark text-white mb-1 me-2 rounded-corner nunito"
                            placeholder="New tag"
                            onChange={(event) => setNewTag(event.target.value)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') { confirmTagHandler() }
                            }}
                            style={{ "width": "65px" }}></input>
                    </>
                }
                <span className="badge bg-dark me-2">
                    <button className="bg-dark tag-x" onClick={() => {
                        addTagHandler()
                    }}>+</button>
                </span>
            </>
            }
        </>
    );
}

export default TagsComponent;