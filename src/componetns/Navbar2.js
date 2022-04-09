import React from "react";
import { Badge } from "react-bootstrap";
const Navbar2 = () => {
  return (
    <>
      <div className="navBar2">
        <div className="navbar2Left">
          <ul>
            <li>
              <i className="fa-solid fa-house-chimney"></i>
            </li>
            <li>Venus</li>
            <li>Vendors</li>
            <li>Blog</li>
            <li>Real Weddings</li>
            <li>Photos</li>
            <li>
              <p> Deals</p>
            </li>
            <li>Testimonials</li>
            <li>Why Weddingz</li>
          </ul>
        </div>
        <div className="navbar2Right">
          <i class="fa-solid fa-phone"></i>
          <p>Call</p>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
