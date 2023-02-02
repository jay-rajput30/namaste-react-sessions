import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { data } from "../constants";
import { useLogin } from "../contexts/LoginProvider";
import useData from "../hooks/useData";
import Restaurants from "./Restaurants";
import Shimmer from "./Shimmer";
export const Main = ({ isLoggedIn, setIsLoggedIn }) => {
  const [restName, setRestName] = useState("");
  const { allRest, setAllRest, filteredRest, setFilteredRest } = useData();

  // TODO: pass state through react router from login to home page
  // useEffect(() => {
  //   setIsLoggedIn(true);
  // }, [isLoggedIn]);

  const filterData = (restName, allRest, setAllRest) => {
    let resData = allRest.filter((item) =>
      item.data.name.toLowerCase().includes(restName)
    );

    return resData;
  };

  const searchBtnClickHandler = (e) => {
    setFilteredRest(filterData(restName, allRest, setAllRest));
  };

  return (
    <main className="main">
      <div className="search-container">
        <input
          type="text"
          value={restName}
          id="rest-name"
          onChange={(e) => setRestName(e.target.value)}
        />
        <button onClick={searchBtnClickHandler}>search</button>
      </div>
      {allRest.length === 0 ? (
        <Shimmer />
      ) : (
        <Restaurants
          restName={restName}
          filteredRest={filteredRest}
          setAllRest={setAllRest}
        />
      )}
    </main>
  );
};
