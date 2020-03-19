import React from "react";
import { Segment, Divider } from "semantic-ui-react";
import ImageUpload from "./ImageUpload";
import ImageURL from "./ImageURL";

const ImageInput = ({ onUrlInputSubmit, onUploadImage, isUploadingImage }) => {
  return (
    <Segment>
      <ImageURL onUrlInputSubmit={onUrlInputSubmit} />
      <Divider horizontal>Or</Divider>
      <ImageUpload
        onUploadImage={onUploadImage}
        isUploadingImage={isUploadingImage}
      />
    </Segment>
  );
};

export default ImageInput;
