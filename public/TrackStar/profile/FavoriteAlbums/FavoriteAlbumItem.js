const FavoriteAlbumItem = (
    {
        album = {
            title: 'IGOR',
            artist: 'Tyler, the Creator',
            year: '2019',
            image: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg'
        }
    }) => {
    return (
        <div>
            <h2>{album.title}</h2>
            <img src={album.image} alt={album.title} width="50px" height="50px"></img>
        </div>
    );
}
export default FavoriteAlbumItem;