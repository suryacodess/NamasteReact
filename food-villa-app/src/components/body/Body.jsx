import React, { useEffect, useState } from "react";
import "./sass/style.css";

import { IMG_URL } from "../../utils/Constants";
import Schimmer from "../schimmer/Schimmer";
import { Link } from "react-router-dom";

import AppStatus from "../AppStatus/useAppStatus";

export default function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const status = AppStatus();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log(restaurants[0].info.id)

  let obj = Object.values(restaurants);
  // console.log(obj);

  // obj.map((obj) => {
  //   console.log(obj.info.id);
  // });

  if (!restaurants) return "try again later";

  return (
    <>
      {status === true ? (
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
              {restaurants?.length === 0 ? (
                <Schimmer />
              ) : (
                obj
                  ?.filter((obj) => {
                    if (searchInput === " ") {
                      return obj?.info;
                    }
                    if (
                      obj?.info?.name
                        ?.toLowerCase()
                        ?.includes(searchInput.toLowerCase().trim())
                    ) {
                      return obj.info;
                    }
                    return null;
                  })
                  .map((restaurant) => {
                    return (
                      <Link
                        to={"/restraunt/" + restaurant?.info?.id}
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
                              src={
                                IMG_URL + restaurant?.info?.cloudinaryImageId
                              }
                              alt="img"
                            />
                          </div>
                          <div className="description">
                            <h5>{restaurant.info.name}</h5>
                            <small>{restaurant?.info?.locality}</small>
                            <small>{restaurant?.info?.avgRatingString}</small>
                            <small>{restaurant?.info?.costForTwo}</small>
                            <small>
                              {restaurant?.info?.cuisines
                                ?.join("-")
                                ?.slice(0, 25)}
                            </small>
                            <h6>{restaurant?.info?.costForTwoString}</h6>
                          </div>
                        </div>
                      </Link>
                    );
                  })
              )}
            </div>
          </section>
        </main>
      ) : (
        <h5 style={{ width: "100%", textAlign: "center", padding: "20px" }}>
          Oops, You're Offline, Please check you're internet connectivity!
        </h5>
      )}
    </>
  );
}
