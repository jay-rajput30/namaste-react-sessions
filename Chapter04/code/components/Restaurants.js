import RestaurantCard from "./RestaurantCard";

const Restaurants = ({ restName, allRest, setAllRest }) => {
  //   console.log(rest);

  return (
    <section className="all-restaurants">
      {allRest.map((item) => {
        return <RestaurantCard key={item.data.id} {...item.data} />;
      })}
    </section>
  );
};

export default Restaurants;
