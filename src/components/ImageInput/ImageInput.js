import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';

class ImageInput extends Component {
  render() {
    return (
      <Segment>
        <Input
          action={{ color: 'teal', labelPosition: 'left', icon: 'upload', content: 'Send', onClick: this.props.onButtonSubmit }}
          placeholder='Image URL'
          style={{width: '100%'}}
          onChange={ this.props.onInputChange }
        />
      </Segment>
    );
  }
}

export default ImageInput;
