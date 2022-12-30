import React, { useState } from "react";
import {
  ArrowDown,
  LeftReward,
  RightReward,
  TickSquare,
} from "../../../utils/allImgs";
import "./rewards.css";
const Rewards = () => {
  const [slide1, setSlide1] = useState(false);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const [slide5, setSlide5] = useState(false);
  const [slide6, setSlide6] = useState(false);
  let sliding1 = () => {
    if (slide1 === true) {
      setSlide1(false);
    } else {
      setSlide1(true);
    }
  };
  let sliding2 = () => {
    if (slide2 === true) {
      setSlide2(false);
    } else {
      setSlide2(true);
    }
  };
  let sliding3 = () => {
    if (slide3 === true) {
      setSlide3(false);
    } else setSlide3(true);
  };

  let sliding4 = () => {
    if (slide4 === true) {
      setSlide4(false);
    } else {
      setSlide4(true);
    }
  };
  let sliding5 = () => {
    if (slide5 === true) {
      setSlide5(false);
    } else {
      setSlide5(true);
    }
  };
  let sliding6 = () => {
    if (slide6 === true) {
      setSlide6(false);
    } else {
      setSlide6(true);
    }
  };
  return (
    <div className="rewards-section" id="rewards">
      <div className="left-reward">
        <img src={LeftReward} alt="" />
      </div>
      <div className="right-reward">
        <img src={RightReward} alt="" />
      </div>
      <h1 className="section-heading">Rewards</h1>
      <p className="section-detail">
        As a member, you will earn MONTHLY reward points for your participation.
        These points are distributed on a Monthly, Quarterly, and Semi-Annual
        basis. The reward points are a percentage of your membership package
        with our program; and can reach up to 4%, 6% and 8% per month,
        respectively. (Ex: A Presidential membership will earn up to 8k reward
        points per month, given out quarterly...approximately 24,000 reward
        points every quarter.)
      </p>
      <div className="sliders">
        <div className={slide1 ? "main-slide no-border" : "main-slide"}>
          <div className="section-slider" onClick={sliding1}>
            <div className="left-head">
              <img src={TickSquare} alt="" />
              <h3>Commencement: </h3>
            </div>
            <div className={slide1 ? "right-arrow rotate" : "right-arrow"}>
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <div className={slide1 ? "slider-para  " : "hide-it slider-para "}>
            <p>
              Members will begin earning Reward Points either on the 1st or 15th
              of the month, depending on when they purchased their membership.
              (Ex: If you purchase your membership on the 8th of the month, you
              will begin earning Reward Points on the 15th. And if you purchase
              your membership on the 16th, then you will start earning Reward
              Points on the 1st of the following month.)
            </p>
          </div>
        </div>
        <div className={slide2 ? "main-slide no-border" : "main-slide"}>
          <div className="section-slider" onClick={sliding2}>
            <div className="left-head">
              <img src={TickSquare} alt="" />
              <h3>Earning Reward Points: </h3>
            </div>
            <div className={slide2 ? "right-arrow rotate" : "right-arrow"}>
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <div className={slide2 ? "slider-para  " : "hide-it slider-para "}>
            <p>
              Members earn their Reward Points by maintaining their membership
              and participating in the JayTradz program. Rewards Points are
              earned every month and disbursed on a Monthly, Quarterly, and
              Semi-Annual basis. (Ex: An Associate membership - with a monthly
              disbursement, will earn up to 400 reward points per month, given
              out every month.)
            </p>
          </div>
        </div>
        <div className={slide3 ? "main-slide no-border" : "main-slide"}>
          <div className="section-slider" onClick={sliding3}>
            <div className="left-head">
              <img src={TickSquare} alt="" />
              <h3>Graduation Membership Bonus </h3>
            </div>
            <div className={slide3 ? "right-arrow rotate" : "right-arrow"}>
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <div className={slide3 ? "slider-para  " : "hide-it slider-para "}>
            <p>
              For those Members that complete a full cycle on a membership
              level, you shall be awarded a Graduation Bonus of 100% of your
              membership package value in Reward Points. (Ex: A Corporate member
              will earn 250,000 Reward Points upon completion of their cycle).
            </p>
          </div>
        </div>
        <div className={slide4 ? "main-slide no-border" : "main-slide"}>
          <div className="section-slider" onClick={sliding4}>
            <div className="left-head">
              <img src={TickSquare} alt="" />
              <h3>Maximum Membership Reward Points:</h3>
            </div>
            <div className={slide4 ? "right-arrow rotate" : "right-arrow"}>
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <div className={slide4 ? "slider-para  " : "hide-it slider-para "}>
            <p>
              Members are permitted to earn a maximum in Reward Points that
              equal to 100% of your Member Package. (Ex: An Executive member can
              earn a maximum of 50,000 Reward Points). Once you reach your
              maximum Reward Points, then you must either upgrade your existing
              membership, or purchase a new membership. No additional Membership
              Reward Points will be earned beyond this 100% cap, with the
              exception of the Direct Referral Bonus increase below.
            </p>
          </div>
        </div>
        <div className={slide5 ? "main-slide no-border" : "main-slide"}>
          <div className="section-slider" onClick={sliding5}>
            <div className="left-head">
              <img src={TickSquare} alt="" />
              <h3>Direct Referral Bonus: </h3>
            </div>
            <div className={slide5 ? "right-arrow rotate" : "right-arrow"}>
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <div className={slide5 ? "slider-para  " : "hide-it slider-para "}>
            <p>
              Members will receive a one-time 5% bonus to any new member that
              they “directly” refer to the JayTradz program that then purchases
              a package. (Ex: Member A refers Mr. X to the program, and Mr. X
              purchases a Chairman membership; then Member A will earn 5,000
              Reward Points for this referral.) This “direct” referral has a
              limit of 100% of your Member Package level on the number of direct
              referrals that can be made. This bonus raises your Maximum
              Membership Reward Points CAP to 300% for the referring Member’s
              membership package. There are NO secondary referral rewards
              (meaning you earn NO points from a new member referred by Mr. X).
            </p>
          </div>
        </div>
        <div className={slide6 ? "main-slide no-border" : "main-slide"}>
          <div className="section-slider" onClick={sliding6}>
            <div className="left-head">
              <img src={TickSquare} alt="" />
              <h3>Royalty Referral Bonus: </h3>
            </div>
            <div className={slide6 ? "right-arrow rotate" : "right-arrow"}>
              <img src={ArrowDown} alt="" />
            </div>
          </div>
          <div className={slide6 ? "slider-para  " : "hide-it slider-para "}>
            <p>
              For those Members that you “directly” refer, as defined above, you
              will receive a 1% Royalty Referral Bonus based on the membership
              packages purchased by those that you referred. And you will earn
              this 1% every month, for 12-months, from ALL of the “direct”
              referrals, as long as those referred members maintain their
              Membership package. This 1% will be distributed monthly. (Ex: You
              referred Mr. X, whom purchased a Chairman membership, then you
              will earn 1,000 points per month, for 12 months, as long as Mr. X
              maintains his membership.). Coupled with the Direct Referral
              above, totals 17% from any and all Direct Referrals. Not Subject
              to the Maximum Membership Rewards Points cap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
