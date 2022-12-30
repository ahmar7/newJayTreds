import React from "react";
import {
  Monthlychairman,
  Quarterlychairman,
  StarEmpty,
  StarFill,
  StarHalf,
  Yearlychairman,
} from "../../../../utils/allImgs";
const Cards = () => {
  return (
    <div className="minting-cards">
      <div className="card-name">
        <div className="minting-name">Chairman</div>
        <div className="stars">
          <img src={StarFill} alt="" />
          <img src={StarFill} alt="" />
          <img src={StarFill} alt="" />
          <img src={StarFill} alt="" />
          <img src={StarHalf} alt="" />
        </div>
      </div>
      <div className="plan-cards">
        <div className="single-plan">
          <div className="upper-block">
            <img src={Monthlychairman} alt="" />
            <h2>Chairman Monthly </h2>
          </div>
          <div className="lower-block">
            <div className="minting-calc">
              <div className="calc">
                <div className="minus-btn">-</div>
                <div className="quantity">0</div>
                <div className="plus-btn">+</div>
              </div>
              <div className="calc-btn">
                <button>Mint</button>
              </div>
            </div>
            <div className="last">
              <div className="total-price nm">
                <div className="total-name">total :</div>
                <div className="total-ps">0 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">Price :</div>
                <div className="total-ps">$100,000 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">** USDT (ERC-20) </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-plan">
          <div className="upper-block">
            <img src={Quarterlychairman} alt="" />
            <h2>Chairman Quarterly </h2>
          </div>
          <div className="lower-block">
            <div className="minting-calc">
              <div className="calc">
                <div className="minus-btn">-</div>
                <div className="quantity">0</div>
                <div className="plus-btn">+</div>
              </div>
              <div className="calc-btn">
                <button>Mint</button>
              </div>
            </div>
            <div className="last">
              <div className="total-price nm">
                <div className="total-name">total :</div>
                <div className="total-ps">0 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">Price :</div>
                <div className="total-ps">$100,000 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">** USDT (ERC-20) </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-plan">
          <div className="upper-block">
            <img src={Yearlychairman} alt="" />
            <h2>Chairman Semi-Yearly</h2>
          </div>
          <div className="lower-block">
            <div className="minting-calc">
              <div className="calc">
                <div className="minus-btn">-</div>
                <div className="quantity">0</div>
                <div className="plus-btn">+</div>
              </div>
              <div className="calc-btn">
                <button>Mint</button>
              </div>
            </div>
            <div className="last">
              <div className="total-price nm">
                <div className="total-name">total :</div>
                <div className="total-ps">0 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">Price :</div>
                <div className="total-ps">$100,000 USDT</div>
              </div>
              <div className="total-price ">
                <div className="total-name">** USDT (ERC-20) </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
