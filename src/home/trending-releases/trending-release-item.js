import StarRating from "../../star-rating/index.js";
import { Link } from "react-router-dom";

const TrendingReleaseItem = ({ release }) => {
    return (<>
        <div className="list-group-item no-rounded-tops">
            <img className="album-cover-trending-release" src={release.image} alt={release.title} />
            <Link className="override" to="/"><h6 className="mb-0 volkhov">{release.title}</h6></Link>
            <div>
                <span><Link className="override float-left text-small nunito" to="/">{release.artist}</Link></span>
                <span className="text-muted text-small float-left nunito ps-1">• {release.year}</span>
            </div><br />
            <div className="text-muted text-small nunito">
                Reviews: {release.reviews}
            </div>
            <StarRating rating={release.averageRating} />
        </div></>
    );
}

export default TrendingReleaseItem;