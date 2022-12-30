import React from "react";
import Details from "../components/Home/Program/program";
import Header from "../components/Home/Header/header";
import Membership from "../components/Home/Membership/membership";
import Mission from "../components/Home/Mission/mission";
import Benefits from "../components/Home/Benefits/benefits";
import Rewards from "../components/Home/Rewards/rewards";
import Faq from "../components/Home/Faq/Faq";
import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";
import Top from "../components/Gotop/top";

const Homee = () => {
  return (
    <div>
      <Top />

      <Navbar />
      <Header />
      <Details />
      <Mission />
      <Membership />
      <Rewards />
      <Benefits />
      <Faq />
      <Footer />
    </div>
  );
};

export default Homee;
