import React from "react";
import Top from "../components/Gotop/top";
import Cards from "../components/Minting/PresidentMinting/Cards/cards";
import Details from "../components/Minting/PresidentMinting/Details/details";

import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const PresidentMinting = () => {
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

export default PresidentMinting;
