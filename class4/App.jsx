// Packages / Libraries
import React from "react";

//Components
import Header from "./Components/Header";
import RestaurantList from "./Components/RestaurantsList";
import SearchBar from "./Components/SearchBar";

//CSS
import "./App.css"

const App = () => {
    return(
        <>
            <Header/>
            <SearchBar/>
            <RestaurantList/>
        </>
    )
}

export default App;