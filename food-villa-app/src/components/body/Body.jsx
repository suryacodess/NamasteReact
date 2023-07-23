import React, { useEffect, useState } from "react";
import "./sass/style.css";

import { IMG_URL } from "../../utils/Constants";

export default function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    setIsLoader(false);
    const json = await data.json();
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  const LoadingC = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <main className="main">
      <section className="search">
        <input type="text" placeholder="search" id="search" />
        <button>search</button>
      </section>
      <section className="cards">
        <div className="cards-inner">
          {isLoader === true
            ? "loading...."
            : restaurants?.map((restaurant) => {
                return (
                  <>
                    <div className="card" key={restaurant.data.id}>
                      <div className="img">
                        <img
                          className="res-logo"
                          src={IMG_URL + restaurant.data.cloudinaryImageId}
                          alt="Not rendered"
                        />
                      </div>
                      <div className="description">
                        <h4>{restaurant.data.name}</h4>
                        <p>{restaurant.data.locality}</p>
                        <p>{restaurant.data.avgRatingString}</p>
                        <p>{restaurant.data.costForTwo}</p>
                        <small>{restaurant.data.cuisines.join("-")}</small>
                        <p>{restaurant.data.costForTwoString}</p>
                      </div>
                    </div>
                  </>
                );
              })}
        </div>
      </section>
    </main>
  );
}
