const heading = React.createElement
("h1", {id: "heading", title: "react Heading"}, "Hello react world");
const rootReact = ReactDOM.createRoot(document.getElementById("rootReact"));
rootReact.render(heading);


const parent = React.createElement(
"div", {id: "parent"}, 
[React.createElement(
    "div", {id: "child"}, 
    [React.createElement(
        "h1", {id: "heading1", title: "react Heading"}, "Hello react world"), React.createElement(
            "h2", {id: "heading2", title: "react Heading2"}, "Hello react world")
        ]

    ),
React.createElement(
    "div", {id: "child2"}, 
[React.createElement(
    "h1", {id: "heading3", title: "react Heading"}, "Hello react world"), React.createElement(
        "h2", {id: "heading4", title: "react Heading2"}, "Hello react world")]

)]
)
const rootReact1 = ReactDOM.createRoot(document.getElementById("rootReact1"));
rootReact1.render(parent);