import React from "react";
import Hero from "./hero/Hero";
import Recent from "./recent/Recent";
import Team from "./team/Team";

const Home = () => {
  return (
    <>
      <Recent />
      <Hero />
      <Team />
    </>
  );
};

export default Home;
