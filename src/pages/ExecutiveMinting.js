import React from "react";
import Top from "../components/Gotop/top";
import Cards from "../components/Minting/ExecutiveMinting/Cards/cards";
import Details from "../components/Minting/ExecutiveMinting/Details/details";

import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const ExecutiveMinting = () => {
  return (
    <div>
      <Top />

      <Navbar />
      <Cards />
      <Details />
      <Footer />
    </div>
  );
};

export default ExecutiveMinting;
