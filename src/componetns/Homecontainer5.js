import React from "react";
import Carousel from "react-material-ui-carousel";
const Homecontainer5 = () => {
  return (
    <>
      <div className="homeContainer5">
        <div className="homeContainer5Left">
          <Carousel animation="slide" className="caroContainer5">
            <img src="./images/webp1.webp" alt="img1" className="carosulweb" />
            <img src="./images/webp2.webp" alt="img2" className="carosulweb" />
            <img src="./images/webp3.webp" alt="img3" className="carosulweb" />
          </Carousel>
        </div>
        <div className="homeContainer5Right">
          <h3 className="container5RightHeading">Your Wedding App & Website</h3>
          <p className="container4RightPara">
            Manage your guests and keep them updated real time. Don’t miss out
            on a single moment captured by everyone & cherish them forever!
            Create a buzz of your wedding much before the wedding day. Let the
            guests get to know each other even before they come to the wedding.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.oyorooms.weddingz.content"
            className="getApp"
          >
            Get the App
          </a>
        </div>
      </div>
    </>
  );
};

export default Homecontainer5;
