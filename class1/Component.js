export default function Component(props){
    const {name} = props;
    return React.createElement("h1", {key:"Component"}, "Hello ", name)
}