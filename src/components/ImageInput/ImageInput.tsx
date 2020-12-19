import { Segment, Divider } from "semantic-ui-react";
import { ImageUpload } from "./ImageUpload";
import { ImageURL } from "./ImageURL";
import { ImageSource } from "utilities/clarifai";

export interface ImageInputProps {
  onUploadImage: (imageSource: ImageSource) => void;
  uploadProgress: number | null;
  setUploadProgress: (progres: number | null) => void;
}

const ImageInput = ({
  onUploadImage,
  uploadProgress,
  setUploadProgress,
}: ImageInputProps) => {
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

export { ImageInput };
