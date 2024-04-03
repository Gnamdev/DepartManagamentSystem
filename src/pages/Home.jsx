import React from "react";

import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
