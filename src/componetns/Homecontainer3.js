import React from "react";
import "./container3.css";
import Container3card from "./Container3card";
import datahome from "../data/datasecond";
const Homecontainer3 = () => {
  return (
    <>
      <div className="homeContainer3">
        {datahome.map((item, index) => {
          return (
            <Container3card
              cardImage={item.imgUrl}
              cardName={item.placeName}
              hallLink={item.halls}
              vendorLink={item.vendors}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Homecontainer3;
