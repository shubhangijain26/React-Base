import React from "react";
import ReactDOM from "react-dom/client";
import { FaSearch } from "react-icons/fa";
import "./index.css";
import { RESTAURANT_DATA } from "./mocks/data";

const logoImg = new URL("./assets/culinarylogo.jpg", import.meta.url);
const resList = RESTAURANT_DATA;
const Search = () => {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        id="search"
        type="text"
        placeholder="Search for restaurants, cuisines or dishes"
      ></input>
    </div>
  );
};

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
const Header = () => {
  return (
    <div className="header">
      <div className="sub-header">
        <img className="logo" src={logoImg} alt="Logo"></img>
        <Search />
      </div>
      <ul className="nav-items">
        <li>Cart</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="restraunt-list">
        {resList.map((restraunt) => (
          <RestrauntCard key={restraunt.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => (
  <div className="main-container">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
