/*TODO: **************************************
                FIRST Contanier 
**********************************************/

/****************************
 Primary Contanier 
*****************************/
const MainHeading = React.createElement("h1", {
    key: "mainheading",
    style: {
        fontSize: "50px"
    }
}, "React Header here!")

const MainPara = React.createElement("p", {
    key: "mainpara",
    style: {
        fontSize: "20px"
    }
}, "Convert this mocup into React render! using Bootstrap")

const Header = React.createElement("div", {
    key: "header",
    className: "containerDiv flex flex-center flex-col",
    style:{
        backgroundColor: "#602aff"
    }
}, [MainHeading, MainPara])

/****************************
 Secondary Contanier 
*****************************/
const SubHeadingConstructor = ({number}) => {
    return (
        React.createElement("h1", {
            key: "subheading",
            style: {
                fontSize: "44px",
            },
        }, "Heading -", number)
    )
}

const SubPara = React.createElement("p", {
    key: "subparagraph",
    style: {
        fontSize: "20px",
    }
}, "Some Paragragh ...")

/******************************************************
    TODO:    IMPORTANT - Passing Params    TODO:
*******************************************************/
const SubContainerConstructor = ({number}) => {
    return React.createElement("div", {
        className: "flex flex-center flex-col",
        style: {
            color: "#515151",
        }
    }, React.createElement(SubHeadingConstructor, {number}), SubPara)
}

const Headings = React.createElement("div", {
    key: "headings",
    className: "containerDiv flex",
    style:{
        backgroundColor: "#fcfcfc"
    }
}, [React.createElement(SubContainerConstructor, {number:1}),
    React.createElement(SubContainerConstructor, {number:2}),
    React.createElement(SubContainerConstructor, {number:3})]
)


/****************************
 MERGING Contanier 
*****************************/
const parentContainer = React.createElement("div", {
    style:{
        height: "100vh"
    },
    className: "flex flex-center flex-col"
}, [Header, Headings])


/*TODO: **************************************
                SECOND Contanier 
**********************************************/


/****************************
 Heading One
*****************************/
const heading = React.createElement("h1", {
    className: "heading",
    id: "headingOne",
    style: {
        color: "red",
        backgroundColor: "pink"
    },
    key: "keyOneValue"
}, "Heading One")


/****************************
 Heading Two
*****************************/
const headingTwo = React.createElement("h1", {
    className: "heading",
    id: "headingTwo",
    style: {
        color: "green",
        backgroundColor: "lightGreen"
    },
    key: "keyTwoValue"
}, "Heading Two")


/****************************
  Container One
*****************************/
const containerOne = React.createElement("div", {
    className: "container",
    key: "containerOne",
    style: {
        height: "33vh",
    }
}, ["Container One", heading, headingTwo])


/****************************
 Container Child
*****************************/
const containerChild = React.createElement("div", {
    className: "container",
    style: {
        height: "33vh",
    },
    key: "containerTwo"
}, ["Child Container", heading, headingTwo])


/****************************
 Container Two
*****************************/
const containerTwo = React.createElement("div", {
    className: "container",
    key: "containerTwo"
}, ["Container Two", heading, headingTwo, containerChild])



/****************************
 Functional Component
*****************************/
function Component(props){
    const {name} = props;
    return React.createElement("h1", {key:"Component"}, "Hello ", name)
}
const component = Component({name: "Nagaraj Nirmala Aarya"})


/****************************
 Root Container
*****************************/
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root);

root.render([parentContainer, containerOne, containerTwo, component]);