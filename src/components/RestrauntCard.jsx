const RestrauntCard = (props) => {
  const { resData } = props;
  return (
    <div className="card">
      <img
        className="card-img"
        src={
          "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto" +
          resData.mediaFiles[0]?.url
        }
        alt="Restraunt"
      ></img>
      <div className="card-img-body">
        <h3 className="card-title"> {resData.name} </h3>
        <h4 style={{ fontWeight: "700", fontSize: "18px" }}>
          {resData.rating}
        </h4>
      </div>
      <div className="card-body">
        <h4> {resData.cuisines.join(" •  ")} </h4>
        <h4> {resData.costForTwo} </h4>
      </div>
      <div className="card-body">
        <h4 className="card-title">{resData.locationInfo.formattedAddress} </h4>
        <h4> {resData.locationInfo.distanceString} </h4>
      </div>
    </div>
  );
};

export default RestrauntCard;