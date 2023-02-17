import React from "react";
import Discover from "./Discover";
import Discover2 from "./discover2";
import Hero from "./Hero";
import New from "./New";
import Start from "./Start";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Discover />
      <br />
      <br />
      <br />
      <New />
      <Discover2 />
      <Start />
    </div>
  );
};

export default HomeScreen;
