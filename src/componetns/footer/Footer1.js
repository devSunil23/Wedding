import React from "react";
import "./footer.css";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
const Footer1 = () => {
  return (
    <>
      <div className="footer1">
        <div className="footer1Inner">
          <p className="footer1Para1">Plan A Wedding In India</p>
          <div className="footerInner1">
            <div className="footerInnerLeft">
              <div className="footerInnerLeft1">
                <i class="fa-solid fa-phone"></i>
                <span className="callus">CALL US:</span>
                <span className="number">76-66-77-88-99</span>
              </div>
              <p className="hoursFacility">24-hour helpline</p>
              <p className="or">or</p>
              <p className="parafooter3">
                <span>
                  <a href="" className="parafooterspan1">
                    HAVE US CALL YOU
                  </a>
                </span>
                <span className="parafooterspan2">FOR UPTO 30%</span>
              </p>
              <p className="footer1Discount">DISCOUNT</p>
            </div>
            <div className="footerInnerRight">
              <ul>
                <li>India's Largest Wedding Company.</li>
                <li>Find, Compare And Book Wedding Venues And Services.</li>
                <li>Best Prices Guaranteed.</li>
                <li>Find Inspiration, Ideas And Insights For Your Wedding.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
      <Footer3 />
    </>
  );
};

export default Footer1;
