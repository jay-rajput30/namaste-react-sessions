import { useState } from "react";
import Restaurants from "./Restaurants";

export const Main = () => {
  const [restName, setRestName] = useState("");
  return (
    <main className="main">
      <input
        type="text"
        value={restName}
        id="rest-name"
        onChange={(e) => setRestName(e.target.value)}
      />
      <Restaurants restName={restName} />
    </main>
  );
};
