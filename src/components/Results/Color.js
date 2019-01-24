import React from 'react';
import { List } from 'semantic-ui-react';

const Color = ({ data }) => {
    if (!data) {
      return <div />
    }

    return (
      <List.Item style={{backgroundColor: data.raw_hex, color: 'white'}}>
        <span>{Math.round(data.value * 100) + '%'} {data.w3c.name.replace(/([A-Z])/g, ' $1').trim()}</span>
        <span className="float-right">{data.raw_hex}</span>
      </List.Item>
    );
}

export default Color;