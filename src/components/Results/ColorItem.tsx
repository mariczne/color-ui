import { Table } from "semantic-ui-react";
import * as clipboard from "clipboard-polyfill/text";
import { Color } from "types/Color";

const ColorItem = ({ color }: { color: Color }) => {
  const cellStyle = {
    backgroundImage: `linear-gradient(to right, ${color.raw_hex}, ${color.raw_hex})`,
    cursor: "copy",
  };

  const spanStyle = {
    background: "inherit",
    WebkitBackgroundClip: "text",
    color: "transparent",
    filter: "invert(1) grayscale(1) contrast(999)",
  };

  const handleColorClick = () => {
    clipboard.writeText(color.raw_hex);
  };

  return (
    <Table.Row onClick={handleColorClick}>
      <Table.Cell style={cellStyle}>
        <span style={spanStyle}>{`${Math.round(color.value * 100)}%`}</span>
      </Table.Cell>
      <Table.Cell style={cellStyle}>
        <span style={spanStyle}>
          {color.w3c.name.replace(/([A-Z])/g, " $1").trim()}
        </span>
      </Table.Cell>
      <Table.Cell style={cellStyle}>
        <span style={spanStyle}>{color.raw_hex.toUpperCase()}</span>
      </Table.Cell>
    </Table.Row>
  );
};

export default ColorItem;
