import React from "react";
import ReactDOM from "react-dom/client"

const heading = 
<h1 key="one">
    Layout the foundation of React
</h1> //JSX Expression
console.log(typeof heading)

const headingTwo = React.createElement("h1", {key:"two"}, "Trying out jsx")
console.log(typeof headingTwo);

const Component = ({name="NAME"}) => {
    return (
        <>
            <h1>Component {name}</h1>
            {heading}
        </>
    )
}

const ComponentTwo = ({name="NAME"}) => {
    return (
        <>
            <h1>Component Two</h1>
            {Component({name:"Singh"})}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render([<Component name='Aarya'/>, headingTwo,<ComponentTwo/>])