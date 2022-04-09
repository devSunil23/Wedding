import React from "react";
import SocialCarditem from "./SocialCarditem";

const Socialcard = () => {
  return (
    <>
      <div className="socialCard">
        <SocialCarditem
          logo1="https://d3n56ro59bjwa6.cloudfront.net/img/weddingzlogo.png"
          logo2="./images/insta.png"
          link="@wedding.in"
          para1="On Instagram"
          para2="Follow"
          bigImg="https://d3n56ro59bjwa6.cloudfront.net/img/social/sc-insta.jpg"
          socialReactionBlue="reactionBlue"
        />
        <SocialCarditem
          logo1="https://d3n56ro59bjwa6.cloudfront.net/img/weddingzlogo.png"
          logo2="./images/facebook.webp"
          link="@wedding.in"
          para1="On Facebook"
          para2="Like 518k"
          bigImg="https://d3n56ro59bjwa6.cloudfront.net/img/social/sc-fb.jpg"
          socialReactionBlue="reactionBlue"
        />
        <SocialCarditem
          logo1="https://d3n56ro59bjwa6.cloudfront.net/img/weddingzlogo.png"
          logo2="./images/printrest.png"
          link="@wedding.in"
          para1="On Pinterest"
          para2="Follow"
          bigImg="https://d3n56ro59bjwa6.cloudfront.net/img/social/sc-pint.jpg"
          socialReactionBlue="reactionRed"
        />
        <SocialCarditem
          logo1="https://d3n56ro59bjwa6.cloudfront.net/img/weddingzlogo.png"
          logo2="./images/snapchat.png"
          link="@wedding.in"
          para1="On Snapchat"
          para2="Scan Code To Follow"
          bigImg="https://d3n56ro59bjwa6.cloudfront.net/img/social/sc-snap.jpg"
          socialReactionBlue="reactionRed"
        />
      </div>
      <div className="cardDiscount">
        <div className="cardDiscountLeft">
          <i class="fa-solid fa-phone-volume call"></i>
          <p>24HRS HELPLINE, EVERYDAY</p>
        </div>
        <div className="cardDiscountRight">
          <i class="fa-solid fa-percent"></i>
          <p>DISCOUNT UPTO 30%</p>
        </div>
      </div>
    </>
  );
};

export default Socialcard;
