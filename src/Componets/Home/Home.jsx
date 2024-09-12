import React from "react";
import Header from "../../CommadItem/Header";
import FlagsBar from "./FlagsBar";
import Hero from "./Hero";
import Player from "./Player";
import TeamStap from "./TeamStap";
import Footer from "../../CommadItem/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FlagsBar />

      <Player />
      <TeamStap />
      <Footer />
    </div>
  );
}

export default Home;
