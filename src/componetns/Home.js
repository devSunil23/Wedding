import React from "react";
import Client from "./Client";
import Homecontainer2 from "./Homecontainer2";
import Homecontainer3 from "./Homecontainer3";
import HomeContainer4 from "./HomeContainer4";
import Homecontainer5 from "./Homecontainer5";
import Homecontent from "./Homecontent";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Socialcard from "./Socialcard";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Navbar1 />
        <Navbar2 />
        <Homecontent />
      </div>
      <div className="homeContainer2">
        <Homecontainer2 />
      </div>
      <Homecontainer3 />
      <HomeContainer4 />
      <Homecontainer5 />
      <Client />
      <Socialcard />
    </>
  );
};

export default Home;
