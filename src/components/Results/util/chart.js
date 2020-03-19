export function prepareColorsForChart(colors) {
  const preparedData = {
    labels: [],
    datasets: [{ colors }]
  };

  preparedData.labels = colors.map(
    color =>
      `${color.w3c.name
        .replace(/([A-Z])/g, " $1")
        .trim()} (${color.raw_hex.toUpperCase()})`
  );

  preparedData.datasets[0].data = colors.map(color =>
    Math.round(color.value * 100)
  );

  preparedData.datasets[0].backgroundColor = colors.map(color => color.raw_hex);

  preparedData.datasets[0].hoverBackgroundColor = [
    ...preparedData.datasets[0].backgroundColor
  ];

  preparedData.datasets[0].label = "Color";

  return preparedData;
}
