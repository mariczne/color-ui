import { Segment, Divider } from "semantic-ui-react";
import ImageUpload from "./ImageUpload";
import ImageURL from "./ImageURL";

const ImageInput = ({ onUploadImage, uploadProgress, setUploadProgress }) => {
  return (
    <Segment>
      <ImageURL onUploadImage={onUploadImage} />
      <Divider horizontal>Or</Divider>
      <ImageUpload
        onUploadImage={onUploadImage}
        uploadProgress={uploadProgress}
        setUploadProgress={setUploadProgress}
      />
    </Segment>
  );
};

export default ImageInput;
