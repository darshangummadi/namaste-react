import {CDN_URL} from "../utils/constants";
const styleCard = {
    backgroundColor: "#e3ff93",
    padding: "20px"
}

const ResCard = (props) => {
    const {resData} = props;
    if(!resData) return null;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;

    return(
        <div className="res-card" style={styleCard}>
            <img className="res-imgcard" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
};

export default ResCard;