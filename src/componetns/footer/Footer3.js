import React from "react";
import "./footer.css";
const Footer3 = () => {
  return (
    <>
      <div className="footer3">
        <div className="footer3First">
          <div className="footer3FirstLeft">
            <p>GET INSPIRED</p>
            <div className="footerParaLink">
              <a href="">Photos</a>
              <a href="">Real Weddings</a>
              <a href="">Blog</a>
            </div>
          </div>
          <div className="footer3FirstRight">
            <p className="footer3Wedding">
              <span className="footer3span1">Wedding</span>
              <span className="footer3span2">z</span>
              <span className="footer3span3">.in</span>
            </p>
            <p className="footer3Call">call our 24-hour helpline</p>
            <div className="footer3ContactUs">
              <div className="footer3ContactUs1">
                <i class="fa-solid fa-phone"></i>
                <span>76-66-77-88-99</span>
              </div>
              <div className="footer3ContactUs1">
                <i class="fa-solid fa-envelope"></i>
                <span>info@weddingz.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer3;
