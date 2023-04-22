import TrackStarHeader from "../trackstar-header";
import { useParams } from "react-router-dom";
import AlbumSearchComponent from "./album-search";

function SearchComponent() {
  const { query } = useParams();

  return (
    <>
      <div className="row mt-2">
        <TrackStarHeader />
      </div>
      <AlbumSearchComponent query={query}/>

    </>
  );
}

export default SearchComponent;