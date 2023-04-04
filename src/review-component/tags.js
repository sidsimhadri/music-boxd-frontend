const TagsComponent = ({ review }) => {
    return (
        <>
            {
                review.tags.map(t => {
                    return (
                        <span class="badge bg-info me-2">{t}</span>
                    );
                })
            }
        </>
    );
}

export default TagsComponent;