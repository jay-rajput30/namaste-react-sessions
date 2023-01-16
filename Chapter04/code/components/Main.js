import { useState } from "react";
import { data } from "../constants";
import Restaurants from "./Restaurants";

export const Main = () => {
  const [restName, setRestName] = useState("");
  const [allRest, setAllRest] = useState(data);

  const filterData = (restName, allRest, setAllRest) => {
    let resData = allRest.filter((item) =>
      item.data.name.toLowerCase().includes(restName)
    );
    setAllRest(resData);
    return resData;
  };
  // let newData = filterData(restName, allRest, setAllRest);

  const searchBtnClickHandler = (e) => {
    setAllRest(filterData(restName, allRest, setAllRest));
  };
  return (
    // <></>
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

      <Restaurants
        restName={restName}
        allRest={allRest}
        setAllRest={setAllRest}
      />
      {console.log({ restName, allRest })}
    </main>
  );
};
