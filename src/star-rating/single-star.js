import { Star, StarFill, StarHalf } from "react-bootstrap-icons";

const SingleStar = ({ filledIn }) => {
    return (<>
        {filledIn && <StarFill className="pe-1" color="salmon" />}
        {!filledIn && <Star className="pe-1" color="salmon" />}
    </>)
}

export default SingleStar;