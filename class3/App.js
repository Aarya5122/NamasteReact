import React from "react";
import ReactDOM from "react-dom/client"


const heading = 
<h1 key="one">
    Layout the foundation of React
</h1> //JSX Expression
console.log(typeof heading)

const headingTwo = React.createElement("h1", {key:"two"}, "Trying out jsx")
console.log(typeof headingTwo);

const Component = ({name="NAME C1"}) => {

    return (
        <>
            <p>*****************</p>
            <p>This is a component one</p>
            <h1>Component {name}</h1>
            {heading}
            <p>*****************</p>
        </>
    )
}

const ComponentTwo = ({name="NAME C2"}) => {
    return (
        <>
            <h1>Component Two</h1>
            {Component({name})}
            <Component />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render([<Component name='Aarya'/>, <headingTwo/>, headingTwo])