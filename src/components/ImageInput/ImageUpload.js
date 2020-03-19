import React, { useState } from "react";
import { Button, Grid, Form, Segment, Item } from "semantic-ui-react";
import axios from "axios";

const ImageUpload = ({ isUploadingImage, onUploadImage }) => {
  const [image, setImage] = useState(null);

  const onUploadImageChange = event => {
    if (event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const onUploadImageSubmit = event => {
    event.preventDefault();

    const uploadedImageLocalUrl = URL.createObjectURL(image);

    // convert image referred to by ObjectURL to base64 string and pass it to App component
    axios({
      method: "get",
      url: uploadedImageLocalUrl,
      responseType: "blob"
    }).then(response => {
      const reader = new FileReader();
      reader.readAsDataURL(response.data);
      reader.onloadend = () => {
        const base64data = reader.result.toString();
        onUploadImage(
          base64data.substr(base64data.indexOf(",") + 1),
          uploadedImageLocalUrl
        );
      };
    });
  };

  return (
    <Grid>
      <Grid.Column textAlign="center">
        <Form onSubmit={onUploadImageSubmit}>
          <Button
            content="Select image to upload"
            icon="disk"
            labelPosition="left"
            as="label"
            htmlFor="file"
          />
          <input
            type="file"
            id="file"
            hidden
            onChange={onUploadImageChange}
            accept="image/*"
          />
          {image ? (
            <FileInfo
              imageName={image.name}
              isUploadingImage={isUploadingImage}
            />
          ) : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default ImageUpload;

const FileInfo = ({ imageName, isUploadingImage }) => {
  return (
    <Segment
      compact
      style={{ margin: "14px auto 0px" }}
      loading={isUploadingImage}
    >
      <Item.Group>
        <Item style={{ margin: "0px" }}>
          <Item.Content>
            <Item.Header style={{ wordBreak: "break-all" }}>
              {imageName}
            </Item.Header>
            <Item.Extra>
              <Button
                type="submit"
                content="Upload"
                icon="upload"
                labelPosition="left"
                color="teal"
              />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};
