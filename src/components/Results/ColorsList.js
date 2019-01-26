import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';
import Color from './Color.js';

class ColorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: this.props.data
    }
  }

  render() {
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