import React from "react";
import Top from "../components/Gotop/top";
import Content from "../components/terms/Content/content";
import Header from "../components/terms/Header/header";
import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const Terms = () => {
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

export default Terms;
