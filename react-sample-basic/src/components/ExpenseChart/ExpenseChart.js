import React from "react";
import "./ExpenseChart.css";
import ExpenseChartBar from "./ExpenseChartBar";

const ExpenseChart = ({ dataPoints }) => {
  const values = dataPoints.map(data => data.value);
  const maxValue = Math.max(...values);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint, index) => (
        <ExpenseChartBar
          key={dataPoint.id + "_" + index}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default ExpenseChart;
