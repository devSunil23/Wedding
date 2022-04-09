import React from "react";

const SocialCarditem = ({
  logo1,
  logo2,
  link,
  para1,
  para2,
  bigImg,
  socialReactionBlue,
}) => {
  return (
    <>
      <div className="socialCardItem">
        <div className="socialCard1">
          <div className="socialCard1Left">
            <img src={logo1} alt="img" className="logo1" />
            <div className="socialCard1LeftRight">
              <a href="">{link}</a>
              <p>{para1}</p>
            </div>
          </div>
          <img src={logo2} alt="img" className="logo2" />
        </div>
        <div className="socialCard2">
          <img src={bigImg} alt="img" className="bigImg" />
          <p className={socialReactionBlue}>{para2}</p>
        </div>
      </div>
    </>
  );
};

export default SocialCarditem;
