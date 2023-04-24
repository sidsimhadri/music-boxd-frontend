import StarRating from "../../star-rating";
import ReviewInteractionsComponent from "../../review-component/review-interactions";
import * as service from "../../services/service";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TagsComponent from "../../review-component/tags";
import { updateReviewThunk } from "../../services/thunks";

const FeaturedReviewItem = ({ review }) => {

    const [albumPromise, setAlbumPromise] = useState(null)
    const [userPromise, setUserPromise] = useState(null)
    const [album, setAlbum] = useState({
        "name": "",
        "release_date": "",
        "images": [
            { "url": "" },
        ],
        "artists": [
            { "id": "", "name": "" },
        ],
    })
    const [reviewBody, setBody] = useState(review.body)
    useEffect(() => {
        setBody(review.body)
    }, [review.body])
    let dateObj = new Date(review.timestamp)
    const date = dateObj.toDateString()
    const [user, setUser] = useState({
        "username": "",
        "profilePic": "",
    })
    const [editing, setEditing] = useState(false)
    const dispatch = useDispatch()
    const editingHandler = () => {
        if (editing) {
            dispatch(updateReviewThunk({
                ...review,
                body: review.body,
                rating: review.rating,
                tags: review.tags,
            }))
        }
        setEditing(editing => !editing)
    }
    const currentUser = useSelector((state) => state.auth.currentUser)
    const [isUser, setIsUser] = useState(false)
    const [profile, setProfile] = useState({
        "username": "",
    })
    useEffect(() => {
        if (currentUser !== null && currentUser !== undefined) {
            setProfile(currentUser.currentUser)
        }
    }, [currentUser])
    useEffect(() => {
        if (profile !== undefined && review.userId !== undefined) {
            setIsUser(profile._id === review.userId)
        }
    }, [profile, review.userId])
    const [artistLink, setArtistLink] = useState("/")
    useEffect(() => {
        setAlbumPromise(service.findAlbum(review.albumId))
    }, [review.albumId])
    useEffect(() => {
        setUserPromise(service.findUser(review.userId))
    }, [review.userId])
    useEffect(() => {
        if (albumPromise !== null) {
            albumPromise.then((response) => {
                setAlbum(response.body)
            })
        }
    }, [albumPromise])
    useEffect(() => {
        if (userPromise !== null) {
            userPromise.then((response) => {
                if (response !== null) {
                    setUser(response)
                }
            })
        }
    }, [userPromise])
    useEffect(() => {
        if (album.artists[0].id !== undefined) {
            setArtistLink(`/artists/${album.artists[0].id}`)
        }
    }, [album])
    console.log(user)
    console.log(isUser);
    return (
        <>
            <div className="card border-dark mb-3" style={{ "maxWidth": "80%" }}>
                <div className="row card-body">
                    <div className="col-8">
                        <Link className="link-white" to={!editing ? `/reviews/${review._id}` : undefined} onClick={editing ? e => e.preventDefault() : undefined}>
                            <h4 className="card-title small-margin-bottom volkhov text-white"><i><Link className="link-salmon" to="/albums/">{album.name}</Link></i></h4>
                            <h6 className="text-white nunito no-margin-bottom"><Link className="link-salmon" to={artistLink}>{album.artists[0].name}</Link> • {album.release_date}</h6>
                            <div className="row no-margin-left d-flex center">
                                <div className="col-1">
                                    <img className="profile-picture me-2" src={user.profilePicture} alt="" />
                                </div>
                                <div className="col-8 ms-3">
                                    <StarRating rating={review.rating} />
                                    <h6 className="text-muted nunito"><Link className="link-salmon" to={{
                                                                                                         pathname: `/profile/${user._id}`,
                                                                                                         search: `?isUser=${isUser}`
                                                                                                       }}>@{user.username}</Link> - {date}</h6>
                                </div>
                            </div>
                            {!editing && <div className="nunito text-white"> {reviewBody} </div>}
                            {editing &&
                                <div>
                                    <textarea className="form-control border-0 bg-dark text-white mb-1" value={reviewBody}
                                        onChange={(event) => setBody(event.target.value)}></textarea>
                                </div>
                            }
                            <div className="mb-2">
                                <TagsComponent review={review} /></div>
                        </Link>
                        <ReviewInteractionsComponent review={review} />
                        {isUser &&
                            <button className={"btn " + (editing ? "btn-info" : "btn-outline-info")} onClick={() => editingHandler()}>
                                <i className={"fa " + (editing ? "fa-check" : "fa-edit")}></i>
                                <span className="nunito">
                                    {!editing && " Edit"}
                                    {editing && " Save"}
                                </span>
                            </button>
                        }
                    </div>
                    <img className="album-cover-review-image col-4" src={album.images[0].url} alt={review.title} />
                </div>
            </div>
        </>
    )
};

export default FeaturedReviewItem;