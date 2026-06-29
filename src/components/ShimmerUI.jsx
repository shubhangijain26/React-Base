export const ShimmerUI = () => {
  return (
    <div className="restraunt-list">
      {[...Array(9)].map((e, i) => (
        <div key={i} className="card shimmer-body">
          <img className="card-img shimmer-card"></img>
          <div className="card-img-body">
            <h3 className="card-title shimmer-card"></h3>
            <h4
              style={{ fontWeight: "700", fontSize: "18px" }}
              className="shimmer-card"
            ></h4>
          </div>
          <div className="card-body">
            <h4 className="shimmer-text"> </h4>
            <h4 className="shimmer-text"> </h4>
          </div>
          <div className="card-body">
            <h4 className="card-title shimmer-text"> </h4>
            <h4 className="shimmer-text"> </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;
