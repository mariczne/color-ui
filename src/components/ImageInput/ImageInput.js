import React from "react";
import { Segment, Divider } from "semantic-ui-react";
import ImageUpload from "./ImageUpload";
import ImageURL from "./ImageURL";

const ImageInput = ({ onUploadImage }) => {
  return (
    <Segment>
      <ImageURL onUploadImage={onUploadImage} />
      <Divider horizontal>Or</Divider>
      <ImageUpload onUploadImage={onUploadImage} />
    </Segment>
  );
};

export default ImageInput;
