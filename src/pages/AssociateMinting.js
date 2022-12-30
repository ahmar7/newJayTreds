import React from "react";
import Top from "../components/Gotop/top";
import Cards from "../components/Minting/AssociateMinting/Cards/cards";
import Details from "../components/Minting/AssociateMinting/Details/details";
import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const AssociateMinting = () => {
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

export default AssociateMinting;
