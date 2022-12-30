import React from "react";
import { Headerdiscord } from "../../../utils/allImgs";
import "./header.css";
const Header = () => {
  return (
    <div className="header-section">
      <div className="header-bg">
        <div className="inner-bg">
          <div className="overlay-content">
            <p className="italic">Welcome To....</p>
            <h1 className="head">
              the premier <span className="blk"> resource for</span>
              <span className="clr"> trading.</span>
            </h1>
            <p className="header-detail">
              JayTradz, the premier resource for trading in the crypto equities
              market, is
              <span className="blk">
                expanding our standard memberships and presenting a program.
              </span>
            </p>
            <div className="header-discord">
              <h3>Need help with Getting Started, join...</h3>
              <a target="_blank" href="https://discord.gg/Rh6j6uE3qB">
                <img src={Headerdiscord} alt="" /> DISCORD
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
