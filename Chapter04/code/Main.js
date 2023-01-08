import { data } from "./constants.js";

const CuisinePills = ({ cuisines }) => {
  console.log("inside cuisine:", { cuisines });
  return (
    <div className="cuisine-pills">
      {cuisines?.map((item, index) => {
        return (
          <span key={index} className="pill-item">
            {item}
          </span>
        );
      })}
    </div>
  );
};
const RestaurantCard = ({
  name,
  cuisines,
  costForTwoString,
  avgRating,
  cloudinaryImageId,
}) => {
  console.log({ cuisines });
  return (
    <div className="restaurant">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
      />
      <div className="restaurant-details">
        <h2 className="name">
          {name.slice(0, 20) + (name.length > 20 ? "..." : "")}
        </h2>
        <CuisinePills cuisines={cuisines} />
        <div className="rating-container">
          <p className="cost">Avg cost: {costForTwoString.toLowerCase()}</p>
          <span
            className="rating"
            style={{
              color: `${
                avgRating >= 4 ? " 	hsl(86, 78%, 27%)" : " 	hsl(38, 92%, 50%)"
              }`,
            }}
          >
            {avgRating}
          </span>
        </div>
      </div>
    </div>
  );
};

const Restaurants = () => {
  return (
    <section className="all-restaurants">
      {data.map((item) => {
        return <RestaurantCard key={item.data.id} {...item.data} />;
      })}
    </section>
  );
};
const Main = () => {
  return (
    <main className="main">
      <Restaurants />
    </main>
  );
};

export default Main;
