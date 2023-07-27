import "./sass/style.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { IMG_URL } from "../../utils/Constants";

import Schimmer from "../../components/schimmer/Schimmer";

export default function RestroDetails() {
  const [restaurant, setRestaurant] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };

  // console.log(Object.values(restaurant));

  // Object.values(restaurant).map((r) => {
  //   console.log(r.card.info);
  // });

  return (
    <div>
      <Header />
      <main className="restroDetails">
        <div className="restroDetails-inner">
          {restaurant.length === 0 ? (
            <Schimmer />
          ) : (
            Object.values(restaurant)?.map((res) => {
              return (
                <div className="card" key={res?.card?.info?.id}>
                  <div className="img">
                    <img
                      src={
                        res?.card?.info?.imageId !== undefined
                          ? IMG_URL + res?.card?.info?.imageId
                          : "https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="description">
                    <h4>{res?.card?.info?.name}</h4>
                    <small>category - {res?.card?.info?.category}</small>
                    <p>
                      <small>
                        ratings -{" "}
                        {res?.card?.info?.ratings?.aggregatedRating?.rating}
                      </small>
                    </p>
                    <h6>${res?.card?.info?.price}</h6>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}
