import { useState, useEffect } from "react";

const useData = () => {
  const [allRest, setAllRest] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
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
  return { allRest, setAllRest, filteredRest, setFilteredRest };
};

export default useData;
