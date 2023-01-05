import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
const heading1 = React.createElement("h1", {}, "this is heading 1");
const heading2 = React.createElement("h2", {}, "this is heading 2");
const heading3 = React.createElement("h3", {}, "this is heading 3");
const nestedHeader = React.createElement("div", { className: "title" }, [
  heading1,
  heading2,
  heading3,
]);

const JSXHeader = (
  <div className="title">
    <h1>JSX heading 1</h1>
    <h2>JSX heading 2</h2>
    <h3>JSX heading 3</h3>
  </div>
);
const data = (
  <>
    <div>{nestedHeader}</div>
    {JSXHeader}
  </>
);

root.render(data);
