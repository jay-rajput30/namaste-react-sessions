import RestaurantCard from "./RestaurantCard";

const Restaurants = ({ restName, allRest, setAllRest }) => {
  //   console.log(rest);
  const filterData = (searchText, allRest, setAllRest) => {
    let resData = allRest.filter((item) =>
      item.data.name.toLowerCase().includes(searchText)
    );
    setAllRest(resData);
    return resData;
  };
  let newData = filterData(restName, allRest, setAllRest);

  return (
    <section className="all-restaurants">
      {newData.map((item) => {
        return <RestaurantCard key={item.data.id} {...item.data} />;
      })}
    </section>
  );
};

export default Restaurants;
