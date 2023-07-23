import React, { useEffect, useState } from "react";
import "./sass/style.css";

import { IMG_URL } from "../../utils/Constants";

export default function Body() {
  const [restaurants, setRestaurants] = useState([]);
//   const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [searchInput, setSearchInput] = useState(" ");

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
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  //   console.log(searchInput);
  //   console.log(filterRestaurants);
  //   console.log(restaurants);
  //   const handleSearch = () => {
  //     const filter = restaurants.filter((restaurant) => {
  //       if (searchInput.length === 0) {
  //         return restaurant;
  //       } else {
  //         return restaurant.data.name.includes(searchInput);
  //       }
  //     });
  //     setRestaurants(filter);
  //   };

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
          {/* {restaurants?.length === 0 ? "no match found" : ""} */}
          {isLoader === true
            ? "loading...."
            : restaurants
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
                .map((restaurant, i) => {
                  return (
                    <>
                      <div className="card" key={i}>
                        <div className="img">
                          <img
                            src={IMG_URL + restaurant.data.cloudinaryImageId}
                            alt="img"
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
