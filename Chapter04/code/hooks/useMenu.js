import { useState, useEffect } from "react";

const useMenu = (restId, url) => {
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await fetch(url);

        const data = await result.json();

        setRestaurant(data.data);
      };

      fetchData();
    } catch (e) {
      console.error({ error: e.message });
    }
  }, []);

  return { restaurant, setRestaurant };
};
export default useMenu;
