import React from 'react';
import { Pie } from 'react-chartjs-2';


const ColorsChart = (props) => {
  const { data } = props;
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
        data={data}
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
        }}
      />
    </div>
  );
};

export default ColorsChart;
