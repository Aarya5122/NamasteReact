// Packages / Libraries
import React from "react";

//Components
import Header from "./Components/Header";
import RestaurantList from "./Components/RestaurantsList";
import SearchBar from "./Components/SearchBar";

/** Class - 5 ===== Importing and Exporting Components
*    import ParaD from "./Components/TestComponent"
*    import * as Obj from "./Components/TestComponent";
*    import {TestComponent} from "./Components/TestComponent";
*/

//CSS
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      {/* 
        Class-5 ===== Importing and Exporting Components ========= 
        <Obj.ParaTest />
        <Obj.HeadingTest />
        <Obj.TestComponent.Para />
        <Obj.TestComponent.Heading />
        <ParaD/> 
      */}
      <RestaurantList />
    </>
  );
};

export default App;
