import React from "react";
import Top from "../components/Gotop/top";
import Cards from "../components/Minting/CorporateMinting/Cards/cards";
import Details from "../components/Minting/CorporateMinting/Details/details";

import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const CorporateMinting = () => {
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

export default CorporateMinting;
