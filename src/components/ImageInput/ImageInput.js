import React from 'react';
import { Segment, Input } from 'semantic-ui-react';

const ImageInput = (props) => {
  const { onInputChange, onButtonSubmit } = props;
  return (
    <Segment>
      <Input
        action={{
          color: 'teal', labelPosition: 'left', icon: 'file image', content: 'Send', onClick: onButtonSubmit,
        }}
        placeholder="Image URL"
        fluid
        onChange={onInputChange}
      />
    </Segment>
  );
};

export default ImageInput;
