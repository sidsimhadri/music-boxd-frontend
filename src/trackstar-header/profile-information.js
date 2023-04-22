import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { profileThunk } from "../services/auth-thunks";


function ProfileInformation() {
    const currentUser = useSelector((state) => 
        state.auth.currentUser
    );

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk());
      }, []);
     
    const [profileName, setProfileName] = useState("")
    useEffect(() => {
        if (currentUser !== null && currentUser !== undefined) {
            setProfileName(currentUser.currentUser.username)
        }
    },[currentUser])
    return (
        <div className="d-flex center">
            <Link className="link-salmon d-flex center" to="/profile">
                <h6 className="nunito float-right mt-2">@{profileName}</h6>
                <img className="profile-picture float-right me-3 ms-3" src="../../images/benson.jpeg" alt=""/>       
            </Link>
        </div>
    );
};

export default ProfileInformation;