import React from "react";
import { adeverData } from "../data/datfirst";
const Homecontainer2 = () => {
  return (
    <>
      <div className="homeContent2">
        <a
          href="https://script.google.com/macros/s/AKfycbwXIwdB9svxld4VRHZ4NlcuEu_6t4gQRgnEC0ksNdRRI6nIZthlNEqKSWl4DHGzkGyt/exec"
          target="_blank"
        >
          <div className="homeContentpart1">
            {adeverData.map((item, index) => {
              return (
                <>
                  <span>{item.para}</span>
                  <span>{item.pipe}</span>
                </>
              );
            })}
          </div>
        </a>
        <div className="homeContainerpart2">
          <p className="part2Header1">
            Hassle Free Planning & Booking at Our Guaranteed Best Prices.
          </p>
          <p className="part2Para">Take our Price Challenge</p>
          <ul>
            <li className="noBullet">10,000+ Events Organized till Date</li>
            <li>
              <i class="fa-solid fa-circle"></i>
              Present in 25 Cities
            </li>
            <li>
              <i class="fa-solid fa-circle"></i>Over 20,000+ Wedding Venues &
              Vendors
            </li>
          </ul>
          <h3 className="part2Heading2">Browse Wedding Venues and Vendors</h3>
          <p className="discount">
            Get upto <span className="discountSpan">30% off</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Homecontainer2;
