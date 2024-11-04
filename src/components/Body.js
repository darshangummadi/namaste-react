import ResCard from "./ResCard.js"
import {useState} from "react";
import resList from "../utils/mockData.js";

const Body = () => {
    //React state variable - super powerful variable
    //const [listOfRestaurants] = useState([]);
    //normal JS Variable
    let [listOfRestaurants, setListOfRestaturant] = useState(resList); 
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() =>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.2
                    );
                    setListOfRestaturant(filteredList)
                }}
                >Top-Rated-Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <ResCard key={restaurant.info.id} resData= {restaurant} /> ))
                }
            </div>
        </div>
    )
};

export default Body;