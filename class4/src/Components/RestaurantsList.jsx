import RestaurantCard from "./RestaurantCard";

const foodItems = [
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rwwc0xufjuiityzgpfme",
    name: "Auntie Fung's",
    description: "Chinese, Thai, Asian",
    rating: "4.1",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
    name: "Burger King",
    description: "Burgers, American",
    rating: "4.2",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/t34dyumfv7orfffvqz5x",
    name: "IFC",
    description: "Burgers",
    rating: "4.2",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ar820jxombs5o1g9i6py",
    name: "Kwality Walls",
    description: "Desserts, Ice Cream, Ice Cakes",
    rating: "4.8",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pyaldv7cmusdapqzdiqx",
    name: "Pizza Hut",
    description: "Pizzas",
    rating: "4.0",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/51bd9c7efcc0e05c614c0e0674434e62",
    name: "NOTO - Healthy Ice Cream",
    description: "Ice Cream",
    rating: "4.2",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mhsqvfxemqhklv0rabmh",
    name: "Chinese BAE",
    description: "Chinese, Thai, Seafood",
    rating: "4.0",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0e8f93a56b93e43d7627c2c21bc1106c",
    name: "McDonald's",
    description: "Burgers, Beverages, Cafe, Desserts",
    rating: "4.4",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yeaxr6hurmcf6z0znx5w",
    name: "Baskin Robbins ",
    description: "Desserts, Ice Cream",
    rating: "4.3",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lpsesagdwtgfpjkvzcw7",
    name: "Imperio Juice and Cafe",
    description: "Juices",
    rating: "4.2",
  },
];

const RestaurantList = () => {
  return (
    <div className="flex flex-wrap gap-20 food-list-container">
      {foodItems.map((item, index) => (
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
