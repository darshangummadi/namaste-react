import React from "react";
import ReactDOM from "react-dom"

const heading = React.createElement("h1",{ id:"heading1", xyz:"abc"}, "Hello React 2nd Time");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement("div", 
    {id:"parent"},
    [React.createElement("div", {id:"child"}, [
        React.createElement("h1", {id:"heading2"}, "Hello from innermost child"),
        React.createElement("h2", {id:"heading3"}, "Hello from innermost child2")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {id:"heading2"}, "Hello from innermost child"),
        React.createElement("h2", {id:"heading3"}, "Hello from innermost child2")
    ])]
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);