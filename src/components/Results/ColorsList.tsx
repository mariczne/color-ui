import { Table } from "semantic-ui-react";
import { ColorItem } from "./ColorItem";
import { ResultsProps } from "./Results";

const ColorsList = ({ colors }: Pick<ResultsProps, "colors">) => {
  if (colors.length < 1) {
    return <div style={{ height: "100px" }} />;
  }

  return (
    <Table compact celled size="small" unstackable verticalAlign="middle">
      <Table.Body>
        {colors.map((color) => (
          <ColorItem key={color.raw_hex} color={color} />
        ))}
      </Table.Body>
    </Table>
  );
};

export { ColorsList };
