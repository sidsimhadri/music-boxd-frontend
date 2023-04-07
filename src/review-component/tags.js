import { useState } from "react";

const TagsComponent = ({ tags, editing, setParentTags }) => {
    const [currTags, setTags] = useState(tags);
    const deleteTagHandler = (tag) => {
        let newTags = tags.filter(t => t !== tag)
        setTags(newTags)
        setParentTags(newTags)
    }
    return (
        <>
            {
                currTags.map(t => {
                    return (
                        <span className="badge bg-info me-2">{t}
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