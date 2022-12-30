import React from "react";
import Content from "../components/Disclaimer/Content/content";
import Header from "../components/Disclaimer/Header/header";
import Top from "../components/Gotop/top";
import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const Disclaimer = () => {
  return (
    <div>
      <Top />
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Disclaimer;
