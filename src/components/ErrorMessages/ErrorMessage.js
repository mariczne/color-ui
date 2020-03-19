import React from "react";
import { Message, Icon } from "semantic-ui-react";

const ErrorMessage = ({ error }) => {
  return (
    <Message negative icon>
      <Icon name="x" />
      <Message.Content>
        <Message.Header>
          {error.toString()}: {error.response.statusText}
        </Message.Header>
        Please try again
      </Message.Content>
    </Message>
  );
};

export default ErrorMessage;
