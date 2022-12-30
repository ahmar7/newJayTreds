import React from "react";
import { ScriptIcon } from "../../../utils/allImgs";
import "./transactionhistory.css";
const Transactionhistory = () => {
  return (
    <div className="transaction-section">
      <div className="inner-transaction">
        <h1 className="section-heading">transaction History</h1>
        <div className="transaction-script">
          <p>
            All points may be exchanged for the reward of your choice at a rate
            of 1 poin
          </p>
          <img src={ScriptIcon} alt="" />
        </div>
        <div className="transaction-script">
          <p>
            All points may be exchanged for the reward of your choice at a rate
            of 1 poin
          </p>
          <img src={ScriptIcon} alt="" />
        </div>
        <div className="transaction-script">
          <p>
            All points may be exchanged for the reward of your choice at a rate
            of 1 poin
          </p>
          <img src={ScriptIcon} alt="" />
        </div>
        <div className="transaction-script">
          <p>
            All points may be exchanged for the reward of your choice at a rate
            of 1 poin
          </p>
          <img src={ScriptIcon} alt="" />
        </div>
        <div className="transaction-script">
          <p>
            All points may be exchanged for the reward of your choice at a rate
            of 1 poin
          </p>
          <img src={ScriptIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Transactionhistory;
