import React from "react";
import PropTypes from "prop-types";
import "./ExpenseChartBar.css";

const ExpenseChartBar = ({ value, label, maxValue }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

ExpenseChartBar.prototype = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  maxValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string.isRequired,
};

export default ExpenseChartBar;
