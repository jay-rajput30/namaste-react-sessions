import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Footer from "./Footer";
import { Header as MyHeader } from "./Header";
import "./index.css";
import { Main } from "./Main";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div className="container">
      <MyHeader />
      <Main />
      <Footer />
    </div>
  );
};
root.render(<App />);
