import ResCard from "./ResCard.js"
import {useEffect, useState} from "react";
import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
    //React state variable - super powerful variable
    //const [listOfRestaurants] = useState([]);
    //normal JS Variable
    const [listOfRestaurants, setListOfRestaturant] = useState([]);

    const [filRestaurant, setFilRestaurant] = useState([]);

    const [searchRestaurants, setsearchRestaurants] = useState("");

    //whenever a state variable updates react triggers a reconciliation cyccle (re renders the component)
    console.log("Body Rendered");
    
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.6287557&lng=79.4191795&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json);

        //not a good way to write this type and we can use option chaining

        setListOfRestaturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search for restaurants" value={searchRestaurants} onChange={(e)=>{
                        setsearchRestaurants(e.target.value);
                    }} />
                    <button className="search-btn" onClick={() =>{
                        console.log(searchRestaurants);

                        //const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchRestaurants.toLowerCase()));

                        const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchRestaurants.toLowerCase())
                        || res.info.cuisines.some(cuisine => 
                        cuisine.toLowerCase().includes(searchRestaurants.toLowerCase())));

                        console.log(filteredRestaurant);

                        setFilRestaurant(filteredRestaurant);

                    }} 
                    >Search</button>
                </div>
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
                {filRestaurant.map((restaurant) => (
                    <ResCard key={restaurant.info.id} resData= {restaurant} /> ))
                }
            </div>
        </div>
    )
};

export default Body;