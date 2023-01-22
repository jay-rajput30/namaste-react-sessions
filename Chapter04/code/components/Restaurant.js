import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CLOUDINARY_IMAGE_URL, data, FETCH_MENU } from "../constants";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState({});
  const { restId } = useParams();

  const fetchUrl = FETCH_MENU + restId;
  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await fetch(fetchUrl);

        const data = await result.json();

        setRestaurant(data.data);
      };

      fetchData();
    } catch (e) {
      console.error({ error: e.message });
    }
  }, []);

  return restaurant ? (
    <div>
      <h1>{restaurant?.name}</h1>
      <img src={CLOUDINARY_IMAGE_URL + `${restaurant?.cloudinaryImageId}`} />
      <div>
        {Object.values(restaurant?.menu?.items || {}).map((item) => {
          return <p key={item?.id}>{item?.name}</p>;
        })}
      </div>
    </div>
  ) : (
    <p>LOADING...</p>
  );
};

export default Restaurant;
