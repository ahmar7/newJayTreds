import React from "react";
import Top from "../components/Gotop/top";
import Header from "../components/Memberdashboard/Header/header";
import RedeemPoints from "../components/Memberdashboard/RedeemPoints/redeemPoints";
import Rewardspoint from "../components/Memberdashboard/RewardsPoint/rewardspoint";
import Transactionhistory from "../components/Memberdashboard/TransactionHistory/transactionhistory";
import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const MemberDashboard = () => {
  return (
    <div>
      <Top />

      <Navbar />
      <Header />
      <Rewardspoint />
      <RedeemPoints />
      <Transactionhistory />
      <Footer />
    </div>
  );
};

export default MemberDashboard;
