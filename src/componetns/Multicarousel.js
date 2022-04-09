import React from "react";

const Multicarousel = ({ multiItemImg, MultiItemHead }) => {
  return (
    <>
      <div
        className="multiCarouelCard "
        style={{
          backgroundImage: `url(${multiItemImg})`,
          width: 300,
          height: 300,
          backgroundPosition: " center",
          backgroundSize: "cover",
        }}
      >
        <a
          href="https://weddingz.in/photos/wedding-photography-tips-poses/"
          className="multiItemHead"
        >
          {MultiItemHead}
        </a>
      </div>
    </>
  );
};

export default Multicarousel;
