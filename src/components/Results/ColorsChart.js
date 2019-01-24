import React, {Component} from 'react';
// import { List } from 'semantic-ui-react';
import { Pie } from 'react-chartjs-2';

class ColorsChart extends Component {
    constructor(props){
      super(props);
      this.state = {
        chartData: this.props.data
      }
    }

    render(){
      return (
        <div className="chart">
          <Pie 
            data={this.state.chartData}
            options={{
              legend: {
                display: true,
                position: 'right'
              },
              title: {
                display: false,
                text: 'Color composition'
              },
              responsive: false,
              maintainAspectRatio: false,
              aspectRatio: 2,
            }}
          />
        </div>
      );
    }
}

export default ColorsChart;

// const ColorsChart = ({ data }) => {
//   if (!data) {
//     return <div />
//   }

//   return (
//     <List.Item style={{backgroundColor: data.raw_hex, color: 'white'}}>
//       <span>{Math.round(data.value * 100) + '%'} {data.w3c.name.replace(/([A-Z])/g, ' $1').trim()}</span>
//       <span className="float-right">{data.raw_hex}</span>
//     </List.Item>
//   );
// }