import React from 'react';
import { Table } from 'semantic-ui-react';
import Color from './Color';

const ColorsList = (props) => {
  const { data } = props;

  if (data.length < 1) {
    return <div style={{ height: '100px' }} />;
  }

  return (
    <Table compact celled size="small" unstackable verticalAlign="middle">
      <Table.Body>
        {data.map((color, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Color key={index} data={color} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ColorsList;
