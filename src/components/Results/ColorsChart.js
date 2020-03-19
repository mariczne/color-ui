import React from "react";
import { Pie } from "react-chartjs-2";

const prepareDataForChart = data => {
  const preparedData = {
    labels: [],
    datasets: [{ data }]
  };

  preparedData.labels = data.map(
    color =>
      `${color.w3c.name
        .replace(/([A-Z])/g, " $1")
        .trim()} (${color.raw_hex.toUpperCase()})`
  );

  preparedData.datasets[0].data = data.map(color =>
    Math.round(color.value * 100)
  );

  preparedData.datasets[0].backgroundColor = data.map(color => color.raw_hex);

  preparedData.datasets[0].hoverBackgroundColor = [
    ...preparedData.datasets[0].backgroundColor
  ];

  preparedData.datasets[0].label = "Color";

  return preparedData;
};

const ColorsChart = props => {
  const { colors } = props;

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
        data={prepareDataForChart(colors)}
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
                const value = dataset.data[tooltipItem.index];
                return ` ${value}%`;
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
