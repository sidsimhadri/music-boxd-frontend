import { Vinyl } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function TrackStarLogo() {
    return (
        <Link className="d-flex center" to="/">
            <Vinyl className="ms-3 float-left" style={{color: "white"}} size="30"/>
            <span className="text-white font-header float-left ms-2">TrackStar</span>
        </Link>
    );
}

export default TrackStarLogo;