import React from 'react';
import { Input, Form } from 'semantic-ui-react';

class ImageURL extends React.Component {
  state = { urlInput: '' };

  onUrlInputChange = (event) => {
    this.setState({ urlInput: event.target.value });
  };

  onUrlInputSubmit = (event) => {
    event.preventDefault();

    const { onUrlInputSubmit } = this.props;
    const { urlInput } = this.state;
    onUrlInputSubmit(urlInput);
  }

  render() {
    const { urlInput } = this.state;

    return (
      <Form onSubmit={this.onUrlInputSubmit}>
        <Input
          action={{
            color: 'teal', labelPosition: 'left', icon: 'file image', content: 'Submit',
          }}
          placeholder="Image URL"
          fluid
          onChange={this.onUrlInputChange}
          value={urlInput}
          type="url"
        />
      </Form>
    );
  }
}

export default ImageURL;
