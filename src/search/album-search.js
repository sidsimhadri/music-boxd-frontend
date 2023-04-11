// import React, { useEffect } from "react";
// import AlbumItem from "./album-item";
// import { useDispatch, useSelector } from "react-redux";
// import { findAlbums } from "../services/thunks";

// const AlbumSearchComponent = () => {
//   const { albums, loading } = useSelector(
//     state => state.albumsData
//   );

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchAlbums());
//   }, [dispatch]);

//   return (
//     <div className="container-fluid">
//       <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
//         {loading && <p>Loading...</p>}
//         {albums &&
//           albums.map(album => (
//             <AlbumItem key={album.id} album={album} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default AlbumSearchComponent;