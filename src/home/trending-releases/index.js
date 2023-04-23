import '../index.css';
import TrendingReleaseItem from "./trending-release-item";
import * as service from "../../services/service";
import React, { useState, useEffect } from "react";

function filterDuplicateAlbums(albumList) {
    let filtered = []
    let names = []
    albumList.forEach((item) => {
      if (!names.includes(item.name)) {
        names.push(item.name)
        filtered.push(item)
      }
    })
    return filtered
  }

function filterAlbums(releaseList) {
    let albums = []
    let not_albums = []
    releaseList.forEach((item) => {
      if (item.album_group === "album") {
        albums.push(item)
      } else {
        not_albums.push(item)
      }
      if (albums.length < 5) {
        albums = albums.concat(not_albums.slice(0, 5 - albums.length - 1))
      }
    })
    return filterDuplicateAlbums(albums)
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
                <h6 className="nunito">New Releases</h6>
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