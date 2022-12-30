import React from "react";
import {
  Detail1,
  Detail2,
  Detail3,
  Detail4,
  Detail5,
  LeftPolly,
  RightPolly,
} from "../../../utils/allImgs";

import "./program.css";
const Program = () => {
  return (
    <div className="detail-section" id="program">
      <div className="upper-left">
        <img src={LeftPolly} alt="" />
      </div>
      <div className="upper-right">
        <img src={RightPolly} alt="" />
      </div>
      <div className="bottom-left">
        <img src={LeftPolly} alt="" />
      </div>
      <div className="bottom-right">
        <img src={RightPolly} alt="" />
      </div>
      <div className="detail-flex">
        <div className="detail-left">
          <img src={Detail1} alt="" />
        </div>
        <div className="detail-right">
          <h1>Our Program</h1>
          <p>
            The JayTradz team gives our members the premier resource for
            learning all things crypto. From the foundational background of
            crypto, to research on its future, you will have all the knowledge
            for your success at your fingertips. We have a vast catalog of
            educational material, video content, tutorials, and quizzes that
            will help you know all there is to know about the future...which is
            crypto.
          </p>
          <div className="header-btn"></div>
        </div>
      </div>
      <div className="detail-flex anti">
        <div className="detail-left">
          <img src={Detail2} alt="" />
        </div>
        <div className="detail-right">
          <h1>1. Basics of Crypto</h1>
          <ul className="detail-list">
            <li className="no-mar">
              Learn what cryptocurrency is, what you can do with it, and why it
              has value. Learn about Bitcoin and sound money
            </li>

            <li>Learn what Bitcoin mining is and how it works.</li>
            <li>Learn what Ethereum does and how it differs from Bitcoin.</li>
            <li>How the blockchain works and the problems it solves</li>
            <li>And more...</li>
          </ul>
        </div>
      </div>
      <div className="detail-flex">
        <div className="detail-left">
          <img src={Detail3} alt="" />
        </div>
        <div className="detail-right">
          <h1>2. How to Earn Crypto</h1>
          <ul className="detail-list">
            <li className="no-mar">
              Learn the risk vs reward of earning crypto
            </li>
            <li>
              Find out how you can earn crypto by watching educational videos
            </li>

            <li>
              Ways to work for crypto payments and how you can earn passive
              interest on crypto
            </li>
            <li>And more...</li>
          </ul>
        </div>
      </div>
      <div className="detail-flex anti">
        <div className="detail-left">
          <img src={Detail2} alt="" />
        </div>
        <div className="detail-right">
          <h1>3. How to Trade Crypto</h1>
          <ul className="detail-list">
            <li className="no-mar">
              Learn what crypto trading involves & the concept of risk.
              Understand the difference between Technical & Fundamental Analysis
              and the level of commitment required.
            </li>

            <li>
              Learn how crypto prices are formed, how exchanges work, the idea
              of price discovery & the influence of volatility.
            </li>
            <li>
              Understand the process of placing your first trade, and the
              trade-off between simplicity, precision and commission.
            </li>
            <li>And more...</li>
          </ul>
        </div>
      </div>
      <div className="detail-flex">
        <div className="detail-left">
          <img src={Detail4} alt="" />
        </div>
        <div className="detail-right">
          <h1>4. How to Use Crypto</h1>
          <ul className="detail-list">
            <li className="no-mar">
              Discover the world of smart contracts, how they work, their
              benefits, and how they will shape the future.
            </li>
            <li>
              Learn how crypto wallets work and how you store, send, and receive
              your crypto.
            </li>

            <li>
              Crypto banking and how to earn interest on your crypto...and even
              get crypto loans.
            </li>
            <li>And more...</li>
          </ul>
        </div>
      </div>
      <div className="detail-flex anti">
        <div className="detail-left">
          <img src={Detail5} alt="" />
        </div>
        <div className="detail-right">
          <h1>5. How to Build Crypto</h1>
          <ul className="detail-list">
            <li className="no-mar">
              Learn what Bitcoin and Ethereum architecture.
            </li>

            <li>
              Learn the roles that Bitcoin Full Nodes and Bitcoin Miners play.
            </li>

            <li>And more...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Program;
