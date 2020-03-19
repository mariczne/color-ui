import React, { useState } from "react";
import { Input, Form } from "semantic-ui-react";

const ImageURL = ({ onUrlInputSubmit }) => {
  const [urlInput, setUrlInput] = useState("");

  const onUrlInputChange = event => {
    setUrlInput(event.target.value);
  };

  return (
    <Form onSubmit={() => onUrlInputSubmit(urlInput)}>
      <Input
        action={{
          color: "teal",
          labelPosition: "left",
          icon: "file image",
          content: "Submit"
        }}
        placeholder="Image URL"
        fluid
        onChange={onUrlInputChange}
        value={urlInput}
        type="url"
      />
    </Form>
  );
};

export default ImageURL;
