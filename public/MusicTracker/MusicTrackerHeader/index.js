import MainSearchBar from "./MainSearchBar.js";
import MusicTrackerLogo from "./MusicTrackerLogo.js"
import ProfileInformation from "./ProfileInformation.js";

const MusicTrackerHeader = () => {
    return (`
        <div class="d-flex center justify-content-between bg-dark">
            ${MusicTrackerLogo()}
            ${MainSearchBar()}
            ${ProfileInformation()}
        </div>
    `);
};

export default MusicTrackerHeader;