const heading = React.createElement("h1", { id: "parent", xyz: "abc" }, 
                                    [React.createElement("h2", { id: "child1", xyz: "abc" }, "Child1"), React.createElement("h2",{id:"child2", xyz:"abc"},"Child2")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);