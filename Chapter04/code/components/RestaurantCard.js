import { CLOUDINARY_IMAGE_URL } from "../constants";
import CuisinePills from "./CuisinePills";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  costForTwoString,
  avgRating,
  cloudinaryImageId,
}) => {
  // console.log({ restaurantId: id });
  return (
    <div className="restaurant">
      <div className="image-container">
        <img src={CLOUDINARY_IMAGE_URL + cloudinaryImageId} />
        <span
          className="rating"
          style={{
            backgroundColor: `${
              avgRating >= 4 ? " 	hsl(86, 78%, 27%)" : " 	hsl(38, 92%, 50%)"
            }`,
          }}
        >
          {avgRating}
        </span>
      </div>

      <div className="restaurant-details">
        <h2 className="restaurant-name">
          {name.slice(0, 20).toLowerCase() + (name.length > 20 ? "..." : "")}
        </h2>
        <CuisinePills cuisines={cuisines} />
        {/* <div className="rating-container"> */}
        <p className="cost">Avg cost: {costForTwoString.toLowerCase()}</p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
