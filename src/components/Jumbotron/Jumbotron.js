import React, { useState } from "react";
import { Message, Header } from "semantic-ui-react";

const Jumbotron = () => {
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
  };

  if (visible) {
    return (
      <Message color="teal" onDismiss={handleDismiss}>
        <Header as="h1">Hello!</Header>
        <p style={{ fontSize: "16px" }}>
          This is color-ui, a simple web interface which analyzes the color
          composition of an image for you. To begin, either paste the URL of the
          image in the box below and click &apos;Send&apos; or upload one from
          your device.
        </p>
      </Message>
    );
  }
  return null;
};

export default Jumbotron;
