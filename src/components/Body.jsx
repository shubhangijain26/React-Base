import { RESTAURANT_DATA } from "../mocks/data";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const resList = RESTAURANT_DATA;

export const Body = () => {
  console.log("Body rendered");
  const [restrauntList, setRestrauntList] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = () => {
    const data = fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    );
    // const json = data.json();
    // console.log(json);

    data
      .then((res) => console.log(JSON.stringify(res)))
      .catch((err) => console.log(err));
    setTimeout(() => {
      setRestrauntList(resList);
    }, 1000);
  };

  return (
    <div className="body">
      <div className="filters">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restrauntList.filter(
              (res) => res.rating > 4.0,
            );
            setRestrauntList(filteredList);
          }}
        >
          Filter
        </button>
      </div>
      <div className="restraunt-list">
        {restrauntList.length === 0 ? (
          <ShimmerUI />
        ) : (
          restrauntList.map((restraunt) => (
            <RestrauntCard key={restraunt.id} resData={restraunt} />
          ))
        )}
      </div>
    </div>
  );
};
