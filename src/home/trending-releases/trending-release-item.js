import StarRating from "../../star-rating/index.js";
import { Link } from "react-router-dom";

const TrendingReleaseItem = ({ release }) => { 
    return (<>
        <div className="list-group-item no-rounded-tops">
            <img className="album-cover-trending-release" src={release.images[0].url} alt={release.title} />
            <Link className="link-salmon" to="/"><h6 className="mb-0 volkhov tr-nudge-left">{release.name}</h6></Link>
            <div>
                <div><Link className="link-salmon text-small nunito tr-nudge-left" style={{ "wordBreak": "break-word" }} to="/">{release.artists[0].name}</Link></div>
                <span className="text-muted text-small nunito ps-1 tr-nudge-left" style={{ "wordBreak": "keep-all" }}>• {release.release_date}</span>
            </div>
            <div className="text-muted text-small nunito tr-nudge-left">
                Reviews: {release.reviews}
            </div>
            {/* <StarRating rating={release.averageRating} /> */}
        </div></>
    );
}

export default TrendingReleaseItem;