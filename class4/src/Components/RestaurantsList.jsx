import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import env from "../config"
import SearchBar from "./SearchBar";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState(env.FOOD_ITEMS);

  return (
    <>
      <SearchBar setRestaurants={setRestaurants} />
      <div className="flex flex-wrap gap-20 food-list-container">
        {restaurants.map((item, index) => (
          // <RestaurantCard
          //   name={item.name}
          //   description={item.description}
          //   rating={item.rating}
          //   imgSrc={item.imgSrc}
          // />
          <RestaurantCard {...item} key={index} />
        ))}
      </div>
    </>
  );
};

export default RestaurantList;
