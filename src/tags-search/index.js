import TrackStarHeader from "../trackstar-header";
import TagsSearch from "./tags-review-search";
import { useParams } from "react-router-dom";

function TagsSearchComponent() {
  const { tid } = useParams();

  return (
    <>
      <div className="row mt-2">
        <TrackStarHeader />
      </div>
      <TagsSearch tid={tid} />

    </>
  );
}

export default TagsSearchComponent;