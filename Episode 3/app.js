import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// JS Variable
// const num = 777;

const TitleComponent = () => (
  <>
    <h1 style={{ color: "purple" }}>Components in React made Easy🚀</h1>
  </>
);

// console.log(typeof TitleComponent);

const authorName = (
  <>
    <TitleComponent />
    <TitleComponent></TitleComponent>
    {TitleComponent()}
    <span>By Chirag Sharma</span>
  </>
);

// // React Element
const introduction = <h3>Hi, my name is Chirag Sharma.</h3>;

// // Putting one component inside another component, Putting javascript inside component
const ContentComponent = () => (
  <div id="container">
    {/* <TitleComponent /> */}
    {authorName}
    <h2>Namaste from a Functional Compoenent!</h2>
    {introduction}
  </div>
);

root.render(<ContentComponent />);
