import { Pie } from "react-chartjs-2";
import { ResultsProps } from "./Results";
import { prepareColorsForChart } from "./utilities/chart";

const ColorsChart = ({ colors }: Pick<ResultsProps, "colors">) => {
  return (
    <div
      className="chart"
      style={{
        position: "relative",
        margin: "auto",
        height: "100%",
        width: "100%",
      }}
    >
      <Pie
        data={prepareColorsForChart(colors)}
        options={{
          legend: {
            display: false,
            position: "right",
          },
          title: {
            display: false,
            text: "Color composition",
          },
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 1,
          elements: {
            arc: {
              borderColor: "#dedede",
              borderWidth: 1,
            },
          },
          tooltips: {
            callbacks: {
              label({ index, datasetIndex }, { datasets }) {
                if (
                  (!index && index !== 0) ||
                  (!datasetIndex && datasetIndex !== 0)
                ) {
                  return "";
                }

                if (!datasets) return "";
                const dataset = datasets[datasetIndex];

                if (!dataset || !dataset.data) return "";
                const label = dataset.data[index];

                return ` ${label}%`;
              },
              title(tooltipItems, data) {
                const item = tooltipItems[0];
                if (!item || (!item.index && item.index !== 0)) return "";
                if (!data.labels) return "";

                return String(data.labels[item.index]);
              },
            },
          },
        }}
      />
    </div>
  );
};

export { ColorsChart };
