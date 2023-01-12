const CuisinePills = ({ cuisines }) => {
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

export default CuisinePills;
