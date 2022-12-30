import React from "react";
import Top from "../components/Gotop/top";
import Content from "../components/privacypolicy/Content/content";
import Header from "../components/privacypolicy/Header/header";
import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const PrivacyPolicy = () => {
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

export default PrivacyPolicy;
