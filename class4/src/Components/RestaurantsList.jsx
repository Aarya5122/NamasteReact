import RestaurantCard from "./RestaurantCard";
import env from "../config"

const RestaurantList = () => {
  return (
    <div className="flex flex-wrap gap-20 food-list-container">
      {env.FOOD_ITEMS.map((item, index) => (
        // <RestaurantCard
        //   name={item.name}
        //   description={item.description}
        //   rating={item.rating}
        //   imgSrc={item.imgSrc}
        // />
        <RestaurantCard {...item} key={index} />
      ))}
    </div>
  );
};

export default RestaurantList;
