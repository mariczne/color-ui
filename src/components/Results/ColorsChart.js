import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';


class ColorsChart extends Component {
  render() {
    return (
      <div className="chart" style={{height: '200px'}}>
        <Pie 
          data={this.props.data}
          options={{
            legend: {
              display: false,
              position: 'right'
            },
            title: {
              display: false,
              text: 'Color composition'
            },
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 1,
          }}
        />
      </div>
    );
  }
}

export default ColorsChart;