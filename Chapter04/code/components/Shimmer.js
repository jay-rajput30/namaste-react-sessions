const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from(12)
        .fill("")
        .map((item) => {
          return (
            <div className="shimmer">
              <div className="shimmer-img"></div>
              <div className="shimmer-header"></div>
              <div className="shimmer-pills"></div>
              <div className=""></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
