import { RESTAURANT_DATA } from "../mocks/data";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router";

const resList = RESTAURANT_DATA;

export const Body = () => {
  console.log("Body rendered");
  const [restrauntList, setRestrauntList] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.914345328503295&lng=77.69390984307906&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const dynamicData = await data.json();
    const restraunts =
      dynamicData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restraunts);
    setRestrauntList(restraunts);
    // data
    //   .then((res) => {
    //     console.log(JSON.stringify(res));
    //     setRestrauntList(res);
    //   })
    //   .catch((err) => console.log(err));
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
            <Link
              to={"/restraunt/" + restraunt.info.id}
              key={restraunt.info.id}
            >
              <RestrauntCard resData={restraunt.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
