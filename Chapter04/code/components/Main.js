import { useState } from "react";
import { data } from "../constants";
import Restaurants from "./Restaurants";

export const Main = () => {
  const [restName, setRestName] = useState("");
  const [allRest, setAllRest] = useState(data);
  return (
    <main className="main">
      <input
        type="text"
        value={restName}
        id="rest-name"
        onChange={(e) => setRestName(e.target.value)}
      />
      <Restaurants
        restName={restName}
        allRest={allRest}
        setAllRest={setAllRest}
      />
    </main>
  );
};
