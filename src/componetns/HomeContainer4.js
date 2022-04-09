import React from "react";
import Marriagework from "./Marriagework";
import Weddingphotos from "./Weddingphotos";
const HomeContainer4 = () => {
  return (
    <>
      <div className="homeContainer4">
        <img src="./images/magweb.webp" alt="magweb" className="magwebp" />
        <p className="container4Para">Latest Blogs On Weddings</p>
        <a href="https://weddingz.in/blog/" className="seeAll">
          See all <i class="fa-solid fa-greater-than seeAllgreater"></i>
        </a>
        <p className="container4Para">Real Weddings</p>
        <a href="https://weddingz.in/real-weddings/" className="seeAll">
          See all <i class="fa-solid fa-greater-than seeAllgreater"></i>
        </a>
        <p className="container4Para">How its Works</p>
        <div className="marriageRoadMap">
          <Marriagework
            cardlogo="fa-solid fa-book"
            cardheading="Discover & Shortlist Venue"
            cardpara="Input your requirements & see our recommendations & prices."
          />
          <i class="fa-solid fa-greater-than mapgreater"></i>
          <Marriagework
            cardlogo="fa-solid fa-handshake-simple"
            cardheading="Guided Visits"
            cardpara="Visit venues on your own or with our venue expert."
          />
          <i class="fa-solid fa-greater-than mapgreater"></i>
          <Marriagework
            imglogo="./venuebook.png"
            cardheading="Book Venue"
            cardpara="Get final quotes (upto 30% off) and book your venue."
          />
          <i class="fa-solid fa-greater-than mapgreater"></i>
          <Marriagework
            imglogo="./images/vendor.png"
            cardheading="Book Vendors"
            cardpara="Meet our trusted vendors and book them at your ease."
          />
        </div>
        <Weddingphotos />
      </div>
    </>
  );
};

export default HomeContainer4;
