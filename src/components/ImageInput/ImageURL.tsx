import { useState } from "react";
import { Input, Form } from "semantic-ui-react";
import { ImageInputProps } from "./ImageInput";

export type ImageURLProps = Pick<ImageInputProps, "onUploadImage">;

const ImageURL = ({ onUploadImage }: ImageURLProps) => {
  const [urlInput, setUrlInput] = useState("");

  const onUrlInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(event.target.value);
  };

  return (
    <Form onSubmit={() => onUploadImage({ url: urlInput })}>
      <Input
        action={{
          color: "teal",
          labelPosition: "left",
          icon: "file image",
          content: "Submit",
        }}
        placeholder="Image URL"
        fluid
        onChange={onUrlInputChange}
        value={urlInput}
        type="url"
        required
      />
    </Form>
  );
};

export { ImageURL };
