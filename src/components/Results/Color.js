import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

class Color extends Component {
  render() {
    return (
      <Table.Row style={{backgroundColor: this.props.data.raw_hex, color: 'white'}}>
        <Table.Cell>
          {Math.round(this.props.data.value * 100) + '%'} 
        </Table.Cell>
        <Table.Cell>
          {this.props.data.w3c.name.replace(/([A-Z])/g, ' $1').trim()}
        </Table.Cell>
        <Table.Cell>
          {this.props.data.raw_hex.toUpperCase()}
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default Color;