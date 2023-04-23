import TrackStarHeader from "../trackstar-header";
import StarRating from "../star-rating";
import { Link } from "react-router-dom";
import ReviewActionsComponent from "./review-actions";
import TagsComponent from "./tags";
import * as service from "../services/service";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findReviewsThunk, findAlbumThunk, createReviewThunk} from "../services/thunks";
import ReviewByComponent from "./review-by";
import { useNavigate } from "react-router";

function CreateReviewComponent() {
    const { id } = useParams();
    const {aid} = useParams();
    const { reviews, loading } = useSelector(state => state.reviews)
    const currentUser = useSelector((state) => state.auth.currentUser)
    const [editing, setEditing] = useState(true)
    const [isUser, setIsUser] = useState(false)
    const [reviewBody, setBody] = useState(reviews.body)
    const [reviewRating, setRating] = useState(reviews.rating)
    const [albumPromise, setAlbumPromise] = useState(null)
    const [album, setAlbum] = useState({
        "name": "",
        "release_date": "",
        "images": [
            { "url": "" },
        ],
        "artists": [
            { "name": "" },
        ],
    })
    const [profile, setProfile] = useState({
        "username": "",
    })
    const [artistLink, setArtistLink] = useState("/")
    const [tags, setReviewTags] = useState([])
    const dispatch = useDispatch()
 
    useEffect(() => {
        dispatch(findReviewsThunk(id));
    }, [dispatch, id])
    useEffect(() => {
        if (currentUser !== null && currentUser !== undefined) {
            setProfile(currentUser.currentUser)
        }
    }, [currentUser])
    useEffect(() => {
        if (profile !== undefined && reviews.userId !== undefined) {
            setIsUser(profile._id === reviews.userId)
        }
    }, [profile, reviews.userId])
    useEffect(() => {
        setBody(reviews.body)
        setRating(reviews.rating)
        setReviewTags(reviews.tags)
        if (reviews.albumId !== undefined) {
            setAlbumPromise(service.findAlbum(reviews.albumId))
        }

    }, [reviews.body, reviews.rating, reviews.albumId, reviews.tags])
    useEffect(() => {
        if (albumPromise !== null) {
            albumPromise.then((response) => {
                setAlbum(response.body)
            })
        }
    }, [albumPromise])
    useEffect(() => {
        if (album.artists[0].id !== undefined) {
            setArtistLink(`/artists/${album.artists[0].id}`)
        }
    }, [album])

    useEffect(() => {
        const fetchAlbum = async () => {
          try {
            dispatch(findAlbumThunk(aid)).then(val => {
                console.log(val)
                val.then(v =>  {
                    setAlbum(v)
                })
            })
            
            // setAlbum(fetchedAlbum);
            console.log("Album: ")
            console.log(album.payload)
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchAlbum();
      }, [aid, dispatch]);




    const editingHandler = () => {
        
            dispatch(createReviewThunk({
                ...reviews,
                body: reviewBody,
                rating: reviewRating,
                tags: tags,
            }))
        
        setEditing(editing => !editing)
    }

    return (
        <>
            <div className="row mt-2">
                <TrackStarHeader />
                <h1 className = "nunito text-success mt-2"> Write a Review 
                <i className = "fa fa-pen text-success fs-4"></i>
                </h1>
            </div>
            {
                loading && <div className="row mt-2">Loading...</div>
            }
            {!loading &&
                <div className="row mt-2">
                    <div className="col-3 d-none d-lg-block no-pad-left">
                      
                        <img className="album-cover-review-image" width="250px" src={album.images[0].url} alt={album.images[0].url} />
                    </div>
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="row">
                            <ReviewByComponent review={reviews} />
                        </div>
                        <div className="row center" style={{ "wordBreak": "break-all" }}>
                            <span className="volkhov text-white h1-inline">
                                <Link className="link-salmon"> <i className="me-3">{album.name}</i></Link><br />
                                <Link className="nunito link-salmon" to={artistLink}>
                                    <span className="h2-inline">{album.artists[0].name}
                                    </span>
                                </Link><span className="h2-inline nunito">, {album.release_date} </span>
                            </span>
                            <div>
                                {!editing && <div className="nunito text-white"> {reviewBody} </div>}
                                {editing &&
                                    <div>
                                        <textarea className="form-control border-0 bg-dark text-white mb-1" value={reviewBody}
                                            onChange={(event) => setBody(event.target.value)}></textarea>
                                    </div>
                                }
                                <div className="h2-inline mb-2 center" style={{ "height": 40 }}>
                                    <StarRating rating={reviews.rating} editing={editing} setParentRating={setRating}></StarRating>
                                </div>
                                <TagsComponent review={reviews} editing={editing} setParentTags={setReviewTags} />
                                {
                                isUser &&
                                <button className={"btn " + (editing ? "btn-info" : "btn-outline-info")}
                                    onClick={() => editingHandler()}>
                                    <i className={"fa " + (editing ? "fa-check" : "fa-edit")}></i>
                                    <span className="nunito">
                                        {!editing && " Edit"}
                                        {editing && " Save"}
                                    </span>
                                </button>
                            }
                            </div>
                        </div>
                     
                    </div>
                    <div className="col-md-4 col-lg-3 d-none d-md-block nunito">
                        <ReviewActionsComponent review={reviews} currentUser={currentUser}/>
                    </div>
                </div>
            }
        </>
    )
}

export default CreateReviewComponent;