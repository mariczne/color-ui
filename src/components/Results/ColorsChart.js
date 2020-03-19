import React from "react";
import { Pie } from "react-chartjs-2";
import { prepareColorsForChart } from "./util/chart.js";

const ColorsChart = ({ colors }) => {
  return (
    <div
      className="chart"
      style={{
        position: "relative",
        margin: "auto",
        height: "100%",
        width: "100%"
      }}
    >
      <Pie
        data={prepareColorsForChart(colors)}
        options={{
          legend: {
            display: false,
            position: "right"
          },
          title: {
            display: false,
            text: "Color composition"
          },
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 1,
          elements: {
            arc: {
              borderColor: "#dedede",
              borderWidth: 1
            }
          },
          tooltips: {
            callbacks: {
              label(tooltipItem, data) {
                const dataset = data.datasets[tooltipItem.datasetIndex];
                const label = dataset.data[tooltipItem.index];
                return ` ${label}%`;
              },
              title(tooltipItem, data) {
                return data.labels[tooltipItem[0].index];
              }
            }
          }
        }}
      />
    </div>
  );
};

export default ColorsChart;
