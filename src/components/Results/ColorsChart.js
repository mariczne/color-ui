import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';

class ColorsChart extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
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