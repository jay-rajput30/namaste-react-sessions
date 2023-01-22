import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const Restaurants = ({ restName, filteredRest, setAllRest }) => {
  return (
    <section className="all-restaurants">
      {filteredRest.map((item) => {
        return (
          <Link key={item.data.id} to={`restaurant/${item.data.id}`}>
            <RestaurantCard {...item.data} />
          </Link>
        );
      })}
    </section>
  );
};

export default Restaurants;
