import React from 'react';
import { Table } from 'semantic-ui-react';

const Color = (props) => {
  const { color } = props;

  const cellStyle = {
    backgroundImage: `linear-gradient(to right, ${color.raw_hex}, ${color.raw_hex})`,
  };

  const spanStyle = {
    background: 'inherit', WebkitBackgroundClip: 'text', color: 'transparent', filter: 'invert(1) grayscale(1) contrast(999)',
  };

  return (
    <Table.Row>
      <Table.Cell style={cellStyle}>
        <span style={spanStyle}>
          {`${Math.round(color.value * 100)}%`}
        </span>
      </Table.Cell>
      <Table.Cell style={cellStyle}>
        <span style={spanStyle}>
          {color.w3c.name.replace(/([A-Z])/g, ' $1').trim()}
        </span>
      </Table.Cell>
      <Table.Cell style={cellStyle}>
        <span style={spanStyle}>
          {color.raw_hex.toUpperCase()}
        </span>
      </Table.Cell>
    </Table.Row>
  );
};

export default Color;
