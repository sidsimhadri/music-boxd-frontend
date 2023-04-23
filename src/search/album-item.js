import React from "react";
import { Link } from 'react-router-dom';

const AlbumItem = ({ album }) => {
    const { name, release_date, images, artists } = album;
    console.log(album.id)

    return (
        <>
         <Link to={`/albums/${album.id}`}>
            <div className="container">
                <div className="row">
                    <div className="card mt-5 col-12">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={images[0].url} className="card-img mb-3 mt-3" alt={name} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="text-white card-title nunito">{name}</h5>
                                    <p className="card-text nunito">
                                        {artists.map((artist) => (
                                            <span key={artist.id} className=" nunito card-text">
                                                {artist.name}
                                            </span>
                                        ))}
                                    </p>
                                    <p className="card-text nunito">Released: {release_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </Link>
        </>
    );
};

export default AlbumItem;