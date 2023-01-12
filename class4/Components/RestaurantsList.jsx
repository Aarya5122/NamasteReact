import RestaurantCard from "./RestaurantCard";

const foodItems = [
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
    name: "Burger King",
    description: "Burgers, American",
    rating: 4.2,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
    name: "Burger King",
    description: "Burgers, American",
    rating: 4.2,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
    name: "Burger King",
    description: "Burgers, American",
    rating: 4.2,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
    name: "Burger King",
    description: "Burgers, American",
    rating: 4.2,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
    name: "Burger King",
    description: "Burgers, American",
    rating: 4.2,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
    name: "Burger King",
    description: "Burgers, American",
    rating: 4.2,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
    name: "Burger King",
    description: "Burgers, American",
    rating: 4.2,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
    name: "Burger King",
    description: "Burgers, American",
    rating: 4.2,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
    name: "Burger King",
    description: "Burgers, American",
    rating: 4.2,
  },
  {
    imgSrc:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl",
    name: "Burger King",
    description: "Burgers, American",
    rating: 4.2,
  },
];

const RestaurantList = () => {
  return (
    <div className="flex flex-wrap gap-20 food-list-container">
      {foodItems.map((item) => (
        <RestaurantCard
          name={item.name}
          description={item.description}
          rating={item.rating}
          imgSrc={item.imgSrc}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
