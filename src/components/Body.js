import ResCard from "./ResCard.js"
import {useEffect, useState} from "react";
import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
    //React state variable - super powerful variable
    //const [listOfRestaurants] = useState([]);
    //normal JS Variable
    let [listOfRestaurants, setListOfRestaturant] = useState([]);

    
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

        //not a good way to write this type and we can use option chaining

        setListOfRestaturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    //this is also not a good way
    //use shimmer UI
    //conditional rendering
  //  if(listOfRestaurants.length === 0){
    //    return <Shimmer/>;
    //}

    return listOfRestaurants.length === 0 ? (<Shimmer/>):(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() =>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
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