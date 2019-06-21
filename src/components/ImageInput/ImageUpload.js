import React from 'react';
import { Button, Grid } from 'semantic-ui-react';

const ImageUpload = (props) => {
  const { onUploadImageChange } = props;

  return (
    <Grid>
      <Grid.Column textAlign="center">
        <Button content="Upload image" icon="upload" labelPosition="left" color="teal" as="label" htmlFor="file" />
        <input
          type="file"
          id="file"
          hidden
          onChange={onUploadImageChange}
          accept="image/*"
        />
      </Grid.Column>
    </Grid>
  );
};

export default ImageUpload;
