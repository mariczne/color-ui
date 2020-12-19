import { useState, useRef } from "react";
import { Button, Grid, Form } from "semantic-ui-react";
import { ImageInputProps } from "./ImageInput";
import FileInfo from "./FileInfo"
import { convertImageToBase64 } from "../../utilities/image";

const ImageUpload = ({
  onUploadImage,
  uploadProgress,
  setUploadProgress,
}: ImageInputProps) => {
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onUploadImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    if (event.target.files.length > 0) {
      setImage(event.target?.files[0]);
    }

    setUploadProgress(null);
  };

  const onUploadImageSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!image) return;

    const url = URL.createObjectURL(image);
    const base64 = await convertImageToBase64(image);

    onUploadImage({ url, base64: base64 || undefined });
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
