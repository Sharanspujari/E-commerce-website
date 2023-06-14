import React, { useState } from "react";

const Sidebar = ({ handleClick }) => {
  const [checkedValue, setCheckedValue] = useState(true);
  const [ascval, setAscval] = useState(true);

  const setHigh = (e,type) => {
    setCheckedValue(!checkedValue);
    handleClick(type,checkedValue)
  };

  const setLow = (e,type) => {
    setAscval(!ascval);
    handleClick(type,ascval)
  };

  return (
    <div className="side-bar">
      <h3 className="filter_heading">Sort Products by Price</h3>

      <div className="checbox_container">
        <div className="highprice">
          <input
            type="checkbox"
            className="checkbox"
            value={checkedValue}
            onClick={(e) => setHigh(e,"desc")}
          />
          <label>High Price</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="checkbox"
            value={ascval}
            onClick={(e) => setLow(e,"asc")}
          />
          <label>Low Price</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
