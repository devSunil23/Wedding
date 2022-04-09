import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
const Container3card = ({ cardImage, cardName, hallLink, vendorLink }) => {
  return (
    <>
      <ScrollAnimation
        animateIn="bounceInRight"
        className="scrollAnimation"
        duration={1}
      >
        <div className="container3card">
          <img src={cardImage} alt={cardName} className="placeImgcontainer3" />
          <h3 className="placeNameContainer3">{cardName}</h3>
          <div className="hollVendors">
            <a
              href="https://weddingz.in/banquet-halls/mumbai/all/"
              className="banquetHolls"
            >
              {hallLink}
            </a>
            <a href="https://weddingz.in/mumbai/vendors/" className="vendors">
              {vendorLink}
            </a>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Container3card;
