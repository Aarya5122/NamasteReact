// Packages / Libraries
import React from "react";

//Components
import Header from "./Components/Header";

//CSS
import "./App.css"
import RestaurantList from "./Components/RestaurantsList";

const App = () => {
    return(
        <>
            <Header/>
            <RestaurantList/>
        </>
    )
}

export default App;