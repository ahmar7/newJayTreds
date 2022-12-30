import React from "react";
import Discbursement from "../components/Admindashboard/Discbursement/discbursement";
import Header from "../components/Admindashboard/Header/header";
import Notification from "../components/Admindashboard/Notifications/notification";
import Top from "../components/Gotop/top";
import Activemembership from "../components/Memberdashboard/Activemembership/activemembership";
import Footer from "../layout/Footer/footer";
import Navbar from "../layout/NavBar/navbar";

const AdminDashboard = () => {
  return (
    <div>
      <Top />
      <Navbar />
      <Header />
      <Discbursement />
      <Notification />
      <Activemembership />
      <Footer />
    </div>
  );
};

export default AdminDashboard;
