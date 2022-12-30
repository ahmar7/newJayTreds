import React from "react";
import { Belowdots, Upperdots } from "../../../utils/allImgs";
import "./mission.css";
const Mission = () => {
  return (
    <div className="mission-section" id="mission">
      <div className="mission-bg">
        <div className="overlay-content">
          <div className="upper-dots">
            <img src={Upperdots} alt="" />
          </div>
          <div className="lower-dots">
            <img src={Belowdots} alt="" />
          </div>
          <h1 className="mission-head">Our Mission and vision</h1>
          <p className="mission-detail">
            The mission of JayTradz is to provide its members with the
            information and knowledge to confidently understand, converse, and
            participate in the world of Web3.0 and all of its endeavors.
          </p>
          <p className="mission-detail">
            Our vision is that every person will be able to readily, and easily,
            learn more about the financial market of Web3.0....and profit from
            it. The wealth of the world should not be left up to the
            GoldmanSachs of the world, it should be in YOUR hands. The world is
            changing...for the better. Part of that change is We The People
            taking our financial freedom in our own hands
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
