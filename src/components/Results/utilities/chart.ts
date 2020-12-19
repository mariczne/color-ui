import { lighten } from "color2k";
import { ChartData, ChartDataSets } from "chart.js";
import { Color } from "types/Color";

export interface PreparedData extends ChartData {
  datasets: [ChartDataSets];
}

export function prepareColorsForChart(colors: Color[]) {
  const preparedData: PreparedData = {
    labels: colors.map(getColorLabel),
    datasets: [{}],
  };

  preparedData.datasets[0].data = colors.map(getColorValue);
  preparedData.datasets[0].backgroundColor = colors.map(getBackgroundColor);
  preparedData.datasets[0].hoverBackgroundColor = colors.map(getHoverColor);
  // preparedData.datasets[0].label = "Color";

  return preparedData;
}

function getColorLabel(color: Color) {
  return `${color.w3c.name
    .replace(/([A-Z])/g, " $1")
    .trim()} (${color.raw_hex.toUpperCase()})`;
}

function getColorValue(color: Color) {
  return Math.round(color.value * 100);
}

function getBackgroundColor(color: Color) {
  return color.raw_hex;
}

// Lighten color on hover by 10%
function getHoverColor(color: Color) {
  return lighten(color.raw_hex, 0.1);
}