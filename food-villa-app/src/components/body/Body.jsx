import React, { useEffect, useState } from "react";
import "./sass/style.css";

import { IMG_URL } from "../../utils/Constants";
import Schimmer from "../schimmer/Schimmer";
import { Link } from "react-router-dom";

export default function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  if (!restaurants) return null;

  return (
    <main className="main">
      <section className="search">
        <input
          type="text"
          placeholder="search"
          id="search"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        {/* <button onClick={handleSearch}>search</button> */}
      </section>
      <section className="cards">
        <div className="cards-inner">
          {restaurants.length === 0 ? (
            <Schimmer />
          ) : (
            filterRestaurants
              ?.filter((restaurant) => {
                if (searchInput === " ") {
                  return restaurant?.data;
                }
                if (
                  restaurant?.data?.name
                    ?.toLowerCase()
                    ?.includes(searchInput.toLowerCase().trim())
                ) {
                  return restaurant.data;
                }
                return null;
              })
              .map((restaurant) => {
                return (
                  <Link
                    to={"/restraunt/" + restaurant.data.id}
                    style={{
                      textDecoration: "none",
                      color: "#000",
                      cursor: "pointer",
                    }}
                    key={Math.random()}
                  >
                    <div className="card">
                      <div className="img">
                        <img
                          src={IMG_URL + restaurant.data.cloudinaryImageId}
                          alt="img"
                        />
                      </div>
                      <div className="description">
                        <h5>{restaurant.data.name}</h5>
                        <small>{restaurant.data.locality}</small>
                        <small>{restaurant.data.avgRatingString}</small>
                        <small>{restaurant.data.costForTwo}</small>
                        <small>
                          {restaurant.data.cuisines.join("-").slice(0, 25)}
                        </small>
                        <h6>{restaurant.data.costForTwoString}</h6>
                      </div>
                    </div>
                  </Link>
                );
              })
          )}
        </div>
      </section>
    </main>
  );
}
