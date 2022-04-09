import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Multicarousel from "./Multicarousel";
const Weddingphotos = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="weddingPhotos">
        <h3 className="weddingPhotosHead">Wedding Photos</h3>
        <Carousel responsive={responsive} infinite={true}>
          <Multicarousel
            multiItemImg="https://d3n56ro59bjwa6.cloudfront.net/img/rwh/mehendi04.jpg"
            MultiItemHead="Mehandi"
          />
          <Multicarousel
            multiItemImg="https://d3n56ro59bjwa6.cloudfront.net/img/rwh/makeup04.jpg"
            MultiItemHead="MakeUp"
          />
          <Multicarousel
            multiItemImg="https://d3n56ro59bjwa6.cloudfront.net/img/rwh/destination03.jpg"
            MultiItemHead="Photography"
          />
          <Multicarousel
            multiItemImg="https://d3n56ro59bjwa6.cloudfront.net/img/rwh/photography03.jpg"
            MultiItemHead="PhotoGraphy"
          />
          <Multicarousel
            multiItemImg="https://d3n56ro59bjwa6.cloudfront.net/img/rwh/decor-03.jpg"
            MultiItemHead="Decor"
          />
          <Multicarousel
            multiItemImg="https://d3n56ro59bjwa6.cloudfront.net/img/rwh/bridalwear02.jpg"
            MultiItemHead="Lahanga"
          />
        </Carousel>
      </div>
    </>
  );
};

export default Weddingphotos;
