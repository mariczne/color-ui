import React from 'react';
import { Pie } from 'react-chartjs-2';

const ColorsChart = (props) => {
  const { colors } = props;
  return (
    <div
      className="chart"
      style={{
        position: 'relative',
        margin: 'auto',
        height: '100%',
        width: '100%',
      }}
    >
      <Pie
        data={colors}
        options={{
          legend: {
            display: false,
            position: 'right',
          },
          title: {
            display: false,
            text: 'Color composition',
          },
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 1,
          elements: {
            arc: {
              borderColor: '#dedede',
              borderWidth: 1,
            },
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
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ColorsChart;
