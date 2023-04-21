import '../index.css';
import TrendingReleaseItem from "./trending-release-item";
import * as service from "../../services/service";
import React, { useState, useEffect } from "react";

function filterAlbums(releaseList) {
    let filtered = []
    releaseList.forEach((item) => {
      if (item.album_group === "album") {
        filtered.push(item)
      }
    })
    return filtered
}

const TrendingReleases = () => {
    const [releases, setReleases] = useState([])
    const [promise, setPromise] = useState(null)
    useEffect(() => {
        setPromise(service.findNewreleases())
    }, [])

    useEffect(() => {
        if (promise !== null) {
            promise.then((response) => {
                setReleases(filterAlbums(response.body.albums.items))
            })
        }
    }, [promise])

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