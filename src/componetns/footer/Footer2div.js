import React from "react";

const Footer2div = ({ venueName }) => {
  return (
    <>
      <div className="footer2div">
        <p className="venueName">{venueName}</p>
        <div className="footer2div1">
          <p className="venues">VENUES</p>
          <ul>
            <li>
              {" "}
              <a href="">Party Halls in Mumbai</a>
            </li>
            <li>
              {" "}
              <a href="">Marriage Halls in Mumbai</a>
            </li>
            <li>
              <a href="">Banquet Halls in Mumbai</a>
            </li>
            <li>
              <a href="">All Venues in Mumbai</a>
            </li>
            <li>
              <a href="">Cocktail Venues in Mumbai</a>
            </li>
            <li>
              {" "}
              <a href="">Birthday Party Halls in Mumbai</a>
            </li>
          </ul>
        </div>
        <div className="footer2div2">
          <p className="vendors">VENDORS</p>
          <ul>
            <li>
              <a href="">Photographers</a>
            </li>
            <li>
              <a href="">Makeup Artists</a>
            </li>
            <li>
              <a href="">Mehendi Artists</a>
            </li>
            <li>
              <a href="">All Vendors</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer2div;
