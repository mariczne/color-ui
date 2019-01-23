import React from 'react';
import { ListGroupItem } from 'reactstrap';

const Color = ({ data }) => {
    if (!data) {
      return <div />
    }

    return (
      <ListGroupItem style={{backgroundColor: data.raw_hex, color: 'white'}}>
        {Math.round(data.value * 100) + '%'} {data.raw_hex} {data.w3c.name.replace(/([A-Z])/g, ' $1').trim()} 
      </ListGroupItem>
    );
}

export default Color;