import CuisinePills from "./CuisinePills";

const RestaurantCard = ({
  name,
  cuisines,
  costForTwoString,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <div className="restaurant">
      <div className="image-container">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        />
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
        <div className="rating-container">
          <p className="cost">Avg cost: {costForTwoString.toLowerCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
