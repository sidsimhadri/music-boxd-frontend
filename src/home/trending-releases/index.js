import releases from "./releases";
import '../index.css';
import TrendingReleaseItem from "./trending-release-item";

const TrendingReleases = () => {
    return (
        <>
            <div className="bg-dark text-white pt-3 ps-3 pb-1 bg-dark">
                <h6 className="nunito">Trending Releases</h6>
            </div>
            <ul className="list-group">
                {
                    releases.map(release => {
                        return (<TrendingReleaseItem release={release} />)
                    })
                }
            </ul>
        </>
    );
}
export default TrendingReleases;