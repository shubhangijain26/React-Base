import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const RestrauntDetails = () => {
  const params = useParams();
  const resId = params.resId;

  // object destructing way to write it
  // const { resId } = useParams();
  const LAT = "12.914345328503295";
  const LNG = "77.69390984307906";
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    let data = await fetch(
      `https://foodfire.onrender.com/api/menu?lat=${LAT}&lng=${LNG}&restaurantId=${resId}`,
    );
    const dynamicData = await data.json;
    console.log(dynamicData);
  };
  return (
    <div>
      <h1>Menu</h1>
      {}
    </div>
  );
};

export default RestrauntDetails;
