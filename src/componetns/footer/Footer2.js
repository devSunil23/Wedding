import React from "react";
import "./footer.css";
import Footer2div from "./Footer2div";
const Footer2 = () => {
  return (
    <>
      <div className="footer2">
        <div className="footer2Inner">
          <Footer2div venueName="Mumbai" />
          <Footer2div venueName="Delhi NCR" />
          <Footer2div venueName="Bangalore" />
          <Footer2div venueName="Jaipur" />
          <Footer2div venueName="Pune" />
          <Footer2div venueName="Destination Weddings" />
        </div>
      </div>
    </>
  );
};

export default Footer2;
