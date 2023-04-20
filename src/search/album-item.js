import React from "react";

const AlbumItem = ({ album }) => {
  const { name, release_date, images, artists } = album;

  return (
    <div className="album-item">
      <img src={images[0].url} alt={name} />
      <div className="album-details">
        <h3 className="album-name">{name}</h3>
        <div className="album-artists">
            
          {artists.map((artist) => (
            <span key={artist.id} className="album-artist">
              {artist.name}
            </span>
          ))}
        </div>
        <div className="album-release-date">Released: {release_date}</div>
      </div>
    </div>
  );
};

export default AlbumItem;