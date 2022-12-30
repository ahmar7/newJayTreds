import React from "react";
import { CopyIcon, WhitecopyIcon } from "../../../utils/allImgs";
import "./redeempoints.css";

const RedeemPoints = () => {
  return (
    <div className="redeempoints-section">
      <div className="inner-redeempoint">
        <h1 className="section-heading">REDEEM REWARD POINTS</h1>
        <p className="section-detail">
          All points may be exchanged for the reward of your choice at a rate of
          1 point = $1USD. Third-party companies, such as travel agents, or
          ticketing agents, shall provide some of the services in which points
          are redeemed. Note: The selection of points in the form of
          cryptocurrency shall be distributed to the wallet in which the
          membership is located.
        </p>
        <div className="referral-main">
          <div className="refrral-block">
            <div className="refrral-heading">
              <div className="left-heading">
                <h3>
                  <span className="bold">FLIGHTS </span> : Domestic Flight to
                  Las Vegas
                </h3>
              </div>
              <div className="right-heading">
                <button className="price-btn">$1,000</button>
                <button className="price-btn gray">$1,000</button>
                <button className="price-btn gray">$1,000</button>
                <button className="price-btn gray redeem-btn">Redeem</button>
              </div>
            </div>

            <p className="instr">
              Use your Rewards points to book a flight to Las Vegas. Select the
              amount you want to use, and once you hit the redeem button, you
              will receive a One-Time code that you can use with our agent to
              purchase your flight(s). Please note that the amount you select
              will be deducted from your total purchase with the agent. Any
              amount unused shall be forfeited, and you are responsible for any
              balance that goes over your redeemed amount.
            </p>
            <div className="card-btn">
              <button className="ref-btn">
                Referel Code : 12344567 <img src={WhitecopyIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="refrral-block">
            <div className="refrral-heading">
              <div className="left-heading">
                <h3>
                  <span className="bold">Hotel </span> : Hotel Stay in Las Vegas
                </h3>
              </div>
              <div className="right-heading">
                <button className="price-btn">$1,000</button>
                <button className="price-btn gray">$1,000</button>
                <button className="price-btn gray">$1,000</button>
                <button className="price-btn gray redeem-btn">Redeem</button>
              </div>
            </div>

            <p className="instr">
              Use your Rewards points to book your hotel stay in Las Vegas.
              Select the amount you want to use, and once you hit the redeem
              button, you will receive a One-Time code that you can use with our
              agent to book your hotel stay. Please note that the amount you
              select will be deducted from your total purchase with the agent.
              Any amount unused shall be forfeited, and you are responsible for
              any balance that goes over your redeemed amount.
            </p>
            <div className="card-btn">
              <button className="ref-btn">
                Referel Code : 12344567 <img src={WhitecopyIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="refrral-block">
            <div className="refrral-heading">
              <div className="left-heading">
                <h3>
                  <span className="bold">CONCERTS/EVENTS TICKETS </span>
                </h3>
              </div>
              <div className="right-heading">
                <button className="price-btn">$500</button>
                <button className="price-btn gray">$1,000</button>
                <button className="price-btn gray redeem-btn">Redeem</button>
              </div>
            </div>

            <p className="instr">
              Use your Rewards points to get tickets to the hottest concerts and
              events in Las Vegas. Select the amount you want to use, and once
              you hit the redeem button, you will receive a One-Time code that
              you can use with our agent to purchase your concert/event
              ticket(s). Please note that the amount you select will be deducted
              from your total purchase with the agent. Any amount unused shall
              be forfeited, and you are responsible for any balance that goes
              over your redeemed amount.
            </p>
            <div className="card-btn">
              <button className="ref-btn">
                Referel Code : 12344567 <img src={WhitecopyIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="refrral-block">
            <div className="refrral-heading">
              <div className="left-heading">
                <h3>
                  <span className="bold">JayTradz "SWAG BAG" </span>
                </h3>
              </div>
              <div className="right-heading">
                <button className="price-btn gray">$500</button>
                <button className="price-btn gray redeem-btn">Redeem</button>
              </div>
            </div>

            <p className="instr">
              Get your JayTradz Swag Bag which includes hats, T-shirts, desktop
              items, accessories, and more. Once you hit the redeem button, you
              will receive a One-Time code that you can use with our agent to
              get your stylish items delivered directly to you.
            </p>
            <div className="card-btn">
              <button className="ref-btn">
                Referel Code : 12344567 <img src={WhitecopyIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="refrral-block">
            <div className="refrral-heading">
              <div className="left-heading">
                <h3>
                  <span className="bold">CRYPTOCURRENCY </span> : ( USDT Amount)
                </h3>
              </div>
              <div className="right-heading">
                <input type="text " value="$10,870.00" />
                <button className="price-btn gray redeem-btn">Max</button>
              </div>
            </div>

            <p className="instr">
              Convert your Rewards points into cryptocurrency. Either enter the
              amount that you wish to redeem as USDT, or select the MAX button;
              confirm your wallet address; and then hit the withdrawal button.
            </p>
            <div className="card-btn">
              <button className="ref-btn">
                0as0cis0jcwejf9jwe9dj230032rjd023udx0fjm9ajsfuiergh394ghefn
              </button>
            </div>
            <div className="confirm-msg">
              <h3>CONFIRM USDT (ERC-20) WALLET PAYOUT ADDRESS</h3>
            </div>
            <div className="check-mark">
              <input type="checkbox" name="" id="" />
              <p>
                By checking this box, I acknowledge that i have read and
                understand the TERMS OF SERVICE and our PRIVACY POLICY, and the
                you full agree to the terms and to abid by the rules and
                regulations.
              </p>
            </div>
            <button className="copyBtn dc">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemPoints;
