import React from "react";
import {
  ColorHorizonatlDots,
  ColorVerticalDots,
  CopyIcon,
  LeftReward,
  RightReward,
} from "../../../utils/allImgs";
import "./rewardspoint.css";
const Rewardspoint = () => {
  return (
    <div className="rewards-section pt-section" id="rewards">
      <div className="left-reward">
        <img src={LeftReward} alt="" />
      </div>
      <div className="right-reward">
        <img src={RightReward} alt="" />
      </div>
      <div className="point-box">
        <h2 className="point-number">13,568</h2>
        <p>
          REWARD POINTS EARNED <br /> THIS PERIOD
        </p>
      </div>
      <h2 className="wallet-instruction">
        For Memberships Connected to this Wallet
      </h2>
      <div className="wallet-address">
        <p>0as0cis0jcwejf9jwe9dj230032rjd023udx0fjm9ajsfuiergh394ghefn</p>
      </div>
      <div className="point-boxes">
        <div className="indiv-box">
          <div className="border-box">
            <h2>4,000</h2>
            <p>87,250 / Max. 100,000</p>
          </div>
          <h3>MEMBERSHIP REWARD POINTS</h3>
        </div>
        <div className="indiv-box">
          <div className="border-box">
            <h2>5,018</h2>
            <p>36,925 / Max. 100,000</p>
          </div>
          <h3>REFERRAL REWARD POINTS</h3>
        </div>
        <div className="indiv-box">
          <div className="border-box">
            <h2>850</h2>
            <p>2,415 / Max. 100,000</p>
          </div>
          <h3>ROYALTY REFERRAL POINTS</h3>
        </div>
        <div className="indiv-box">
          <div className="border-box">
            <h2>850</h2>
            <p>2,415 / Max. No Cap</p>
          </div>
          <h3>ADMINISTRATIVE POINTS**</h3>
        </div>
      </div>
      <div className="suggestion-line">
        <p>
          ** = Not subject to the Membership Reward Points Cap. (except
          Anniversary Points) Administrative Credits; etc.
        </p>
      </div>
      <button className="copyBtn">
        <img src={CopyIcon} alt="" /> Copy Your Referral Link
      </button>
      <div className="divider"></div>
      <div className="background-box">
        <div className="bx">
          <div className="bx-bg">
            <h2>124,175</h2>
          </div>
          <h3>Total Points Earned</h3>
        </div>
        <div className="bx">
          <div className="bx-bg">
            <h2>124,175</h2>
          </div>
          <h3>Total Points Earned</h3>
        </div>
      </div>
      <div className="suggestion-line tp">
        <p>Reward Points Earning/Disbursement History</p>
      </div>
      <div className="horizontal-dots">
        <img src={ColorHorizonatlDots} alt="" />
      </div>
      <div className="vertical-dots">
        <img src={ColorVerticalDots} alt="" />
      </div>
    </div>
  );
};

export default Rewardspoint;
