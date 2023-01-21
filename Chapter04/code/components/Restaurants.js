import RestaurantCard from "./RestaurantCard";

const Restaurants = ({ restName, filteredRest, setAllRest }) => {
  console.log({ filteredRest });
  return (
    <section className="all-restaurants">
      {filteredRest.map((item) => {
        return <RestaurantCard key={item.data.id} {...item.data} />;
      })}
    </section>
  );
};

export default Restaurants;
