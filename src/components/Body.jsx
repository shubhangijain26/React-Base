import { RESTAURANT_DATA } from "../mocks/data";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

const resList = RESTAURANT_DATA;

export const Body = () => {
  const [restrauntList, setRestrauntList] = useState(resList);

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
        {restrauntList.map((restraunt) => (
          <RestrauntCard key={restraunt.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};
