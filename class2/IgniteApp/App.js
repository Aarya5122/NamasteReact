import React from "react"
import ReactDOM from "react-dom/client"

const h1 = React.createElement("h1", {}, "Ignite your react app - Class 2")
const p = React.createElement("p", {}, "Bundlers and Package Mangaer - Own Implementation of create-react-app")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render([h1, p])