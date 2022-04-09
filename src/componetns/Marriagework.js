import React from "react";

const Marriagework = ({ cardlogo, cardheading, cardpara, imglogo }) => {
  return (
    <>
      <div className="marriageCard">
        <div className="marriageCardLogo">
          {cardlogo ? (
            <i class={cardlogo} style={{ fontSize: 30, color: "red" }}></i>
          ) : (
            <img src={imglogo} alt="venue" className="cardLogo"></img>
          )}
        </div>
        <p className="marriageCardHead">{cardheading}</p>
        <p className="marriageCardPara">{cardpara}</p>
      </div>
    </>
  );
};

export default Marriagework;
