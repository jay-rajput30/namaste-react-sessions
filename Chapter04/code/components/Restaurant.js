import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CLOUDINARY_IMAGE_URL, FETCH_MENU } from "../constants";
import { useLogin } from "../contexts/LoginProvider";
import Food from "./Food";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState({});
  const { restId } = useParams();
  const { loggedInUser } = useLogin();

  console.log({ loggedInUser });
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
    <div className="restaurant-container">
      <section className="restaurant-left">
        <h1 className="restaurant-name">{restaurant?.name}</h1>
        <h3>
          {restaurant?.area}, {restaurant?.city}
        </h3>
        <h4>{restaurant?.costForTwoMsg}</h4>
        <img src={CLOUDINARY_IMAGE_URL + `${restaurant?.cloudinaryImageId}`} />
      </section>

      <section className="restaurant-right">
        {Object.values(restaurant?.menu?.items || {}).map((item) => {
          return (
            <Food
              key={item?.id}
              name={item?.name}
              description={item?.description}
              cloudinaryImageId={item?.cloudinaryImageId}
              price={item?.price}
            />
          );
        })}
      </section>
    </div>
  ) : (
    <p>LOADING...</p>
  );
};

export default Restaurant;
