const root = ReactDOM.createRoot(document.getElementById("root"));

const subHeader = React.createElement(
  "h3",
  { className: "sub-header", key: 1 },
  "this is the sub header"
);
const mainHeader = React.createElement(
  "h1",
  { className: "main-header", key: 2 },
  "this is the main header"
);

const header = React.createElement("header", { id: "header" }, [
  mainHeader,
  subHeader,
]);
root.render(header);
