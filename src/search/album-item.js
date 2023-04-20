import React from "react";

const AlbumItem = ({ album }) => {
    const { name, release_date, images, artists } = album;

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card mt-5 ml-3 col-7">
                        <img src={images[0].url} className="card-img-top mt-3 card-img" alt={name} />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">
                                {artists.map((artist) => (
                                    <span key={artist.id} className="card-text">
                                        {artist.name}
                                    </span>
                                ))}
                            </p>
                            <p className="card-text">Released: {release_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlbumItem;