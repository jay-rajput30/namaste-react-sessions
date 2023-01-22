import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log({ err });
  return (
    <div className="error-container">
      <h1>Oops! This page does not exists. Please check your URL</h1>
      <img className="error-img" src={`https://httpcats.com/404.jpg`} />
    </div>
  );
};

export default Error;
