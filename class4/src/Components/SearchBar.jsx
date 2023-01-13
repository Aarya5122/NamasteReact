import { useState } from "react";
import env from "../config";

const SearchBar = ({ setRestaurants }) => {
  const [searchTxt, setSearchTxt] = useState("");

  function filterRestaurants() {
    setRestaurants(
      env.FOOD_ITEMS.filter((item) => item.name.includes(searchTxt))
    );
  }

  return (
    <form className="flex gap-0">
      <input
        className="search-bar"
        type="text"
        name="query"
        placeholder="Enter the items or restuarant to search"
        value={searchTxt}
        onChange={(e) => {
          setSearchTxt(e.target.value);
        }}
      />
      <button className="button" type="button" onClick={filterRestaurants}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
