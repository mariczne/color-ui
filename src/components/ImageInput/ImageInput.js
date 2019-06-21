import React from 'react';
import { Segment, Input, Divider } from 'semantic-ui-react';
import ImageUpload from './ImageUpload';

const ImageInput = (props) => {
  const { onUrlInputChange, onImageSubmit, onUploadImageChange, uploadingImage } = props;
  return (
    <Segment loading={uploadingImage}>
      <Input
        action={{
          color: 'teal', labelPosition: 'left', icon: 'file image', content: 'Submit', onClick: onImageSubmit,
        }}
        placeholder="Image URL"
        fluid
        onChange={onUrlInputChange}
      />

      <Divider horizontal>Or</Divider>

      <ImageUpload onUploadImageChange={onUploadImageChange} />
    </Segment>
  );
};

export default ImageInput;
