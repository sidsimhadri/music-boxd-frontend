import { Link } from "react-router-dom";
import * as service from "../../services/service"
import { useState, useEffect } from "react";

const TrendingReleaseItem = ({ release }) => { 
    const [reviewArr, setReviewArr] = useState([]);
    const releaseDate = new Date(release.release_date)
    const dateStr = releaseDate.toDateString()
    const promise = service.findReviewsByAlbumId(release.id)
    useEffect(() => {
        promise.then((response) => {
            setReviewArr(response)
        })
    }, [promise])
    return (<>
        <div className="list-group-item container no-rounded-tops">
            <img className="album-cover-trending-release mb-1" src={release.images[0].url} alt={release.title} />
            <Link className="link-salmon" to="/"><h6 className="mb-0 volkhov">{release.name}</h6></Link>
            <div>
                <div><Link className="link-salmon text-small nunito" style={{ "wordBreak": "break-word" }} to="/">{release.artists[0].name}</Link></div>
                <span className="text-muted text-small nunito" style={{ "wordBreak": "keep-all" }}>{dateStr}</span>
            </div>
            <div className="text-muted text-small nunito">
                Reviews: {reviewArr.length}
            </div>
        </div></>
    );
}

export default TrendingReleaseItem;