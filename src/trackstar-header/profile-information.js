import { Link } from "react-router-dom";

function ProfileInformation() {
    return (
        <div className="d-flex center">
            <Link className="override d-flex center" to="/profile">
                <h6 className="nunito float-right mt-2">@jackfurci</h6>
                <img className="profile-picture float-right me-3 ms-3" src="../../images/benson.jpeg" alt=""/>       
            </Link>
        </div>
    );
};

export default ProfileInformation;