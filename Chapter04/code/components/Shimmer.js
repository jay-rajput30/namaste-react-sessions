const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((item, idx) => (
          <div key={idx} className="shimmer">
            <div className="shimmer-img"></div>
            <div className="shimmer-header">&nbsp;</div>
            <div className="shimmer-pills"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
