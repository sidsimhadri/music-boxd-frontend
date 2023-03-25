import { Vinyl } from "react-bootstrap-icons";

function TrackStarLogo() {
    return (
        <a className="d-flex center" href="#">
            <Vinyl className="ms-3 float-left" style={{color: "white"}} size="30"/>
            <span className="text-white font-header float-left ms-2">TrackStar</span>
        </a>
    );
}

export default TrackStarLogo;