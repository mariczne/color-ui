import React, { useState, useRef } from "react";
import { Button, Grid, Form, Segment, Item, Progress } from "semantic-ui-react";
import { convertImageToBase64 } from "../../utilities/image";

const ImageUpload = ({ onUploadImage, uploadProgress, setUploadProgress }) => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const onUploadImageChange = (event) => {
    if (event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
    setUploadProgress(null);
  };

  const onUploadImageSubmit = async (event) => {
    event.preventDefault();

    const imageUrl = URL.createObjectURL(image);
    const base64 = await convertImageToBase64(image);

    onUploadImage({ base64, imageUrl });
  };

  return (
    <Grid>
      <Grid.Column textAlign="center">
        <Form onSubmit={onUploadImageSubmit}>
          {image && (
            <FileInfo imageName={image.name} uploadProgress={uploadProgress} />
          )}
          <Button
            type="button"
            content="Select image to upload"
            icon="disk"
            labelPosition="left"
            onClick={() => fileInputRef.current?.click()}
          />
          <input
            ref={fileInputRef}
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

const FileInfo = ({ imageName, uploadProgress }) => {
  return (
    <Segment compact style={{ margin: "0px auto 14px" }}>
      <Item.Group>
        <Item style={{ margin: "0px" }}>
          <Item.Content>
            <Item.Header style={{ wordBreak: "break-all" }}>
              {imageName}
            </Item.Header>
            <Item.Extra>
              {uploadProgress ? (
                <Progress
                  percent={uploadProgress}
                  indicating={uploadProgress > 100}
                  autoSuccess
                />
              ) : null}
              <Button
                type="submit"
                content="Upload"
                icon="upload"
                labelPosition="left"
                color="teal"
                autoFocus
              />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};
