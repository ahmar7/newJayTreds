import React from "react";
import { LeftPolly, RightPolly } from "../../../utils/allImgs";
import "./activemembership.css";
const Activemembership = () => {
  return (
    <div className="active-section">
      <div className="bottom-left">
        <img src={LeftPolly} alt="" />
      </div>
      <div className="bottom-right">
        <img src={RightPolly} alt="" />
      </div>
      <h1 className="section-heading">Active Membership</h1>
      <div className="active-row">
        <div className="membership-input">
          <div className="mem-head">Intern</div>
          <div className="mem-blocks">
            <div className="indiv-main">
              <div className="indiv-input">1</div>
              <span className="keyword">M</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">Q</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">S</span>
            </div>
          </div>
        </div>
        <div className="membership-input">
          <div className="mem-head">Associate</div>
          <div className="mem-blocks">
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">M</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">2</div>
              <span className="keyword">Q</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">S</span>
            </div>
          </div>
        </div>
        <div className="membership-input">
          <div className="mem-head">Executive</div>
          <div className="mem-blocks">
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">M</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">2</div>
              <span className="keyword">Q</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">S</span>
            </div>
          </div>
        </div>
        <div className="membership-input top-mar">
          <div className="mem-head">President</div>
          <div className="mem-blocks">
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">M</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">Q</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">S</span>
            </div>
          </div>
        </div>
        <div className="membership-input top-mar">
          <div className="mem-head">Chairman</div>
          <div className="mem-blocks">
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">M</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">2</div>
              <span className="keyword">Q</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">S</span>
            </div>
          </div>
        </div>
        <div className="membership-input top-mar">
          <div className="mem-head">Corporate</div>
          <div className="mem-blocks">
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">M</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">2</div>
              <span className="keyword">Q</span>
            </div>
            <div className="indiv-main">
              <div className="indiv-input">0</div>
              <span className="keyword">S</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activemembership;
