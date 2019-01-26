import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';
import Color from './Color.js';

class ColorsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: this.props.data
    }
  }

  render(){
    return (
        <Table unstackable celled verticalAlign={"middle"}>
          {this.props.data.map((color, index) => (
            <Color key={index} data={color} />
          ))}
        </Table>
    );
  }
}

export default ColorsList;

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