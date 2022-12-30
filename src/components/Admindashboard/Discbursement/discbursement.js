import React from "react";
import "./discbursement.css";
import {
  ColorHorizonatlDots,
  ColorVerticalDots,
  CopyIcon,
  LeftReward,
  RightReward,
} from "../../../utils/allImgs";
const Discbursement = () => {
  return (
    <div className="rewards-section pt-section dics" id="rewards">
      <div className="left-reward">
        <img src={LeftReward} alt="" />
      </div>
      <div className="right-reward">
        <img src={RightReward} alt="" />
      </div>
      <div className="disc-box">
        <h2 className="point-number">13,568</h2>
        <p>4,100 (from previous period)</p>
      </div>

      <p className="disc-para">
        DISBURSEMENTS FOR THIS <br /> PERIOD
      </p>

      <div className="point-boxes disc-bx">
        <div className="indiv-box indiv-disc">
          <div className="border-box disc-border">
            <h2>1,450,000</h2>
          </div>
          <h3>
            claimed <br /> (Current period)
          </h3>
        </div>
        <div className="indiv-box indiv-disc">
          <div className="border-box disc-border">
            <h2>1,450,000</h2>
          </div>
          <h3>
            unclaimed <br /> (Current period)
          </h3>
        </div>
      </div>
      <div className="italic-point">
        <p>total Reward Points Distributed:</p>
      </div>
      <div className="point-boxes disc-bx three-bx">
        <div className="indiv-box indiv-disc">
          <div className="border-box disc-border">
            <h2>4,382,650</h2>
          </div>
          <h3>
            Quarter <br /> (Past 90 days)
          </h3>
        </div>
        <div className="indiv-box indiv-disc">
          <div className="border-box disc-border">
            <h2>2,450,000</h2>
          </div>
          <h3>
            year <br /> (This Curent Year)
          </h3>
        </div>
        <div className="indiv-box indiv-disc">
          <div className="border-box disc-border">
            <h2>32,205,500</h2>
          </div>
          <h3>
            total <br /> (From Begining)
          </h3>
        </div>
      </div>

      <div className="disc-left">
        <img src={ColorVerticalDots} alt="" />
      </div>
      <div className="disc-right">
        <img src={ColorVerticalDots} alt="" />
      </div>
    </div>
  );
};

export default Discbursement;
