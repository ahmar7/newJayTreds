import React from "react";
import {
  Chairman,
  Detail2,
  DiscBtn,
  LeftPolly,
  RightPolly,
} from "../../../../utils/allImgs";
const Details = () => {
  return (
    <div className="minting-detail">
      <div className="bottom-left">
        <img src={LeftPolly} alt="" />
      </div>
      <div className="bottom-right">
        <img src={RightPolly} alt="" />
      </div>
      <div className="minting-benefits">
        <div className="benefit-left">
          <div className="upper-sec">
            <h1>Chairman</h1>
            <p className="sec-para">
              As a member, you will earn MONTHLY reward points for your
              participation. These points are distributed on a Monthly,
              Quarterly, and Semi-Annual basis. The reward points are a
              percentage of your membership package with our program; and can
              reach up to 4%, 6% and 8% per month, respectively.
            </p>
          </div>
          <div className="middle-sec">
            <h3>Benefits</h3>
            <ul className="sec-ul">
              <li>* Access to Resource Center & Educational Packs</li>
              <li>* Invitation to Private Discord Community</li>
              <li>* Access to Standard Videos & Podcast Content</li>
              <li>* Exclusive Crypto-Trading Media Content</li>
              <li>* Access to Web3.0 Trading News </li>
              <li>* Private Paper Trading Tutorial</li>
              <li>* Scheduled One-on-One Meetings with JayTradz Team/Staff</li>
            </ul>
          </div>
          <div className="middle-sec">
            <h3>MEMBERSHIP REFUND</h3>
            <p className="sec-para">
              ALL of our membership packages are refundable within the first 90
              days, minus a refund fee for setup and educational services
              already rendered. You may request a refund at any time during this
              90-day period, subject to the following:
            </p>

            <p className="sec-para top-mer">
              ≤ 90 days – 35% Refund Fee (Monthly & Quarterly Disbursements) ≤
              90 days – 20% Refund Fee & Forfeiture of all Reward Points Earned
              (Semi-Annual Disbursements)
            </p>
          </div>
          <div className="join-btn">
            <a href="https://discord.gg/Rh6j6uE3qB" target="_blank">
              <button className="copyBtn">
                <img src={DiscBtn} alt="" />
                Join Our Discord
              </button>
            </a>
          </div>
        </div>
        <div className="benefit-right">
          <img src={Chairman} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Details;
