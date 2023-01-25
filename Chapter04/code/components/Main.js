import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { data } from "../constants";
import Restaurants from "./Restaurants";
import Shimmer from "./Shimmer";

export const Main = ({ isLoggedIn, setIsLoggedIn }) => {
  const [restName, setRestName] = useState("");
  const [allRest, setAllRest] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const {
    state: { loggedIn },
  } = useLocation();
  console.log(loggedIn);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1662566&lng=72.8525696&page_type=DESKTOP_WEB_LISTING"
        );

        const data = await res.json();
        console.log(data.data.cards[2].data?.data?.cards);
        setAllRest(data.data.cards[2].data?.data?.cards);
        setFilteredRest(data.data.cards[2].data?.data?.cards);
      } catch (e) {
        console.error({ error: e });
      }
    }
    getData();
  }, []);

  // TODO: pass state through react router from login to home page
  // useEffect(() => {
  //   setIsLoggedIn(true);
  // }, [isLoggedIn]);

  const filterData = (restName, allRest, setAllRest) => {
    let resData = allRest.filter((item) =>
      item.data.name.toLowerCase().includes(restName)
    );
    // setFilteredRest(resData);
    return resData;
  };
  // let newData = filterData(restName, allRest, setAllRest);

  const searchBtnClickHandler = (e) => {
    setFilteredRest(filterData(restName, allRest, setAllRest));
  };

  // if (allRest.length === 0) {
  //   return <Shimmer />;
  // }
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
