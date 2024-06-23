// let heading = React.createElement("h1", {
//     id: "heading", style: {
//         color: "purple"
//     }
// }, "Hello World from React")

// console.log(heading)

let root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root)

// root.render(heading)

/**
 *
 *
 * <div id="parent">
 *      <div id = "child">
 *          <h1>Im an h1</h1>
 *          <h2>Im an h2</h2>
 *      </div>
 *      <div id = "child2">
 *          <h1>Im an h1</h1>
 *          <h2>Im an h2</h2>
 *      </div>
 * </div>
 *
 *
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "I'm an h1"),
    React.createElement("h2", { id: "heading2" }, "I'm an h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "I'm an h1"),
    React.createElement("h2", { id: "heading2" }, "I'm an h2"),
  ]),
]);

root.render(parent);

console.log(parent);
