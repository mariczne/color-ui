import React from 'react';
import {
  Button, Grid, Form, Segment, Item,
} from 'semantic-ui-react';
import axios from 'axios';

class ImageUpload extends React.Component {
  state = {
    image: null,
  }

  onUploadImageChange = (event) => {
    if (event.target.files.length > 0) {
      this.setState({
        image: event.target.files[0],
      });
    }
  };

  onUploadImageSubmit = (event) => {
    event.preventDefault();

    const { onUploadImage } = this.props;
    const { image } = this.state;
    const uploadedImageLocalUrl = URL.createObjectURL(image);

    // convert image referred to by ObjectURL to base64 string and pass it to App component
    axios({
      method: 'get',
      url: uploadedImageLocalUrl,
      responseType: 'blob',
    }).then((response) => {
      const reader = new FileReader();
      reader.readAsDataURL(response.data);
      reader.onloadend = () => {
        const base64data = reader.result;
        // @ts-ignore
        onUploadImage(base64data.substr(base64data.indexOf(',') + 1), uploadedImageLocalUrl);
      };
    });
  };

  renderFileInfo() {
    const { isUploadingImage } = this.props;
    const { image } = this.state;

    return (
      <Segment compact style={{ margin: '14px auto 0px' }} loading={isUploadingImage}>
        <Item.Group>
          <Item style={{ margin: '0  ' }}>
            <Item.Content>
              <Item.Header style={{ wordBreak: 'break-all' }}>{image.name}</Item.Header>
              <Item.Extra><Button type="submit" content="Upload" icon="upload" labelPosition="left" color="teal" /></Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }

  render() {
    const { image } = this.state;
    return (
      <Grid>
        <Grid.Column textAlign="center">
          <Form onSubmit={this.onUploadImageSubmit}>
            <Button content="Select image to upload" icon="disk" labelPosition="left" as="label" htmlFor="file" />
            <input
              type="file"
              id="file"
              hidden
              onChange={this.onUploadImageChange}
              accept="image/*"
            />
            {image ? this.renderFileInfo() : null}
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default ImageUpload;
