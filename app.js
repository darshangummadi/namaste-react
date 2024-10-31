import React from "react";
import ReactDOM from "react-dom/client"
import logo from './images/logo-react.jpg';

/*const heading = React.createElement("h1",{ id:"heading1", xyz:"abc"}, "Hello React 2nd Time");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", 
    {id:"parent"},
    [React.createElement("div", {id:"child"}, [
        React.createElement("h1", {id:"heading2"}, "Hello from innermost child"),
        React.createElement("h2", {id:"heading3"}, "Hello from innermost child2")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {id:"heading2"}, "Hello from innermost child"),
        React.createElement("h2", {id:"heading3"}, "Hello from innermost child2")
    ])]
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent); 
// react Elements

const heading = React.createElement("h1", {id:"heading"}, "Thats me" );
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));


   
// JSX - HTML like or XML like syntax
// JSX transpile the code even before it reached the JS code - DONE by parcel- Babel    


const JSXHeading = (<h1 id="heading" className="head">
    Namaste React using JSX
    </h1>);
console.log(JSXHeading);

const title = (
    <h1 id="heading" className="head" tabIndex="5">
        Namste Title Components</h1>
    );

const Insta = () => <a id="heading" href="https://www.instagram.com">Instagram</a>;

const number = 100000;

const HeadingComponent = () => (
    <div id="container">
        {title}
        <Insta />
        {Insta()}
        <h2 id="heading">{number}</h2>
        <h1 id="heading" className="heading">Namste Funcational Components</h1>
    </div>
    );
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<HeadingComponent/>);

root.render(JSXHeading);*/

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const styleCard = {
    backgroundColor: "white",
    padding: "20px"
}

const resList = [{
    "info": {
      "id": "142670",
      "name": "Shah Ghouse Hotel & Restaurant",
      "cloudinaryImageId": "bk26jkkqpg55veii0aj9",
      "locality": "Santh Nirankari Satsang Bhavan",
      "areaName": "Banjara Hills",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Biryani",
        "Chinese",
        "Tandoor",
        "Mughlai"
      ],
      "avgRating": 4.3,
      "parentId": "19271",
      "avgRatingString": "4.3",
      "totalRatingsString": "63K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-07 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Biryani.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Mughlai.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Mughlai.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-925e2d8f-9179-433b-95b4-1a4a7e91e259"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/shah-ghouse-hotel-and-restaurant-santh-nirankari-satsang-bhavan-banjara-hills-rest142670",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "373904",
      "name": "Baskin Robbins",
      "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
      "locality": "BHARGAVI ENCLAVE",
      "areaName": "Nallakunta & Vidyanagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "5588",
      "avgRatingString": "4.4",
      "totalRatingsString": "900",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-31 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-925e2d8f-9179-433b-95b4-1a4a7e91e259"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/baskin-robbins-bhargavi-enclave-nallakunta-and-vidyanagar-rest373904",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "65503",
      "name": "Cafe Coffee Day",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/4/b0bf84d5-bd86-413c-b529-7fa448d9b4cb_65503.jpg",
      "locality": "Beside Rainbow Hospital, Banjara Hills Road",
      "areaName": "Banjara Hills",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food"
      ],
      "avgRating": 4.4,
      "parentId": "1",
      "avgRatingString": "4.4",
      "totalRatingsString": "1.8K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-07 00:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-925e2d8f-9179-433b-95b4-1a4a7e91e259"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/cafe-coffee-day-beside-rainbow-hospital-road-banjara-hills-rest65503",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "612602",
      "name": "Kwality Walls Ice Cream and More",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/b3739937-c8ca-40ea-96cd-03b049b4600e_612602.JPG",
      "locality": "Circle No 13",
      "areaName": "Charminar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.6",
      "totalRatingsString": "2.0K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 6.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "6.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-31 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-925e2d8f-9179-433b-95b4-1a4a7e91e259"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/hyderabad/kwality-walls-ice-cream-and-more-circle-no-13-charminar-rest612602",
      "type": "WEBLINK"
    }
  }];

const ResCard = ({resData}) => {
    if(!resData) return null;
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-imgcard" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
            <div className="search" >Search</div>
            <div className="res-container">
                <ResCard resData = {resList[0]}/>
                <ResCard resData = {resList[1]}/>
                <ResCard resData = {resList[2]}/>
                <ResCard resData = {resList[3]}/>
            </div>
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
        <Header/>   
        <Body/> 
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);