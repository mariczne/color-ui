import React, { useState } from "react";
import { Button, Grid, Form, Segment, Item } from "semantic-ui-react";
import { convertImageToBase64 } from "../../util/image";

const ImageUpload = ({ onUploadImage }) => {
  const [image, setImage] = useState(null);

  const onUploadImageChange = event => {
    if (event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const onUploadImageSubmit = async event => {
    event.preventDefault();

    const imageUrl = URL.createObjectURL(image);
    const base64 = await convertImageToBase64(image);

    onUploadImage({ base64, imageUrl });
  };

  return (
    <Grid>
      <Grid.Column textAlign="center">
        <Form onSubmit={onUploadImageSubmit}>
          {image ? <FileInfo imageName={image.name} /> : null}
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
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default ImageUpload;

const FileInfo = ({ imageName }) => {
  return (
    <Segment compact style={{ margin: "0px auto 14px" }}>
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
