import TrackStarHeader from "../trackstar-header";
import { useParams } from "react-router-dom";
import ReviewSearchComponent from "./review-search";
import AlbumSearchComponent from "./album-search";

function SearchComponent() {
  const { query } = useParams();

  return (
    <>
      <div className="row mt-2">
        <TrackStarHeader />
      </div>
      {/* <ReviewSearchComponent reviewId={query} /> */}
      <AlbumSearchComponent query={query}/>

    </>
  );
}

export default SearchComponent;