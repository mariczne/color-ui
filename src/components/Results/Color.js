import React from 'react';
import { Table } from 'semantic-ui-react';

const Color = ({ data }) => {
  if (!data) {
    return <div />
  }

  return (
    <Table.Row style={{backgroundColor: data.raw_hex, color: 'white'}}>
      <Table.Cell>
        {Math.round(data.value * 100) + '%'} 
      </Table.Cell>
      <Table.Cell>
        {data.w3c.name.replace(/([A-Z])/g, ' $1').trim()}
      </Table.Cell>
      <Table.Cell>
        {data.raw_hex.toUpperCase()}
      </Table.Cell>
    </Table.Row>
  );
}

export default Color;