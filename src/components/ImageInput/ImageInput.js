import React from 'react';
import { Segment, Input } from 'semantic-ui-react';

const ImageInput = ({ onInputChange, onButtonSubmit }) => {
    return (
          <Segment>
              <Input
                action={{ color: 'teal', labelPosition: 'left', icon: 'upload', content: 'Send', onClick: onButtonSubmit }}
                placeholder='Image URL'
                style={{width: '100%'}}
                onChange={ onInputChange }
              />
          </Segment>
    );
}

export default ImageInput;
