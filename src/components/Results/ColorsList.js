import React from "react";
import { Table } from "semantic-ui-react";
import Color from "./Color";

const ColorsList = props => {
  const { colors } = props;

  if (colors.length < 1) {
    return <div style={{ height: "100px" }} />;
  }

  return (
    <Table compact celled size="small" unstackable verticalAlign="middle">
      <Table.Body>
        {colors.map(color => (
          <Color key={color.raw_hex} color={color} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default ColorsList;
